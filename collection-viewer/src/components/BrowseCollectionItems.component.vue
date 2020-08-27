<template>
    <div class="flex flex-col">
        <div
            v-for="(item, name, idx) in items"
            :key="idx"
            class="flex flex-col lg:justify-evenly my-2 bg-gray-200 mx-2 rounded-lg"
        >
            <div class="px-2" :id="itemId(item[0].Shelfmark[0])">
                {{ name }}
            </div>
            <div class="flex flex-col md:flex-row md:flex-wrap">
                <div
                    v-for="(entry, idx2) in item"
                    :key="idx2"
                    class="w-full md:w-1/2 lg:w-1/3 p-2"
                >
                    <browse-item-component :item="entry" class="bg-gray-200" />
                </div>
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
    computed: {
        items: function() {
            return this.$store.getters.collectionItems({
                collectionId: this.collectionId,
            });
        },
    },
    data() {
        return {};
    },
    methods: {
        itemId(shelfmark) {
            return shelfmark.split("/")[1];
        },
    },
};
</script>
