<template>
    <div class="flex flex-col my-2">
        <div class="text-center">{{audio.name}}</div>
        <div class="style-audio-icon">
            <i class="fal fa-volume-up"></i>
        </div>
        <div class="my-2">
            <audio controls ref="audioElement" class="style-audio-element inline-block">
                <source :src="item" v-for="(item, idx) of audio.item" :key="idx" />Your browser does not support the
                <code>audio</code> element.
            </audio>
        </div>
    </div>
</template>

<script>
import ItemInformation from "./ItemInformation.component.vue";

export default {
    props: {
        audio: Object
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
.style-audio-icon {
    cursor: pointer;
    font-size: 3em;
}

.style-audio-element {
    width: 90%;
}
</style>



