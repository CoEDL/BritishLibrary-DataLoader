<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-col"
        >
            <div class="">
                Australian Institute of Aboriginal and Torres Strait Islander
                Studies
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">{{ content[language][0] }}</div>
            <div class="">{{ content[language][1] }}</div>
            <div>{{ content[language][2] }}</div>
            <div>{{ content[language][3] }}</div>
            <picture>
                <source :srcset="image.png" />
                <source :srcset="image.webp" />
                <img :src="image.png" class="h-32 object-fit mx-auto" />
            </picture>
        </div>
    </div>
</template>

<script>
import webp from "src/assets/images/AIATSIS.webp";
import png from "src/assets/images/AIATSIS.png";
export default {
    data() {
        return {
            image: { webp, png },
            content: {
                English: [
                    `AIATSIS is a research, collections and publishing organisation,
                which promotes knowledge and understanding of Aboriginal and
                Torres Strait Islander cultures, traditions, languages and
                stories, past and present.`,
                    `AIATSIS has a growing collection of over one million items,
                including films, photographs, audio recordings, art and
                artefacts, as well as printed and other resource materials.
                These collections are both culturally significant and an
                important resource of anybody looking to improve their knowledge
                of Aboriginal and Torres Strait Islander history and culture.`,
                    `
                `,
                    `AIATSIS also conducts community-based research in a variety of
                sectors, including languages, health, native title, and
                education.`,
                    `AIATSIS, originally established by an Act of the Parliament of
                Australia in 1964 as AIAS, was reconstituted in 1989 as AIATSIS.
                It is based in Canberra, Australia.`,
                ],
                TokPisin: [
                    `AIATSIS em wanpela oganaisesen bilong painimaut, kisim na 
                    lukautim ol koleksen na autim toktok na tingting long pepa 
                    long strongim na luksave kalsa, kastom pasin, tok ples na 
                    tumbuna stori bilong ol manmeri husat ol as ples na holim 
                    tumbuna graun bilong Australia em ol Aborigines na ol kam long Torres Strait 
                    ailan long bipotaim long tumbuna inap long dispela taim tude.`,
                    `AIATSIS i lukautim bilpela koleksen na em go moa yet i stap 
                    antap long wan milien kain kain samting olsem ol piksa long 
                    muvi na poto, saun rikoding, piksa wantaim kaving na olgeta 
                    kain kain pepa long autim toktok na tingting.
                    Dispela ol koleksen i helpim luksave na strongim save bilong 
                    ol Aboriginal na Torress Strait kalsa long bipotaim 
                    tumbuna na soim bikpela sampting olsem holim strong kalsa na 
                    toksave long husat i laik kisim moa save long ol koleksen.`,
                    `
                    AIATSIS tu i save mekim ol komuniti painimaut wok long planti 
                    kain kain sekta olsem ol tok ples, wok helt, taitel bilong papa 
                    o mama graun na edukesen long skulim manmeri.`,
                    `AIATSIS i 
                    bin kam kamap aninit long gavaman lo bilong palamen bilong 
                    Australia long 1964 olsem AIAS. Bihaintaim long 1989 ol i 
                    senisim nem i go long AIATSIS na nau oganaisesen i stap long 
                    Canberra, Australia.`,
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
