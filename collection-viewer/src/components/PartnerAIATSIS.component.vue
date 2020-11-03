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
                    `AIATSIS also conducts community-based research in a variety of
                sectors, including languages, health, native title, and
                education.`,
                    `AIATSIS, originally established by an Act of the Parliament of
                Australia in 1964 as AIAS, was reconstituted in 1989 as AIATSIS.
                It is based in Canberra, Australia.`,
                ],
                TokPisin: [
                    `AIATSIS em wanpela oganaisesen bilong painimaut, 
                    kisim na lukautim ol koleksen na autim toktok na tingting 
                    bilong strongim na luksave long kalsa, kastom, tok ples na 
                    stori tumbuna bilong ol asples bilong Australia, em ol Aborigines, 
                    na ol lain i stap long ol ailan bilong Torres Strait bilong bipo inap long tude.`,
                    `AIATSIS i lukautim bilpela koleksen i go antap long 
                    wan milien kain kain samting olsem ol muvi, poto, rikoding, kaving 
                    na olgeta kain kain pepa bilong autim toktok na tingting. Dispela 
                    ol koleksen i helpim luksave na strongim save bilong ol manmeri 
                    long kalsa na stori bilong ol lain Aborigine na Torres Strait Islander.`,
                    `AIATSIS tu i save mekim wok painimaut long ol komuniti long planti 
                    kain kain samting olsem ol tok ples, wok helt, taitel bilong papa 
                    o mama graun, na skul bilong ol manmeri.`,
                    `AIATSIS i bin kam kamap aninit long gavman lo bilong palamen bilong 
                    Australia long 1964 olsem AIAS. Long 1989 ol i senisim nem i 
                    go long AIATSIS. Em i stap long Canberra, Australia.`,
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
