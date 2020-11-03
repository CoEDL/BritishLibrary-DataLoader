<template>
    <div
        class="flex flex-col heading-text heading-text-size cursor-pointer
        "
    >
        <router-link
            :to="{ name: 'home' }"
            class="flex flex-row p-4 hover:bg-goldensand"
        >
            <div class="flex-grow pt-2">{{ content.menu[language] }}</div>
            <div><i class="fas fa-times fa-2x"></i></div>
        </router-link>
        <router-link
            :to="{ name: 'howto' }"
            class="flex flex-row p-4 hover:bg-goldensand"
        >
            <div class="flex-grow pt-2">{{ content.how[language] }}</div>
            <div><i class="fas fa-chevron-right fa-2x"></i></div>
        </router-link>
        <router-link
            :to="{ name: 'browse' }"
            class="flex flex-row p-4 hover:bg-goldensand"
        >
            <div class="flex-grow pt-2">{{ content.browse[language] }}</div>
            <div><i class="fas fa-chevron-right fa-2x"></i></div>
        </router-link>
        <router-link
            :to="{ name: 'search' }"
            class="flex flex-row p-4 hover:bg-goldensand"
        >
            <div class="flex-grow pt-2">{{ content.search[language] }}</div>
            <div><i class="fas fa-chevron-right fa-2x"></i></div>
        </router-link>
        <router-link
            :to="{ name: 'about' }"
            class="flex flex-row p-4 hover:bg-goldensand"
        >
            <div class="flex-grow pt-2">{{ content.about[language] }}</div>
            <div><i class="fas fa-chevron-right fa-2x"></i></div>
        </router-link>
        <router-link
            :to="{ name: 'partners' }"
            class="flex flex-row p-4 hover:bg-goldensand"
        >
            <div class="flex-grow pt-2">{{ content.partners[language] }}</div>
            <div><i class="fas fa-chevron-right fa-2x"></i></div>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: {
                menu: {
                    English: "Menu",
                    TokPisin: "Tokaut long wanem samting insait",
                },
                how: {
                    English: "How to use this catalogue",
                    TokPisin: "Bai yu yusim kalsa laibri olsem wanem?",
                },
                browse: {
                    English: "Browse the catalogue",
                    TokPisin: "Lukluk insait long kalsa laibri",
                },
                search: {
                    English: "Search the catalogue",
                    TokPisin: "Painim samting long kalsa laibri",
                },
                about: {
                    English: "About True Echoes",
                    TokPisin: "Toksave long True Echoes",
                },
                partners: {
                    English: "Partners and funders",
                    TokPisin: "Ol patna na ol oganaisesen i givim mani",
                },
            },
        };
    },
    computed: {
        language: function() {
            return this.$store.state.language.selected;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "src/assets/global-styles.scss";

// div > .flex-row:hover {
//     @extend .bg-link-water;
// }
</style>
