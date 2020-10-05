<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row"
        >
            <div class="">
                Solomon Islands Archives and Museum
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
import webp from "src/assets/images/SINM-Logo.webp";
import png from "src/assets/images/SINM-Logo.png";
export default {
    data() {
        return {
            image: { webp, png },
            content: {
                English: [
                    `The Solomon Islands National Museum – established in 1969 –
                preserves, protects and promotes local customs and traditions.`,
                    `By working closely with local communities, the museum is
                increasing its capacity to research and manage cultural and
                natural heritage, encourage economic development through
                cultural enterprise, and to promote peace through respect of
                culture. The Museum is also enhancing its cultural
                infrastructure to increase its capacity for storing, conserving
                and exhibiting Solomon Islands’ cultural and historical
                artefacts.`,
                    `The Museum collects artefacts and conducts documentary research
                into culturally important sites around the country under the
                National Site Survey programme and in collaboration with
                visiting archaeologists. These programme enhance the development
                of both the SINM and Solomon Islands, and encourage a better
                understanding of the people, culture and environment of Solomon
                Islands.`,
                ],
                TokPisin: [
                    `Solomon Islands National Museum (SINM) i bin kam kamap long 
                    1969 bilong lukautim, protektim na strongim kastom na pasin tumbuna long ol ples.`,
                    `Dispela oganaisesen em i wok bungwantaim ol ples lain na komuniti 
                    long painimaut moa na lukautim kalsa na pasin tumbuna wantaim 
                    ol samting i kamap long graun. Em givim gutpela tok na tingting 
                    long strongim na painim gutpela rot bilong wok mani bilong sapotim 
                    kalsa wok long helpim lukautim na putim gut long haus tumbuna 
                    bilong soim na kisim save moa long kalsa na ol kaving bilong 
                    Solomon Islands.`,
                    `SINM tu i save bungim ol kaving na samtung bilong ol 
                    tumbuna ol manmeri wokim long soim kalsa na raitim pepa long 
                    painimaut ol hap o ples long kantri we i kamap aninit long National 
                    Survey Programme em i wok bungwantaim ol save manmeri long digim 
                    graun long painim ol samting bilong tumbuna. Dispela plen 
                    bilong wokim em helpim divelopmen long SINM na Solomon Islands 
                    long gutpela luksave na toksave long ol pipol o manmeri, 
                    kalsa na envairomen o samting long graun na ol ples nabaut 
                    long Solomon Islands.`,
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
