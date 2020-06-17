<template>
    <div class="remove-padding m-2">
        <el-pagination
            :small="small"
            layout="prev, pager,  next"
            :page-size.sync="pageSize"
            :current-page.sync="page"
            :total="totalItems"
        ></el-pagination>
        <div v-for="(chunk, idx) of chunks" :key="idx">
            <div class="flex flex-row items-center">
                <div v-for="collection of chunk" :key="collection.collectionId" class="flex-1 m-1">
                    <render-collection-component :collection="collection" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { chunk } from "lodash";
import Navbar from "./Navbar.component.vue";
import RenderCollectionComponent from "./RenderCollection.component.vue";

export default {
    components: {
        Navbar,
        RenderCollectionComponent
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
            return this.$store.state.collections.length;
        },
        chunks: function() {
            if (window.innerWidth > 400 && window.innerWidth <= 1024) {
                this.nChunks = 2;
            } else if (window.innerWidth > 1024) {
                this.nChunks = 3;
                this.pageSize = 9;
            }
            let collections = this.$store.state.collections.slice(
                (this.page - 1) * this.pageSize,
                (this.page - 1) * this.pageSize + this.pageSize
            );
            return chunk(collections, this.nChunks);
        }
    }
};
</script>

<style lang="scss" scoped>
.remove-padding {
    padding: 0;
}
</style>


