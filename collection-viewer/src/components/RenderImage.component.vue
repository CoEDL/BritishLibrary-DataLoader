<template>
    <div>
        <img :src="imageSrc" class="h-40" />
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
