<template>
    <div class="m-2">
        <navbar-component />
        <router-view></router-view>
    </div>
</template>

<script>
import NavbarComponent from "./navbar.component.vue";
export default {
    el: "#app",
    components: {
        NavbarComponent,
    },
    data() {
        return {};
    },
    mounted() {},
};
</script>

<style scoped></style>
