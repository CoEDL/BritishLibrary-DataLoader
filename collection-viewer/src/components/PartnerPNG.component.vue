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
                Long 1974, wanpela yia bipo long indipendens, gavaman i bin kirapim Institute 
                of Papua New Guinea Studies (IPNGS) olsem bai kamap 
                opis bilong nesenol kalsa long wok painimaut, mekim ol pepa, 
                lukautim rikod laibri na strongim Papua New Guinea kalsa 
                na bungim tingting long music singsing, pasin bilong manmeri insait long kalsa 
                na planti kain kain raitim pepa bilong kisim save.`,
                    `Bikpela wok long IPNGS em long autim toktok na tingting long pasin 
                tumbuna na kastom na nau ol i lukluk long narapela kain samting 
                long autim olsem ol pasin na ol wok bilong sios, 
                taun na soim stori na wokabaut bilong ol soldia na planti moa.`,
                    `IPNGS Music Archive em i lukautim na autim planti music na singsing 
                painimaut wok ol i mekim long Papua New Guinea na kain kain 
                rikoding ems tap olsem long 12,000 aua insait long ol tep, kaset, 
                piksa bilong muvi na poto wantaim kain kain pepa long autim toktok na tingting.`,
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
