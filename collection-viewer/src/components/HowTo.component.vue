<template>
    <div class="flex flex-col">
        <div class="heading-text page-title-size bg-goldensand py-6 px-2">
            {{ content[language][0] }}
        </div>
        <div class="mt-6 m-2 lg:mx-6 lg:text-2xl">
            {{ content[language][1] }}
            <ul class="list-disc ml-4">
                <li>
                    {{ content[language][2] }}
                </li>
                <li>
                    {{ content[language][3] }}
                </li>
            </ul>
            <div class="mt-2">
                {{ content[language][4] }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: {
                English: [
                    `How to use this catalogue`,
                    `There are two ways to explore the catalogue:`,
                    `Browse - The audio recordings are organised 
                    into different collections based on who recorded 
                    them and when they were recorded. From 
                    'Browse the catalogue', you can learn more about 
                    each collection and listen to the recordings 
                    within the collections.`,
                    `Search – You can also search the entire catalogue. 
                    This option is available via the main menu, which 
                    you can open by clicking the icon in the top-right 
                    corner of the screen.`,
                    `You can see further information about individual recordings and images by
                    selecting “Learn more about this item”.`,
                ],
                TokPisin: [
                    `I gat tupela rot long lukluk insait long kalsa laibri.`,
                    `
                    Lukluk - I gat kain kain rikoding bilong harim, na 
                    ol i stap insait long koleksen. Ol koleksen bilong laibri 
                    i stap aninit long nem bilong man o meri i bin kisim 
                    dispela rikoding na tu long wanem taim ol i kisim. 
                    Long "Lukluk insait long kalsa laibri  " yu ken kisim save moa 
                    long wan wan koleksen na harim ol rikoding insait long dispela ol koleksen
                    `,
                    `Painim – Na tu yu ken painim olgeta samting insait long kalsa laibri. Sapos yu laik mekim olsem, go long seksen bilong Tokaut na klik long mak i stap antap long raithan sait.`,
                    `
                    Planti moa toksave long wan wan rikoding na ol piksa bai 
                    stap long seksen ol i kolim "kisim save moa long dispela samting"
                    `,
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
