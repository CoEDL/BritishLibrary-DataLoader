<template>
    <div
        class="flex flex-col heading-text heading-text-size cursor-pointer
        "
    >
        <router-link :to="{ name: 'home' }" class="flex flex-row p-4 hover:bg-goldensand">
            <div class="flex-grow pt-2">{{ content.menu[language] }}</div>
            <div><i class="fas fa-times fa-2x"></i></div>
        </router-link>
        <router-link :to="{ name: 'howto' }" class="flex flex-row p-4 hover:bg-goldensand">
            <div class="flex-grow pt-2">{{ content.how[language] }}</div>
            <div><i class="fas fa-chevron-right fa-2x"></i></div>
        </router-link>
        <router-link :to="{ name: 'browse' }" class="flex flex-row p-4 hover:bg-goldensand">
            <div class="flex-grow pt-2">{{ content.browse[language] }}</div>
            <div><i class="fas fa-chevron-right fa-2x"></i></div>
        </router-link>
        <router-link :to="{ name: 'search' }" class="flex flex-row p-4 hover:bg-goldensand">
            <div class="flex-grow pt-2">{{ content.search[language] }}</div>
            <div><i class="fas fa-chevron-right fa-2x"></i></div>
        </router-link>
        <router-link :to="{ name: 'about' }" class="flex flex-row p-4 hover:bg-goldensand">
            <div class="flex-grow pt-2">{{ content.about[language] }}</div>
            <div><i class="fas fa-chevron-right fa-2x"></i></div>
        </router-link>
        <router-link :to="{ name: 'partners' }" class="flex flex-row p-4 hover:bg-goldensand">
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
                    Bislama: "Menu",
                    Pijin: "Menu",
                },
                how: {
                    English: "How to use this catalogue",
                    TokPisin: "Bai yu yusim kalsa laibri olsem wanem?",
                    Bislama: "Hao blong usem Katalok ia",
                    Pijin: "Hao fo yumi usim disfala katalog",
                },
                browse: {
                    English: "Browse the catalogue",
                    TokPisin: "Lukluk insait long kalsa laibri",
                    Bislama: "Braos long Katalok",
                    Pijin: "Braos long katalog ",
                },
                search: {
                    English: "Search the catalogue",
                    TokPisin: "Painim samting long kalsa laibri",
                    Bislama: "Search long Katalok",
                    Pijin: "Search long katalog ",
                },
                about: {
                    English: "About True Echoes",
                    TokPisin: "Toksave long True Echoes",
                    Bislama: "Abaot True Echoes",
                    Pijin: "Abaotim True Echoes",
                },
                partners: {
                    English: "Partners and funders",
                    TokPisin: "Ol patna na ol oganaisesen i givim mani",
                    Bislama: "Ol Partners mo funders",
                    Pijin: "Olketa Partners an Funders",
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
