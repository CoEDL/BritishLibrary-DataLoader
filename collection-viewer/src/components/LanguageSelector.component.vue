<template>
    <div class="flex flex-row text-center justify-around">
        <div
            class="flex flex-col cursor-pointer p-4"
            :class="{ 'bg-goldensand': language === 'English' }"
            @click="setLanguage('English')"
        >
            <img :src="EnglishFlag" class="h-10" />
            <div>English</div>
        </div>
        <div
            class="flex flex-col cursor-pointer p-4"
            :class="{ 'bg-goldensand': language === 'TokPisin' }"
            @click="setLanguage('TokPisin')"
        >
            <img :src="PNGFlag" class="h-10" />
            <div>Tok Pisin</div>
        </div>
        <div
            class="flex flex-col cursor-pointer p-4"
            :class="{ 'bg-goldensand': language === 'Bislama' }"
            @click="setLanguage('Bislama')"
        >
            <img :src="VanuatuFlag" class="h-10" />
            <div>Bislama</div>
        </div>
        <div
            class="flex flex-col cursor-pointer p-4"
            :class="{ 'bg-goldensand': language === 'Pijin' }"
            @click="setLanguage('Pijin')"
        >
            <img :src="SolomonsFlag" class="h-10" />
            <div>Pijin</div>
        </div>
    </div>
</template>

<script>
import PNGFlag from "src/assets/images/Flag-PNG.png";
import EnglishFlag from "src/assets/images/EnglishFlag.png";
import VanuatuFlag from "src/assets/images/Flag-Vanuatu.png";
import SolomonsFlag from "src/assets/images/Flag-Solomons.png";

export default {
    data() {
        return {
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
