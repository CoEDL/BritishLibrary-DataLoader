<template>
    <div>
        <div
            class="text-white text-lg mr-2 pt-2 inline-block cursor-pointer"
            @click="dialogVisible = !dialogVisible"
        >
            <div v-if="language === 'English'">
                <img :src="EnglishFlag" class="h-5" />
            </div>
            <div v-if="language === 'TokPisin'">
                <img :src="PNGFlag" class="h-5" />
            </div>
            <div v-if="language === 'Bislama'">
                <img :src="VanuatuFlag" class="h-5" />
            </div>
            <div v-if="language === 'Pijin'">
                <img :src="SolomonsFlag" class="h-5" />
            </div>
        </div>
        <el-dialog title="" :visible.sync="dialogVisible" width="90%"
            ><language-selector-component
        /></el-dialog>
    </div>
</template>

<script>
import LanguageSelectorComponent from "./LanguageSelector.component.vue";
import VanuatuFlag from "src/assets/images/Flag-Vanuatu.png";
import PNGFlag from "src/assets/images/Flag-PNG.png";
import SolomonsFlag from "src/assets/images/Flag-Solomons.png";
import EnglishFlag from "src/assets/images/EnglishFlag.png";
export default {
    components: {
        LanguageSelectorComponent,
    },
    data() {
        return {
            dialogVisible: false,
            VanuatuFlag,
            PNGFlag,
            EnglishFlag,
            SolomonsFlag,
        };
    },
    computed: {
        language: function() {
            return this.$store.state.language.selected;
        },
    },
    methods: {
        setLanguage(language) {
            this.$store.commit("setLanguage", language);
        },
    },
};
</script>
