<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row"
        >
            <div class="">
                Museum of Archaeology and Anthropology
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">{{ content[language][0] }}</div>
            <div class="">{{ content[language][1] }}</div>
            <div>{{ content[language][2] }}</div>
            <!-- <picture>
                <source :srcset="image.png" />
                <source :srcset="image.webp" />
                <img
                    :src="image.png"
                    class="h-32 object-fit mx-auto"
                />
            </picture> -->
        </div>
    </div>
</template>

<script>
import webp from "src/assets/images/PARADISEC_Logo.webp";
import png from "src/assets/images/PARADISEC_Logo.webp";
export default {
    data() {
        return {
            image: { webp, png },
            content: {
                English: [
                    `The Museum of Archaeology and Anthropology (MAA) at the
                University of Cambridge was founded in 1884. It has one of the
                most important collections of its kind in the UK.`,
                    `Its collections span nearly two million years of human history,
                from the stone tools of Olduvai Gorge to contemporary art. The
                museum is particularly noted for its Pacific collections, which
                include material from eighteenth century voyages of Captain
                James Cook and other early British explorers, the Museum's
                founding collections from Fiji, and the pioneering
                anthropological fieldwork of Alfred Haddon and the 1898
                Cambridge Expedition to the Torres Strait and New Guinea.`,
                    `MAA is committed to collaborative research to better understand
                and present the complex and often difficult colonial histories
                associated with its collections. The museum is particularly
                known for its work with originating communities and its
                innovative exhibitions which draw contemporary artists into
                dialogue with the historic collections.`,
                ],
                TokPisin: [
                    `Museum of Archaeology and Anthropology (MAA) long University of Cambridge i bin kamap long 1884. Em i wanpela bikpela koleksen tru insait long UK.`,
                    `Ol koleksen makim klostu tupela milien yia bilong histori na wokabaut bilong ol manmeri long bipotaim tru i stat long Olduvai Gorge we ol tumbuna wokim akis long ston i kam inap nau na ol samting bilong soim olsem piksa, poto, kaving, singsing na musik. Dispela museum em i holim kain kain koleksen bilong Pasifik olsem long taim bilong Kepten James Cook na ol arapela lain Briten i bin raun long wol. Na tu, museum i gat olpela koleksen i kam long Fiji na raun bilong Alfred Haddon, em i mekim wok painimaut long Cambridge Expedition long Torres Strait na New Guinea long 1898.`,
                    `MAA em i gat strongpela tingting na luksave long wok bung wantain bilong painimaut gut long stori bilong ol dispela koleksen bilong bipo i bin kamap long kolonial taim. Museum i gat nem long wok wantaim ol asples na komuniti we ol koleksen i kam long en na long wok wantaim ol atis bilong nau long join wantaim ol niupela samting long wok kastom na kalsa long nau.`,
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
