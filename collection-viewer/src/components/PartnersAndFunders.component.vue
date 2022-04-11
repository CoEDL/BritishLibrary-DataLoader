<template>
    <div class="flex flex-col">
        <div class="heading-text page-title-size bg-goldensand py-6 px-2">
            {{ content[language][0] }}
        </div>
        <div class="mt-6 m-2 lg:mx-6 lg:text-2xl">
            {{ content[language][1] }}
        </div>
        <div class="m-2 lg:mx-6 lg:text-2xl">
            <div class="font-bold">{{ content[language][2] }}</div>
            <ul class="pl-8 list-disc">
                <li class="hover:text-celadonblue">
                    <router-link to="/partner/british-library">
                        The British Library
                    </router-link>
                </li>
                <li class="hover:text-celadonblue">
                    <router-link to="/partner/ipngs">
                        Institute of Papua New Guinea Studies
                    </router-link>
                </li>
                <li class="hover:text-celadonblue">
                    <router-link to="/partner/aiatsis">
                        AIATSIS [Australian Institute of Aboriginal and Torres Strait Islander
                        Studies]
                    </router-link>
                </li>
                <li class="hover:text-celadonblue">
                    <router-link to="/partner/vks">
                        Vanuatu Kaljoral Senta
                    </router-link>
                </li>
                <li class="hover:text-celadonblue">
                    <router-link to="/partner/sinm">
                        Solomon Islands Archives and Museum
                    </router-link>
                </li>
                <li class="hover:text-celadonblue">
                    <router-link to="/partner/tccnc">
                        Tjibaou Cultural Centre, New Caledonia
                    </router-link>
                </li>
                <li class="hover:text-celadonblue">
                    <router-link to="/partner/paradisec">
                        PARADISEC [Pacific and Regional Archive for Digital Sources in Endangered
                        Cultures, Australia]
                    </router-link>
                </li>
                <li class="hover:text-celadonblue">
                    <router-link to="/partner/maa">
                        Cambridge Museum of Archaeology and Anthropology
                    </router-link>
                </li>
                <li class="hover:text-celadonblue">
                    <router-link to="/partner/british-museum">
                        British Museum
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="mt-6 m-2 lg:mx-6 lg:text-2xl">
            <div class="heading-text page-title-size font-bold">
                {{ content[language][3] }}
            </div>
            <div>
                True Echoes is funded by the Leverhulme Trust and the UK Government's Department for
                Business, Energy and Industrial Strategy.
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4 md:px-4">
                <div class="w-full md:w-1/2">
                    <picture>
                        <source :srcset="leverhulmeTrust.png" />
                        <source :srcset="leverhulmeTrust.webp" />
                        <img :src="leverhulmeTrust.png" class="h-32 object-fit mx-auto" />
                    </picture>
                </div>
                <div class="w-full md:w-1/2 md:pt-6">
                    <picture>
                        <source :srcset="fundedByUkGov.png" />
                        <source :srcset="fundedByUkGov.webp" />
                        <img :src="leverhulmeTrust.png" class="h-32 object-fit mx-auto" />
                    </picture>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import leverhulmeTrustWebp from "src/assets/images/Leverhulme_Trust_RGB_blue.webp";
import leverhulmeTrustPng from "src/assets/images/Leverhulme_Trust_RGB_blue.png";
import fundedByUkGovWebp from "src/assets/images/BEIS-logo.webp";
import fundedByUkGovPng from "src/assets/images/BEIS-logo.png";

export default {
    data() {
        return {
            content: {
                English: [
                    `Partners and Funders`,
                    `The True Echoes project works with cultural and 
                    research institutions in the Oceanic region and in the UK.`,
                    `Partners include:`,
                    `Funders:`,
                ],
                TokPisin: [
                    `Ol patna na ol oganaisesen i givim mani`,
                    `Dispela True Echoes projek em wok wantaim ol organisesen bilong kalsa na 
                    wok painimaut insait long Pasifik rijen na long UK.`,
                    `Ol poro oganisesen em:`,
                    `Ol oganaisesen i givim mani:`,
                ],
                Bislama: [
                    "Ol Partners mo funders",
                    "True Echoes projek emi wok wetem ol kaljoral mo risej institution long Oceanic region mo long UK.",
                    "Olgeta Kaontri we oli patna igat:",
                    "Funders:",
                ],
                Pijin: [
                    "Olketa Partners an Funders",
                    "Olketa Patna an Bodi hu givim selen - Disfala True Echoes projek hem waka wetem olketa kalsaral an research institusin insaet long Oceanic Rijen an UK.",
                    "Pipol waka inkludim:",
                    "Funders",
                ],
            },
            leverhulmeTrust: {
                webp: leverhulmeTrustWebp,
                png: leverhulmeTrustPng,
            },
            fundedByUkGov: {
                webp: fundedByUkGovWebp,
                png: fundedByUkGovPng,
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
