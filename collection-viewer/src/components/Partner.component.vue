<template>
    <router-view />
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {
        if (this.$route.name === "partner") {
            this.$router.push({ name: "british-library" });
        }
    },
};
</script>
