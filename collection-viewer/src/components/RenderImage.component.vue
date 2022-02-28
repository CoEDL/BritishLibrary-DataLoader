<template>
    <div class="">
        <img :src="imageSrc" class="object-contain" />
    </div>
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
        imageSrc: function() {
            return `/repository/${this.collectionId}/${this.src}`;
        },
    },
};
</script>

<style lang="scss" scoped></style>
