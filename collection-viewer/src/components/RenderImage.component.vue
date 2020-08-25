<template>
    <div class="">
        <img :src="imageSrc" class="h-32" />
    </div>
</template>

<script>
export default {
    props: {
        src: String,
        required: true,
    },
    data() {
        return {};
    },
    computed: {
        imageSrc: function() {
            return `/repository/${this.src}`;
        },
    },
};
</script>

<style lang="scss" scoped></style>
