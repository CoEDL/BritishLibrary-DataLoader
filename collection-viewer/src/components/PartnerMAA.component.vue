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
                    `Museum of Archaeology and Anthropology (MAA) long University of 
                    Cambridge i bin kam kamap long 1884 na em gat ol bikpela samting 
                    i stap long ol koleksen insait long UK.`,
                    `Ol koleksen i stap makim olsem tupela milien yia long histori na w
                    okabaut bilong ol manmeri long bipotaim tumbuna statim long ston 
                    bilong mekim wok long Olduvai Gorge i kam inap nau long ol kain 
                    kain wok o samting bilong soim olsem piksa, poto, kaving, 
                    singsing na musik. Dispela oganaisesen em i holim kain kain 
                    koleksen bilong Pasifik long bipotaim bilong Captain James 
                    Cook na ol British lain ol I kam painim niupela graun na samting 
                    long arapela hap long wol. Ol koleksen pastaim tru i 
                    bin kam long Fiji. Alfred Haddon em wanpela paionia na save man 
                    long wok painimaut kain kain laip na pasin bilong ol 
                    manmeri insait long ol arapela komuniti na sosaiti long olgeta hap 
                    i bin kamap long 1898 Cambridge Expedition long Torres Strait 
                    na New Guinea.`,
                    `MAA em i gat strongpela tingting na luksave long wok bungwantain 
                    long painimaut samting long save moa yet dispela ol koleksen 
                    bilong bipo long histori na kolonial taim. Bikpela samting 
                    oganaisesen em i mekim olsem ol as ples na komuniti we ol 
                    koleksen i kam long em ol mas wok bungwantaim long lukautim 
                    save bilong bipo na joinim wantaim ol niupela sampting long 
                    wok kastom na kalsa long nau.`,
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
