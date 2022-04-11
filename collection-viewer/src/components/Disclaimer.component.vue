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
                    `Dispela websait i holim ol kainkain samting insait long koleksen em i 
                    gat pasin tumbuna i tambu na stap hait long kamapim long ples klia bilong 
                    lukluk na soim long ol manmeri. Ol bikman na lapun tasol long pasin 
                    kastom ol i ken tok orait long ol manmeri long lukluk long ol samting i 
                    tambu o soim samting bilong stap hait long kalsa.`,
                    `Husat manmeri i yusim websait i mas save olsem ol toktok bilong kalsa 
                    na ol manmeri i bin raitiim em ol i kamap long taim bipo na sampela 
                    samting nau bai no stret long lukluk o ken bagarapim tingting long pasin bilong tude.`,
                ],
                Bislama: [
                    "Ol pipol blong Torrest Strait oli sud awea se ol foto, vois mo nem blong ol pipol we istap long website ia oli ded finis.",
                    "Website ia igat sam kastom fasen blong folem taem yu wantem gat access long ol samting ia from oli sekret o tabu.",
                    "Ol pipol we oli usem website ia oli mas save se ol toktok wetem narfala samting isaed ia oli aotdated mo oli gat kaljoral valiu mo semtaem oli sensitif. Ol toktok we author or man we emi raetem ol samting insaed ia oli blong long long taem finis mo maet ino stret long sam long yumi tede.",
                ],
                Pijin: [
                    "Torres Stret Aelanda pipol shud save lo disfala websaet bikos hem garem olketa piksa, vois an nem blong olketa pipol wea i dae long taem finis.",
                    "Disfala websaet hem inkludim samfala samting an tok tok wea hem garem olketa kastom pasin blong bifo wea haedim tambu o lelebet sensitif long tradisinal wei fo falom mekem yumi save tekem an lukluk long olketa tambu samting yia.",
                    "Evri man an mere wea usim websaet an olketa linked resources yah inkludim tok tok an diskripsen wea maet long taem finis an kalsaral sensitif. Olketa tok tok wea shoem pasin blo raeta o taem wae hem raetim samtaem no luk stret o he’re stret lo sosaeti blo yumi tude.",
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
