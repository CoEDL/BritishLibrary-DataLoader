<template>
    <div>
        <navbar />
        <router-view class="style-main-content-area m-4"></router-view>
    </div>
</template>

<script>
import { loadData } from "../data-loader.service";
import { flattenDeep, includes, orderBy, debounce } from "lodash";
import Navbar from "./Navbar.component.vue";

export default {
    components: {
        Navbar
    },
    data() {
        return {
            watchers: {}
        };
    },
    mounted() {
        this.watchers.routeWatcher = this.$watch("$route.path", () => {
            if (this.$route.path === "/")
                this.$router.push({ path: "/collections" });
        });
        this.$store.dispatch("loadData");
        if (this.$route.name === "root")
            this.$router.push({ path: "/collections" });
    },
    beforeDestroy() {
        this.watchers.routeWatcher();
    }
};
</script>

<style scoped lang="scss">
.style-main-content-area {
    margin-top: 50px;
}
</style>
