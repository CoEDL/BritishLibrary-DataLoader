<template>
    <router-link :to="linkToCollection()">
        <el-card class="box-card style-card" shadow="always">
            <div slot="header" class="clearfix">
                <span class="text-xl">{{collection.title}}</span>
            </div>
            <div class="style-content">{{limitDescription()}}</div>
        </el-card>
    </router-link>
</template>

<script>
export default {
    props: {
        collection: {
            type: Object,
            required: true
        }
    },
    data() {
        return {};
    },
    methods: {
        limitDescription() {
            let terminator =
                this.collection.description.length > 200 ? "..." : "";
            return `${this.collection.description.slice(0, 200)}${terminator}`;
        },
        linkToCollection() {
            return `/collections/${this.collection.collectionId}`;
        }
    }
};
</script>

<style lang="scss" scoped>
.style-card {
    min-height: 220px;
}

.style-content {
    max-height: 150px;
    overflow: hidden;
}
</style>