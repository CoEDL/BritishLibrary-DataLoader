<template>
    <div class="flex flex-col">
        <div class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row">
            <div class="">
                British Museum
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">{{ content[language][0] }}</div>
            <div class="">{{ content[language][1] }}</div>
            <div>{{ content[language][2] }}</div>
            <picture>
                <source :srcset="image.png" />
                <source :srcset="image.webp" />
                <img :src="image.png" class="h-24 object-fit mx-auto" />
            </picture>
        </div>
    </div>
</template>

<script>
import webp from "src/assets/images/BM_Stacked_blk.webp";
import png from "src/assets/images/BM_Stacked_blk.jpg";
export default {
    data() {
        return {
            image: { webp, png },
            content: {
                English: [
                    `The British Museum was founded in 1753 and opened its doors in
                1759. It was the first national museum to cover all fields of
                human knowledge, open to visitors from across the world.`,
                    `The British Museum brings together the cultures of the world
                under one roof. Its 8 million objects allow us to explore the
                extraordinary diversity of human cultures, from small
                communities to vast empires, to discover the many forms and
                expressions human beings have given to every aspect of life, and
                to realise how closely they are interconnected.`,
                    `The Museum's aim is to hold a collection representative of world
                cultures and to ensure that the collection is housed in safety,
                conserved, curated, researched and exhibited.`,
                ],
                TokPisin: [
                    `British Museum i bin kamap long 1753 na i op long 1759. Em i nambawan nesenal museum o haus tumbuna bilong lukautim ol kain kain bikpela save long manmeri long olgeta hap o graun long wol.`,
                    `British Museum i bungim ol kalsa bilong olgeta hap insait long wanpela haus tasol. Em i gat olsem 8 milien kain kain samting long kalsa i kam long ol liklik komuniti na ol bikpela kantri na rijen tu. Dispela museum i bungim planti kain kain samting olsem bilong kisim na givim save long laip na pasin bilong ol manmeri long wol. Bikpela luksave i soim olsem planti samting em i wankain tasol.`,
                    `As tingting bilong wok bilong museum em long holim na lukautim gut wan wan koleksen bilong makim olgeta kalsa bilong wol, na tu long luksave olsem ol dispela samtingi i stap gut na sef long haus tumbuna, na long soim, lanim, skulim na mekim wok painimaut long pasin tumbuna, kalsa na kastom.`,
                ],
                Bislama: [
                    "British Misium oli statem wok long hem long 1753 mo long 1759 emi openem doa blong hem. Emi fes nasonal Misium we emi coverem everi fil long saed blong human knowledge mo semtaem openem doa blong hem long ol visita olbaot long wol.",
                    "British Misium emi bringem tugeta ol kalja blong Wol we istap insaed long hem. 8 million objek we istap insaed long British Misium emi alao yumi blong explorem ol diferent kaen human kalja long level blong ol smol komiuniti mo ol bigfala kaontri long wol blong faenem aot wanem kaen fom blong laef mo diferen human kalja long wol ia mo hao nao oli wok mo konek tugeta.",
                    "Aim blong Misium ia emi blong holem ol kolekson we emi representem kalja blong wol mo blong mekem sua se kolekson ia oli sef long Misium ia blong ol pipol oli gat access long hem long wanem fasen blong wok we oli wantem mekem.",
                ],
                Pijin: [
                    "British Miusiam hem statim waka blong hem long 1753 an hem openim doa blong hem long 1759.Hem wanfala fes nasinal muisiam fo coverim evry field blong human knowledge semtaem openim doa blong hem fo olketa visita evrywe long wol.",
                    "British Miusiam bringim tugeda olketa kalsa blong wol andanit long wanfala ples nomoa. 8 million objek blong hem stap insaet fo yumi evrywan long explorim staka diversity blong alketa human kalsa wea smol komuniti I go kasem bikfala kandere for discoverim tugeda olketa staka fom an expression blong human beings wea hem givim evry diferen kaen fom blong laef an hao kolsup olketa konek tugeda.",
                    "Aim blong Miusiam hem fo holdim kolection koleksen hem representim olketa wol kalsa an fo mekem save long evrywan dat koleksen hem stap for olketa pipol blong akses long hem.",
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
