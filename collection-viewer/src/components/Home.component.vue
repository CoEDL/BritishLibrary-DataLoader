<template>
    <div class="flex flex-col">
        <div class="relative">
            <picture>
                <source :srcset="image.png" />
                <source :srcset="image.webp" />
                <img
                    :src="image.png"
                    class="object-cover opacity-50 style-image mx-auto"
                />
            </picture>
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

        <el-dialog
            title="Disclaimer"
            :visible.sync="dialogVisible"
            width="90%"
            :before-close="handleClose"
        >
            <div class="text-base md:text-xl break-normal">
                Aboriginal and Torres Strait Islander people should be aware
                that this catalogue and website may contain images, voices or
                names of deceased persons in photographs, film, audio recordings
                or printed material.
            </div>
            <div class="text-base md:text-xl my-4 break-normal">
                The collections may also contain recordings of ceremonial,
                sacred or secret materials that may not yet be classified as
                public.
            </div>
        </el-dialog>
    </div>
</template>

<script>
import webp from "src/assets/images/C62_0095.webp";
import png from "src/assets/images/C62_0095.png";
export default {
    data() {
        return {
            image: {
                webp,
                png,
            },
        };
    },
    computed: {
        dialogVisible: function() {
            return this.$store.state.disclaimer;
        },
    },
    methods: {
        handleClose() {
            console.log("here");
            this.$store.commit("setDisclaimerState", false);
        },
    },
};
</script>

<style lang="scss" scoped>
.style-image {
    max-height: 700px;
}

// .background {
//     position: absolute;
// }

// .foreground {
//     position: absolute;
//     z-index: 10;
// }
</style>
