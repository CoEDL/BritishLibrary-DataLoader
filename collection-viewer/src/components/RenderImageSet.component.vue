<template>
    <div>
        <navbar ref="top" />
        <div class="style-content">
            <div class="flex flex-col" v-if="item">
                <div class="style-headline text-center my-2">
                    {{item.title}}
                    <div class="row">
                        <div class="col style-item-id">
                            {{item.collectionId}} /
                            {{item.itemId}} /
                            <item-information
                                :collectionId="item.collectionId"
                                :itemId="item.itemId"
                            />
                        </div>
                    </div>
                </div>
                <div class="flex flex-row flex-wrap justify-center">
                    <div v-for="(image, idx) in item.images" :key="idx" class="m-2">
                        <el-card class="box-card" shadow="always">
                            <div slot="header" class="text-center">{{image.item.name}}</div>
                            <router-link :to="imageLink({image})">
                                <img :src="image.item.path" class="style-image" />
                            </router-link>
                        </el-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ItemInformation from "./ItemInformation.component.vue";
import RenderImage from "./RenderImage.component.vue";
import Navbar from "./Navbar.component.vue";
import VueScrollTo from "vue-scrollto";

export default {
    components: {
        RenderImage,
        Navbar,
        ItemInformation
    },
    props: {},
    data() {
        return {};
    },
    computed: {
        item: function() {
            let { collectionId, itemId } = this.$route.params;
            return this.$store.state.items.filter(item => {
                return (
                    item.collectionId === collectionId && item.itemId === itemId
                );
            })[0];
        }
    },
    mounted() {
        setTimeout(() => {
            VueScrollTo.scrollTo(this.$refs["top"], 100, {});
        }, 500);
    },
    methods: {
        imageLink({ image }) {
            return `/images/${image.collectionId}/${image.itemId}/${image.name}`;
        }
    }
};
</script>

<style lang="scss" scoped>
.style-content {
    position: relative;
    top: 80px;
}

.style-image {
    max-width: 70vw;
    min-width: 70vw;
}
@media only screen and (min-width: 600px) {
    .style-image {
        max-width: 300px;
        min-width: 300px;
    }
}
@media only screen and (min-width: 1200px) {
    .style-image {
        max-width: 350px;
        min-width: 350px;
    }
}
@media only screen and (min-width: 1500px) {
    .style-image {
        max-width: 400px;
        min-width: 400px;
    }
}
@media only screen and (min-width: 1500px) {
    .style-image {
        max-width: 500px;
        min-width: 500px;
    }
}

.style-image-placeholder {
    font-size: 10em;
}

.style-control {
    cursor: pointer;
}
</style>



