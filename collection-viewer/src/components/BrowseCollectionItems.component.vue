<template>
    <div class="flex flex-col">
        <div
            v-for="(item, name, idx) in items"
            :key="idx"
            class="flex flex-col lg:justify-evenly my-2 bg-gray-200 mx-2 rounded-lg"
        >
            <div class="px-2 text-2xl" :id="item['Call number'][0]" :ref="item['Call number'][0]">
                {{ item["Call number"][0] }}
            </div>
            <div class="flex flex-col md:flex-row md:flex-wrap">
                <browse-item-component :item="item" class="bg-gray-200" />
            </div>
        </div>
    </div>
</template>

<script>
import BrowseItemComponent from "./BrowseItem.component.vue";

export default {
    components: {
        BrowseItemComponent,
    },
    props: {
        collectionId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            duration: 2000,
            scrollToOptions: {
                container: "#container",
            },
            selectedItem: this.$route.hash.replace("#", ""),
        };
    },
    computed: {
        collection: function() {
            return this.$store.state.collections[this.collectionId][0];
        },
        items: function() {
            return this.$store.getters.collectionItems({
                collectionId: this.collectionId,
            });
        },
    },
    mounted() {
        setTimeout(() => {
            if (!this.selectedItem) return;
            console.log(this.selectedItem);
            const element = this.$refs[this.selectedItem][0];
            this.$scrollTo(element, this.duration, this.scrollToOptions);
        }, 500);
    },
    methods: {
        itemId(shelfmark) {
            return `id_${shelfmark.split("/")[1]}`;
        },
    },
};
</script>
