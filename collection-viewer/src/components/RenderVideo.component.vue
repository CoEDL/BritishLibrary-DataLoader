<template>
    <div class="flex flex-col my-2">
        <div class="text-center">{{video.name}}</div>
        <div class="my-2">
            <video controls class="style-video-element inline-block">
                <source :src="item" v-for="(item, idx) of video.item" :key="idx" />Your browser does not support the
                <code>video</code> element.
            </video>
        </div>
    </div>
</template>

<script>
import ItemInformation from "./ItemInformation.component.vue";

export default {
    props: {
        video: Object
    },
    components: {
        ItemInformation
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.style-video-element {
    cursor: pointer;
    max-width: 90%;
}
</style>



