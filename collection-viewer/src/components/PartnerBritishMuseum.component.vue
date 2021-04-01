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
