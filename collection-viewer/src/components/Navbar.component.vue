<template>
    <div class="bg-cloudburst flex flex-row justify-between p-4">
        <router-link :to="{ name: 'menu' }">
            <div class="text-white text-2xl">
                <i class="fas fa-bars"></i>
            </div>
        </router-link>
        <router-link :to="{ name: 'home' }">
            <div class="heading-text heading-text-size text-white">
                True Echoes
            </div>
        </router-link>
        <router-link :to="{ name: 'search' }">
            <div class="text-white text-2xl"><i class="fas fa-search"></i></div>
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
