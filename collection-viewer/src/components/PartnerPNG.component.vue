<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row"
        >
            <div class="">
                Institute of Papua New Guinea Studies
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">
                {{ content[language][0] }}
            </div>
            <div class="">
                {{ content[language][1] }}
            </div>
            <div class="">
                {{ content[language][1] }}
            </div>
            <picture>
                <source :srcset="image.png" />
                <source :srcset="image.webp" />
                <img :src="image.png" class="h-32 object-fit mx-auto" />
            </picture>
        </div>
    </div>
</template>

<script>
import webp from "src/assets/images/IPNGS-logo.webp";
import png from "src/assets/images/IPNGS-logo.png";
export default {
    data() {
        return {
            image: { webp, png },
            content: {
                English: [
                    `Founded one year before Independence in 1974, the Institute of
                Papua New Guinea Studies [IPNGS] is a national cultural
                institution that researches, documents, archives, and promotes
                Papua New Guinea cultures, with a focus on music/dance,
                ethnology, and literature.`,
                    `While the primary focus is on traditional expressions of
                culture, attention is also given to more recently developed
                expressions, such as those performed in church, town, military
                displays, etc.`,
                    `The IPNGS Music Archive aims to reflect all music/dance-related
                research that has been done in Papua New Guinea and includes
                around 12,000 hours of recordings on reels, cassettes and discs,
                as well as films, photos, and published and unpublished printed
                works.`,
                ],
                TokPisin: [
                    `
                    Gavman i kirapim Institute of Papua New Guinea Studies o
                    Institut bilong Papua Niugini Stadis (IPNGS) long 1974,
                    wanpela yia bipo long independens. Em i wanpela nesenol kalsa opis
                    i mekim wok painimaut long ol pasin tumbuna na ol
                    pasin bilong nau insait long Papua New Guinea. Na em bungim
                    ol dispela pepa na rikoding long libreri na traim apim
                    nem bilong ol kalsa bilong kantri. IPNGS i lukluk moa long
                    singsing, stori tumbuna, na olgeta kalsa pasin bilong manmeri.
                    `,
                    `
                    Bikpela wok bilong IPNGS em long lukluk long pasin tumbuna
                    na kastom, tasol ol i lukluk tu long narapela pasin i kamap
                    bihain tu, olsem wok bilong sios, taun, na ol soldia na polis.
                    `,
                    `
                    Music Archive o Musik Laibri bilong IPNGS em i lukautim
                    planti wok painimaut long sait bilong musik na singsing
                    insait long Papua New Guinea. I gat samting olsem 12,000
                    aua bilong rikoding long ol, kaset, muvi na poto wantaim
                    kain kain arapela pepa.`,
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
