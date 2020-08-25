<template>
    <div class="flex flex-col">
        <div class="relative">
            <img
                :src="image"
                class="object-cover opacity-50 style-image mx-auto"
            />
            <div
                class="absolute text-center w-full inset-y-0 py-6 md:py-16 lg:py-32 object-fill"
            >
                <div class="text-4xl md:text-6xl">
                    <p>Welcome to the</p>
                    <p>True Echoes</p>
                    <p>Catalogue</p>
                </div>
            </div>
        </div>
        <div
            class="flex flex-col lg:flex-row mt-4 mx-4 space-y-2 lg:space-y-0 lg:space-x-2 pb-10"
        >
            <router-link :to="{ name: 'browse' }" class="md:flex-grow">
                <div
                    class="rounded-lg text-center text-xl md:text-3xl text-white bg-cloudburst py-4"
                >
                    Browse the recordings
                </div>
            </router-link>
            <router-link :to="{ name: 'about' }" class="md:flex-grow">
                <div
                    class="rounded-lg text-center text-xl md:text-3xl text-white bg-cloudburst py-4"
                >
                    What is True Echoes?
                </div>
            </router-link>
            <router-link :to="{ name: 'howto' }" class="md:flex-grow">
                <div
                    class="rounded-lg text-center text-xl md:text-3xl text-white bg-cloudburst py-4"
                >
                    How to use this catalogue
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import image from "src/assets/images/C62_0095.webp";
export default {
    data() {
        return {
            image,
        };
    },
};
</script>

<style lang="scss" scoped>
.style-image {
    max-height: 700px;
}

.background {
    position: absolute;
}

.foreground {
    position: absolute;
    z-index: 10;
}
</style>
