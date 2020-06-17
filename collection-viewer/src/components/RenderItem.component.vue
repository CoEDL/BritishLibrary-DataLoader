<template>
    <el-card class="style-card" shadow="always">
        <div slot="header" class="text-xl text-center my-2" v-if="item.title">{{item.title}}</div>
        <div class="flex flex-col text-center">
            <div>
                {{item.collectionId}} / {{item.itemId}} /
                <item-information :collectionId="item.collectionId" :itemId="item.itemId" />
            </div>
            <render-image :image="item" v-if="item.type === 'image'" />
            <render-audio :audio="item" v-if="item.type === 'audio'" />
            <render-video :video="item" v-if="item.type === 'video'" />
        </div>
    </el-card>
</template>

<script>
import ItemInformation from "./ItemInformation.component.vue";
import RenderImage from "./RenderImage.component.vue";
import RenderAudio from "./RenderAudio.component.vue";
import RenderVideo from "./RenderVideo.component.vue";

export default {
    props: {
        item: Object
    },
    components: {
        ItemInformation,
        RenderImage,
        RenderAudio,
        RenderVideo
    },
    data() {
        return {
            itemData: {}
        };
    }
};
</script>

<style lang="scss" scoped>
.style-card {
    min-height: 250px;
}
</style>


