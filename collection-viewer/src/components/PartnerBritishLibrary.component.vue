<template>
    <div class="flex flex-col">
        <div class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row">
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
                    `British Library em i nesenol laibri bilong United Kingdom 
                    na tu em i wanpela bilong ol bikpela painimaut laibri long wol.`,
                    `Dispela laibri i givim planti kain kain gutpela sevis long 
                    toksave long olgeta bikpela skul bilong ol save manmeri, 
                    long bisnis na long wok painimaut na wok saiens. Koleksen insait 
                    long laibri ya i stap moa long 250 yia and winim 150 milien 
                    wan wan samting. Ol dispela samting i makim sindaun bilong ol 
                    manmeri long kain kain hap. Em ol buk, pepa, niuspepa, na kain 
                    kain samting ol manmeri i raitim, na ol mep, musik, piksa, na 
                    rikoding long planti kain kain tok ples tu.`,
                ],
                Bislama: [
                    "British Laeberi emi nasonal laeberi blong United Kingdom mo semtaem emi wan bigfala risej laeberi long Wol.",
                    "Emi provaedem wol klas infomeson servis long academic, bisnis, risej mo scientific komiuniti mo emi oferem unparalleled akses igo long wol long saed blong ol risej kolekson we emi gat. Ol kolekson long Laebari ia emi kro bigwan ova 250 yia mo igat ova 150 million risej kolekson istap insaed olsem ol buk, journals, map, stamp, musik patents, fotographs, niuspepa, mo saon rikoting we istap long raeting mo ol difern toktok long lanwis.",
                ],
                Pijin: [
                    "Britis Laebri hem wanfala nasinal laebri blong United Kingdom an hem wanfala biggest (bikfala moa) research laebri long wol.",
                    "Hem givim wol klas infomaisen sevisis long olketa academic, business, research an olketa scientific komuniti an hem tu givim olketa infomaisen fo yumi save lukim nao long biggest research kolekson long wol. Kolekson long Laebri yah hem stat kam 250 yia finis yah an hem garem ova 150 million difirent items wea shoim olketa difirent taem olketa raetim, inkludim olketa buk, jenal, manuskrip, mep, stemp, musik, patent, foto, niuspepa, an saon rekodings insaet raet raet en tok tok long languis.",
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
