<template>
    <audio controls ref="audioElement" class="w-full">
        <source :src="audioSrc" />
        Your browser does not support the <code>audio</code> element.
    </audio>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        collectionId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {};
    },
    computed: {
        audioSrc: function() {
            return `/repository/${this.collectionId}/${this.src}`;
        },
    },
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
