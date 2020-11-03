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
                <div class="text-4xl md:text-6xl pt-6">
                    {{ content.title[language] }}
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
                    {{ content.browse[language] }}
                </div>
            </router-link>
            <router-link :to="{ name: 'about' }" class="md:flex-grow">
                <div
                    class="rounded-lg text-center text-xl md:text-3xl text-white bg-cloudburst py-4"
                >
                    {{ content.what[language] }}
                </div>
            </router-link>
            <router-link :to="{ name: 'howto' }" class="md:flex-grow">
                <div
                    class="rounded-lg text-center text-xl md:text-3xl text-white bg-cloudburst py-4"
                >
                    {{ content.how[language] }}
                </div>
            </router-link>
        </div>

        <disclaimer-component />
    </div>
</template>

<script>
import DisclaimerComponent from "./Disclaimer.component.vue";
import webp from "src/assets/images/C62_0095.webp";
import png from "src/assets/images/C62_0095.png";
export default {
    components: {
        DisclaimerComponent,
    },
    data() {
        return {
            image: {
                webp,
                png,
            },
            content: {
                title: {
                    English: "Welcome to the True Echoes Catalogue",
                    TokPisin: "Welkam long True Echoes kalsa laibri",
                },
                browse: {
                    English: "Browse the catalogue",
                    TokPisin: "Lukluk insait long kalsa laibri",
                },
                what: {
                    English: "What is True Echoes?",
                    TokPisin: "True Echoes em wanem samting?",
                },
                how: {
                    English: "How to use this catalogue",
                    TokPisin: "Bai yu yusim kalsa laibri olsem wanem?",
                },
            },
        };
    },
    computed: {
        language: function() {
            return this.$store.state.language.selected;
        },
        dialogVisible: function() {
            return this.$store.state.disclaimer;
        },
    },
    methods: {
        handleClose() {
            this.$store.commit("setDisclaimerState", false);
        },
    },
};
</script>

<style lang="scss" scoped>
.style-image {
    max-height: 700px;
}
</style>
