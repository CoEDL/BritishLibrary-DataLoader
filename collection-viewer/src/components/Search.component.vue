<template>
    <div class="flex flex-col p-2">
        <div>{{ content[language][0] }}</div>
        <el-input placeholder="Please input" v-model="query" @input="search"></el-input>
        <ul class="list-disc pl-6 text-xl">
            <li v-for="(result, idx) of results" :key="idx">
                <router-link
                    :to="routerLink(result)"
                    class="text-cloudburst hover:text-celadonblue"
                >
                    {{ result["Item title"].join(", ") }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import BrowseCollectionComponent from "./BrowseCollection.component.vue";
import BrowseItemComponent from "./BrowseItem.component.vue";
import Fuse from "fuse.js";
import { flattenDeep, uniq } from "lodash";

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
                includeScore: false,
                ignoreLocation: true,
                threshold: 0.0,
                keys: [],
            },
            fuse: undefined,
            results: [],
            content: {
                English: [
                    `To search the catalogue, type into the
                search box and the relevant results will appear
                below. Click on a title to be taken to the
                recording or image in the catalogue.`,
                ],
                TokPisin: [
                    `
                Sapos yu laik painim samting insait
                long kalsa laibri, bai yu taipim insait
                long “painim bokis” wanem samting yu laik painim.
                Taitel bilong ol rikoding o piksa yu painim
                bai kamap ananit. Na sapos yu klik long dispela
                taitel, bai yu kamap long em stret long kalsa laibri.
                `,
                ],
            },
        };
    },
    computed: {
        language: function() {
            return this.$store.state.language.selected;
        },
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
                    return { ...items[collectionId][itemId], collectionId };
                });
            });
            items = flattenDeep(items);
            items = items.map((item) => {
                item.collectionTitle = item["Collection title"][0];
                return item;
            });
            this.options.keys = uniq(flattenDeep(items.map((item) => Object.keys(item))));

            this.fuse = new Fuse(items, this.options);
        },
        search() {
            this.results = this.fuse
                .search(this.query)
                .map((r) => r.item)
                .slice(0, 10);
        },
        routerLink(item) {
            const collectionId = item.collectionId;
            const itemId = item["Call number"][0];
            return `/collection/${collectionId}#${itemId}`;
        },
    },
};
</script>
