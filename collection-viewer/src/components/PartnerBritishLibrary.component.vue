<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row"
        >
            <div class="">
                British Library
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">{{ content[language][0] }}</div>
            <div class="">{{ content[language][1] }}</div>
            <picture>
                <source :srcset="image.png" />
                <source :srcset="image.webp" />
                <img :src="image.png" class="h-32 object-fit mx-auto" />
            </picture>
        </div>
    </div>
</template>

<script>
import webp from "src/assets/images/BritishLibrary.webp";
import png from "src/assets/images/BritishLibrary.png";
export default {
    data() {
        return {
            image: { webp, png },
            content: {
                English: [
                    `The British Library is the national library of the United
                Kingdom and one of the world's greatest research libraries.`,
                    `It provides world class information services to the academic,
                business, research and scientific communities and offers
                unparalleled access to the world's largest and most
                comprehensive research collection. The Library's collection has
                developed over 250 years and exceeds 150 million separate items
                representing every age of written civilisation and includes
                books, journals, manuscripts, maps, stamps, music, patents,
                photographs, newspapers and sound recordings in all written and
                spoken languages.`,
                ],
                TokPisin: [
                    `British Library (BL) em i nesenol laibri bilong United Kingdom 
                    na tu wanpela long ol bikpela painimaut laibri oganaisesen 
                    long olgeta hap graun long wol. `,
                    `Dispela oganaisesen i 
                    givim planti kain kain gutpela service long toksave 
                    long olgeta bikpela skul bilong ol save manmeri, long bisnis na 
                    long wok painimaut na wok saiens wantaim luksave bilong kisim ol 
                    bikpela save long olgeta koleksen ol i lukautim bilong olgeta hap 
                    graun long wol. Koleksen insait long laibri stap olsem 250 yia and antapim 
                    long 150 million kain kain samting long gutpela sindaun na 
                    bikpela save makim taim long bipo i nap nau we i stap long 
                    ol buk, ol kain kain raitim pepa na niuspepa, ol musik, ol 
                    piksa, ol saun rikoding long olgeta kain kain tok ples.`,
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
