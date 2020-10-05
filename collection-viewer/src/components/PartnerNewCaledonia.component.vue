<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row"
        >
            <div class="">
                Tjibaou Cultural Centre, New Caledonia
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">{{ content[language][0] }}</div>
            <div class="">{{ content[language][1] }}</div>
        </div>
        <!-- <picture>
                <source :srcset="image.png" />
                <source :srcset="image.webp" />
                <img
                    :src="image.png"
                    class="h-32 object-fit mx-auto"
                />
            </picture> -->
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
                    `The Tjibaou Cultural Centre’s mission to research, collect,
                enhance and promote the indigenous cultural heritage of New
                Caledonia.`,
                    `This includes linguistic and archaeological heritage, as well as
                contemporary forms of cultural expression, such as broadcasting
                and art. The Centre also implements and develops indigenous
                artistic creation and facilitates regional and international
                exchanges. Inaugurated in 1998, the Centre includes an art
                centre, exhibition spaces, and a specialised multimedia library.`,
                ],
                TokPisin: [
                    `Tjibaou Cultural Centre (TCC) em wanpela oganaisesen 
                wantaim as wok long painimaut, bungim, gohet moa na strongim ol 
                as ples manmeri na tumbuna pasin na kalsa bilong New Caledonia.`,
                    `TCC tu i save bungim wantaim ol wok long tok ples, ol tumbuna 
                graun na kastom na kalsa pasin ol wokim long lukluk, toktok na 
                tingting bilong ol manmeri we nau i yusim piksa na kaving 
                wantaim brodkas long salim na harim tok long redio or tv. Em tu 
                save long helpim long ol kain kain samting bilong wokim kalsa na 
                strongim wantain ol narapela ples na kalsa long Pasifik rijen o 
                olgeta hap graun long wol bilong luksave na soim tumbuna pasin. 
                Long 1998, ol i bin kirapim niupela laibri i yusim komputa long sapotim ol 
                kalsa wok bilong toksave na soim piksa na ol samting bilong tumbuna 
                insait long haus bilong oganaisesen.`,
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
