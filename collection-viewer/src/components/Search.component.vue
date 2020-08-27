<template>
    <div class="flex flex-col p-2">
        <div>Search for a specific item:</div>
        <el-input
            placeholder="Please input"
            v-model="query"
            @input="search"
        ></el-input>
        <ul class="list-disc pl-6 text-xl">
            <li v-for="(result, idx) of results" :key="idx">
                <router-link
                    :to="routerLink(result)"
                    class="text-cloudburst hover:text-celadonblue"
                >
                    {{ result.Shelfmark[0] }} -
                    {{ result["Item Title"].join(", ") }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import BrowseCollectionComponent from "./BrowseCollection.component.vue";
import BrowseItemComponent from "./BrowseItem.component.vue";
import Fuse from "fuse.js";
import { flattenDeep, uniqBy } from "lodash";

export default {
    components: {
        BrowseCollectionComponent,
        BrowseItemComponent,
    },
    data() {
        return {
            query: "",
            activeTab: "items",
            options: {
                includeScore: true,
                keys: [
                    "Item Title",
                    "Description (Item Note)",
                    "Collection Title",
                    "Language",
                    "Location of Original",
                    "Performer/Contributor",
                    "Genre",
                    "Reference",
                    "Rights",
                ],
            },
            fuse: undefined,
            results: [],
        };
    },
    computed: {
        items: function() {
            return this.$store.state.items;
        },
    },
    watch: {
        items: function() {
            this.initialiseSearch();
        },
    },
    mounted() {
        this.initialiseSearch();
    },
    methods: {
        initialiseSearch() {
            let items = this.$store.state.items;
            items = Object.keys(items).map((collectionId) => {
                return Object.keys(items[collectionId]).map((itemId) => {
                    return items[collectionId][itemId];
                });
            });
            items = flattenDeep(items);
            items = items.map((item) => {
                item.collectionTitle = item["Collection Title"][0];
                return item;
            });
            this.fuse = new Fuse(items, this.options);
        },
        search() {
            this.results = this.fuse.search(this.query).map((r) => r.item);
        },
        routerLink(item) {
            const [collectionId, itemId] = item.Shelfmark[0].split("/");
            return `/collection/${collectionId}#${itemId}`;
        },
    },
};
</script>
