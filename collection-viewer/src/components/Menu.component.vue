<template>
    <div
        class="flex flex-col heading-text heading-text-size cursor-pointer
        hover:bg-goldensand"
    >
        <router-link :to="{ name: 'home' }" class="flex flex-row p-4">
            <div class="flex-grow pt-2">Menu</div>
            <div><i class="fas fa-times fa-2x"></i></div>
        </router-link>
        <router-link :to="{ name: 'browse' }" class="flex flex-row p-4">
            <div class="flex-grow pt-2">Browse the catalogue</div>
            <div><i class="fas fa-chevron-right fa-2x"></i></div>
        </router-link>
        <router-link :to="{ name: 'search' }" class="flex flex-row p-4">
            <div class="flex-grow pt-2">Search the catalogue</div>
            <div><i class="fas fa-chevron-right fa-2x"></i></div>
        </router-link>
        <router-link :to="{ name: 'about' }" class="flex flex-row p-4">
            <div class="flex-grow pt-2">About True Echoes</div>
            <div><i class="fas fa-chevron-right fa-2x"></i></div>
        </router-link>
        <router-link :to="{ name: 'partners' }" class="flex flex-row p-4">
            <div class="flex-grow pt-2">Partners and funders</div>
            <div><i class="fas fa-chevron-right fa-2x"></i></div>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
@import "src/assets/global-styles.scss";

// div > .flex-row:hover {
//     @extend .bg-link-water;
// }
</style>
