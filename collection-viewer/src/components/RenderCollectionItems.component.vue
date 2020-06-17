<template>
    <div>
        <div class="my-2">
            <div class="text-sm">Filter items:</div>
            <el-button
                @click="filterItems = []"
                size="mini"
                type="success"
                :disabled="!filterItems.length"
            >
                <i class="fas fa-check"></i>&nbsp;select all items
            </el-button>
            <el-button
                @click="filterAll"
                type="warning"
                size="mini"
                :disabled="filterItems.length === itemFilters.length"
            >
                <i class="fas fa-ban"></i>&nbsp;deselect all items
            </el-button>

            <div class="flex flex-row flex-wrap">
                <el-tag
                    v-for="(item, idx) of collectionItemIds"
                    :key="idx"
                    class="cursor-pointer m-1"
                    :size="item.size"
                    :type="item.type"
                    @click="toggleItem(item)"
                >{{item.itemId}}</el-tag>
            </div>
        </div>
        <el-pagination
            :small="small"
            layout="prev, pager,  next"
            :page-size.sync="pageSize"
            :current-page.sync="page"
            :total="totalItems"
        ></el-pagination>
        <div v-for="(chunk, idx) of chunks" :key="idx">
            <div class="flex flex-row items-center">
                <div v-for="(item, idx) of chunk" :key="idx" class="flex-1 m-1">
                    <render-item-component :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { chunk, uniq, without } from "lodash";
import RenderItemComponent from "./RenderItem.component.vue";

export default {
    components: {
        RenderItemComponent
    },
    data() {
        return {
            nChunks: 1,
            page: 1,
            pageSize: 10,
            filterItems: [],
            small: window.innerWidth < 400 ? true : false
        };
    },
    computed: {
        totalItems: function() {
            return this.items.length;
        },
        items: function() {
            return this.$store.getters.itemsFlattened.filter(
                item =>
                    item.collectionId === this.$route.params.collectionId &&
                    !this.filterItems.includes(item.itemId)
            );
        },
        itemFilters: function() {
            return this.$store.getters.itemsFlattened.filter(
                item => item.collectionId === this.$route.params.collectionId
            );
        },
        chunks: function() {
            if (window.innerWidth > 400 && window.innerWidth <= 1024) {
                this.nChunks = 2;
            } else if (window.innerWidth > 1024) {
                this.nChunks = 3;
                this.pageSize = 9;
            }
            let items = this.items.slice(
                (this.page - 1) * this.pageSize,
                (this.page - 1) * this.pageSize + this.pageSize
            );
            return chunk(items, this.nChunks);
        },
        collectionItemIds: function() {
            const itemIds = uniq(
                this.itemFilters.map(item => item.itemId)
            ).sort();
            return itemIds.map(itemId => {
                return {
                    itemId: itemId,
                    type: this.filterItems.includes(itemId)
                        ? "warning"
                        : "success",
                    size: window.innerWidth < 768 ? "mini" : "medium"
                };
            });
        }
    },
    methods: {
        toggleItem(item) {
            this.filterItems = this.filterItems.includes(item.itemId)
                ? without(this.filterItems, item.itemId)
                : [...this.filterItems, item.itemId];
        },
        filterAll() {
            this.filterItems = this.itemFilters.map(item => item.itemId);
        }
    }
};
</script>


<style lang="scss" scoped>
</style>