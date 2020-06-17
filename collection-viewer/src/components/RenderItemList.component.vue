<template>
    <div class="remove-padding">
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
import { chunk } from "lodash";
import RenderItemComponent from "./RenderItem.component.vue";
import Navbar from "./Navbar.component.vue";

export default {
    components: {
        RenderItemComponent,
        Navbar
    },
    data() {
        return {
            nChunks: 1,
            page: 0,
            pageSize: 10,
            small: window.innerWidth < 400 ? true : false
        };
    },
    computed: {
        totalItems: function() {
            return this.$store.getters.itemsFlattened.length;
        },
        chunks: function() {
            if (window.innerWidth > 400 && window.innerWidth <= 1024) {
                this.nChunks = 2;
            } else if (window.innerWidth > 1024) {
                this.nChunks = 3;
                this.pageSize = 9;
            }
            let items = this.$store.getters.itemsFlattened.slice(
                (this.page - 1) * this.pageSize,
                (this.page - 1) * this.pageSize + this.pageSize
            );
            return chunk(items, this.nChunks);
        }
    }
};
</script>

<style lang="scss" scoped>
.remove-padding {
    padding: 0;
}
</style>


