<template>
    <el-dialog title="" :visible.sync="dialogVisible" width="90%" :before-close="handleClose">
        <div class="flex flex-col">
            <language-selector-component />
            <div class="mt-10 flex flex-col space-y-4">
                <div
                    class="text-base md:text-xl break-normal"
                    v-for="(msg, idx) of content[language]"
                    :key="idx"
                >
                    {{ msg }}
                </div>
            </div>
        </div>
    </el-dialog>
</template>
<script>
import LanguageSelectorComponent from "./LanguageSelector.component.vue";

export default {
    components: {
        LanguageSelectorComponent,
    },
    data() {
        return {
            content: {
                English: [
                    `Torres Strait Islander peoples should be aware that this website 
                    contains images, voices and names of deceased persons.`,
                    `This website may include collection materials, or descriptions of 
                    collection materials, that are secret, sacred or sensitive, or 
                    have traditional protocols around who can access them. All users 
                    are warned that this website and linked resources include words and 
                    descriptions which may be outdated and culturally sensitive. 
                    Terms that reflect the author’s attitude or that of the period in 
                    which the item was written may be considered inappropriate or offensive today.`,
                ],
                TokPisin: [
                    `Ol manmeri bilong Torres Straits Islands i mas luksave olsem dispela 
                    websait o kompyuta rekod i holim ol piksa, vois na nem bilong ol lain i dai pinis.`,
                    `Dispela websait i holim ol kainkain samting insait long koleksen em i 
                    gat pasin tumbuna i tambu na stap hait long kamapim long ples klia bilong 
                    lukluk na soim long ol manmeri. Ol bikman na lapun tasol long pasin 
                    kastom ol i ken tok orait long ol manmeri long lukluk long ol samting i 
                    tambu o soim samting bilong stap hait long kalsa.`,
                    `Husat manmeri i yusim websait i mas save olsem ol toktok bilong kalsa 
                    na ol manmeri i bin raitiim em ol i kamap long taim bipo na sampela 
                    samting nau bai no stret long lukluk o ken bagarapim tingting long pasin bilong tude.`,
                ],
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
        setLanguage(language) {
            this.$store.commit("setLanguage", language);
        },
    },
};
</script>
