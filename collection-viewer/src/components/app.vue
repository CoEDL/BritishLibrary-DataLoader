<template>
    <div class="container-fluid body-text-size body-text">
        <navbar />
        <router-view class="style-view overflow-scroll"></router-view>
    </div>
</template>

<script>
import { loadData } from "../data-loader.service";
import Navbar from "./Navbar.component.vue";
export default {
    el: "#app",
    components: {
        Navbar,
    },
    mounted() {
        this.$store.dispatch("loadData");
    },
};
</script>

<style lang="scss" scoped>
.style-view {
    height: calc(100vh - 80px);
}
</style>
