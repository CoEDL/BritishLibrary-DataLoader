<template>
    <el-dialog
        title=""
        :visible.sync="dialogVisible"
        width="90%"
        :before-close="handleClose"
    >
        <div class="flex flex-col">
            <language-selector-component />
            <div class="text-base md:text-xl break-normal mt-10">
                {{ content[language][0] }}
            </div>
            <div class="text-base md:text-xl my-4 break-normal">
                {{ content[language][1] }}
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
                    `Aboriginal and Torres Strait Islander people 
                    should be aware that this catalogue and website may contain 
                    images, voices or names of deceased persons in photographs, 
                    film, audio recordings or printed material.`,
                    `The collections may also contain recordings of ceremonial, 
                    sacred or secret materials that may not yet be classified as public.`,
                ],
                TokPisin: [
                    `Ol manmeri Aborigines na Torres Straits Islander i mas luksave olsem kalsa laibri na kompyuta rekod i holim ol piksa, vois na nem bilong ol lain i dai pinis na stap insait long ol poto, muvi piksa, toktok rikoding na pepa.`,
                    `Sampela rikoding insait long ol koleksen i ken holim pasin tumbuna i tambu na stap hait long kamapim long ples klia bilong lukluk o soim long ol manmeri.`,
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
