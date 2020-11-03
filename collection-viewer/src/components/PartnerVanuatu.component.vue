<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row"
        >
            <div class="">
                Vanuatu Kaljoral Senta
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">{{ content[language][0] }}</div>
            <div class="">{{ content[language][1] }}</div>
            <div>{{ content[language][2] }}</div>
            <picture>
                <source :srcset="image.png" />
                <source :srcset="image.webp" />
                <img :src="image.png" class="h-32 object-fit mx-auto" />
            </picture>
        </div>
    </div>
</template>

<script>
import webp from "src/assets/images/VKS-logo.webp";
import png from "src/assets/images/VKS-logo.png";
export default {
    data() {
        return {
            image: { webp, png },
            content: {
                English: [
                    `The Vanuatu Kaljoral Senta assists with the preservation,
                protection and promotion of Vanuatu’s tangible and intangible
                cultural heritage.`,
                    `Since its inception, the Vanuatu Kaljoral Senta has played a
                major role in the documentation of traditional knowledge and
                artefacts, the surveying of cultural and historical sites, and
                the discovery of significant archaeological sites.`,
                    `The National Film, Sound and Photo archive at VKS was
                established in the 1960s and is responsible for collecting,
                preserving and promoting the cultural collections of film, photo
                and audio recordings.`,
                ],
                TokPisin: [
                    `Vanuatu Kaljoral Senta (VKS) i save helpim long 
                    lukautim, protektim na strongim kalsa bilong Vanuatu`,
                    `Long taim ol i kirapim inap long nau, Vanuatu Kaljoral 
                    Senta em i mekim bikpela wok tru bilong raitim stori bilong ol 
                    tumbuna pasin na kastom, lukautim ol kaving, lukluk long 
                    ol ples bilong wok kalsa na bilong tumbuna, na tu long 
                    wok painimaut long ol ples bilong ol tumbuna bipo yet.`,
                    `National Film, Sound and Photo archive i stap long VKS i 
                    bin kamap namel long ol yia long 1960 long mekim ol wok long 
                    painim na kisim ol koleksen bilong kalsa na lukautim na strongim 
                    dispela ol piksa long muvi na poto na rikoding.`,
                ],
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
