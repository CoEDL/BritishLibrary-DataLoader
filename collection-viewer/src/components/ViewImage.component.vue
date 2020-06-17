<template>
    <div>
        <div class="style-image-container">
            <img :src="image.item.path" class="style-image" v-if="image.item" />
        </div>

        <view-image-controls
            v-if="dialogVisible"
            :image="image"
            v-on:toggle-controls="toggleControls"
            v-on:previous-image="goToPreviousImage"
            v-on:image-list="goToImageList"
            v-on:homepage="goToHomePage"
            v-on:next-image="goToNextImage"
            v-on:jump-to-start="goToFirstImage"
            v-on:jump-to-end="goToLastImage"
        />
    </div>
</template>

<script>
import { findIndex } from "lodash";
import ViewImageControls from "./ViewImageControls.component.vue";
import { FullScreenViewer } from "iv-viewer";
import Hammer from "hammerjs";

export default {
    components: {
        ViewImageControls
    },
    data() {
        return {
            hammertime: undefined,
            viewer: new FullScreenViewer({}),
            image: {},
            item: {},
            dialogVisible: false
        };
    },
    mounted() {
        this.loadImage();
        const element = document.getElementsByClassName("iv-fullscreen");
        this.hammertime = new Hammer(element[0], {});
        this.hammertime.on("tap", () => {
            this.dialogVisible = !this.dialogVisible;
        });
    },
    beforeDestroy() {
        if (this.viewer) {
            this.viewer.hide();
            this.viewer.destroy();
        }
    },
    watch: {
        $route(to, from) {
            this.loadImage();
        }
    },
    methods: {
        loadImage() {
            let { collectionId, itemId, imageName } = this.$route.params;
            this.item = this.$store.state.items.filter(item => {
                return (
                    item.collectionId === collectionId && item.itemId === itemId
                );
            })[0];
            this.image = this.item.images.filter(i => i.name === imageName)[0];
            this.toggleZoom();
        },
        toggleControls() {
            this.dialogVisible = !this.dialogVisible;
        },
        toggleZoom() {
            this.viewer.show(this.image.item.path);
        },
        goToPreviousImage() {
            let itemIndex = findIndex(this.item.images, {
                name: this.image.name
            });
            if (itemIndex > 0) {
                let previous = this.item.images[itemIndex - 1];
                this.$router.push({
                    path: `/images/${this.image.collectionId}/${this.image.itemId}/${previous.name}`
                });
            }
            this.loadImage();
        },
        goToNextImage() {
            let itemIndex = findIndex(this.item.images, {
                name: this.image.name
            });
            if (itemIndex < this.item.images.length - 1) {
                let next = this.item.images[itemIndex + 1];
                this.$router.push({
                    path: `/images/${this.image.collectionId}/${this.image.itemId}/${next.name}`
                });
            }
            this.loadImage();
        },
        goToFirstImage() {
            this.$router.push({
                path: `/images/${this.image.collectionId}/${this.image.itemId}/${this.item.images[0].name}`
            });
        },
        goToLastImage() {
            this.$router.push({
                path: `/images/${this.image.collectionId}/${this.image.itemId}/${this.item.images[this.item.images.length - 1].name}`
            });
        },
        goToImageList() {
            this.$router.push({
                path: `/images/${this.image.collectionId}/${this.image.itemId}`
            });
        },
        goToHomePage() {
            this.$router.push({ name: "viewCollectionList" });
        }
    }
};
</script>

<style lang="scss" scoped>
.style-image-container {
    position: fixed;
    overflow: scroll;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
}

.style-image {
    width: 100%;
}
</style>

<style lang="scss">
.iv-fullscreen-close {
    display: none;
}
</style>



