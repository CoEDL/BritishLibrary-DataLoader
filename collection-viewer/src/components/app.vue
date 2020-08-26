<template>
    <div class="container-fluid body-text-size body-text">
        <navbar />
        <div class="overflow-scroll" :style="{ height: height }">
            <router-view></router-view>
        </div>
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
    computed: {
        height: function() {
            return `${window.innerHeight - 80}px`;
        },
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
