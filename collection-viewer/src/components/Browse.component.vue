<template>
    <div class="flex flex-col">
        <el-tabs v-model="activeTab" class="p-1">
            <el-tab-pane label="Collections" name="collections">
                <div v-if="activeTab === 'collections'">
                    <browse-collection-component
                        class="my-2"
                        v-for="(collection, idx) of collections"
                        :key="idx"
                        :collection="collection"
                    >
                    </browse-collection-component>
                </div>
            </el-tab-pane>
            <el-tab-pane label="Items" name="items">
                <div v-if="activeTab === 'items'">
                    <div
                        class="my-2"
                        v-for="(collection, idx) of items"
                        :key="idx"
                    >
                        <div
                            class="flex flex-col px-2 md:px-6 bg-link-water m-4"
                            v-for="(items, name, idx2) of collection"
                            :key="idx2"
                        >
                            <div
                                class="mt-1 md:mt-8 p-1 heading-text-size flex flex-col md:flex-row"
                            >
                                <div class="md:pr-2">
                                    {{ items[0]["Shelfmark"][0] }}
                                </div>
                                <div>
                                    {{ items[0]["Collection Title"][0] }}
                                </div>
                            </div>
                            <div class="flex flex-row flex-wrap">
                                <div
                                    class="w-full md:w-1/2 lg:w-1/3 p-1"
                                    v-for="(item, idx3) of items"
                                    :key="idx3"
                                >
                                    <browse-item-component :item="item" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import BrowseCollectionComponent from "./BrowseCollection.component.vue";
import BrowseItemComponent from "./BrowseItem.component.vue";

export default {
    components: {
        BrowseCollectionComponent,
        BrowseItemComponent,
    },
    data() {
        return {
            activeTab: "items",
        };
    },
    computed: {
        collections: function() {
            return this.$store.state.collections;
        },
        items: function() {
            return this.$store.state.items;
        },
    },
};
</script>
