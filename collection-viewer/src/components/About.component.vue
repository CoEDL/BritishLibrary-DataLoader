<template>
    <div class="flex flex-col">
        <div class="heading-text page-title-size bg-goldensand py-6 px-2">
            {{ content[language][0] }}
        </div>
        <p class="mt-6 m-2 lg:mx-6 lg:text-2xl">
            {{ content[language][1] }}
        </p>
        <p class="m-2 lg:mx-6 lg:text-2xl">
            {{ content[language][2] }}
        </p>
        <p class="m-2 lg:mx-6 lg:text-2xl">
            {{ content[language][3] }}
        </p>
        <p class="m-2 lg:mx-6 lg:text-2xl">
            {{ content[language][4] }}
        </p>
        <p class="m-2 lg:mx-6 lg:text-2xl">
            {{ content[language][5] }}
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: {
                English: [
                    "About True Echoes",
                    `True Echoes is a research project that aims to reconnect a rich
            archive of early sound recordings of Oceanic cultures with the
            communities from which they originate.`,
                    `True Echoes uses digitised wax cylinder recordings created using the
            phonograph. These recordings date from the late 19th and early 20th
            centuries and represent some of the earliest uses of sound in
            anthropological research. They are currently held by the British
            Library Sound Archive.`,
                    `The wax cylinder collection includes recordings made in Papua 
                New Guinea, Solomon Islands, Vanuatu, New Caledonia and Australia between 
                1898 and 1918. The earliest recordings were made in 1898 by members 
                of the Cambridge Anthropological Expedition to Torres Straits.`,
                    `These rare recordings are hugely significant as the earliest
            documents of oral traditions from Oceanic communities.`,
                    `True Echoes is working with cultural and research institutions in
            the region and in the UK to enhance the visibility and accessibility
            of these collections, ensuring that they are catalogued in ways that
            are accessible to the communities whose heritage they represent.`,
                ],
                TokPisin: [
                    `Toksave long True Echoes`,
                    `True Echoes em i wanpela wok painimaut projek wantaim as tingting 
                    long yusim planti bikpela save i stap long taim bipo laibri i 
                    gat rikoding ol i holim vois, stori na singsing long kastom na kalsa 
                    insait long Pasifik. Kopi bilong olgeta samting olsem i mas go bek 
                    long ol komuniti na ples ol i bin kamapim.`,
                    `Ol dispela olpela rikoding ol man bipo i bin katim long masin 
                    bilong pilai music. Rikoding i kamap long silenda em i luk olsem 
                    namel hap bilong toilet rol. Dispela silenda ol i bin wokim long 
                    weks o gris, olsem i stap long kandel. Ol dispela silenda i winim moa 
                    long 100 yia pinis. Ol savemanmeri i wokim kopi bilong ol dispela 
                    silenda na yumi ken harim nau. Koleksen bilong ol dispela rikoding i 
                    stap long British Library Sound Archive long London.`,
                    `Dispela koleksen bilong ol silenda ol i bin mekim long Papua 
                    New Guinea, Solomon Islands, Vanuatu, New Caledonia na Australia namel 
                    long ol yia i stat long 1898 inap long 1918. Em ol memba bilong 
                    Cambridge Anthropological Expedition ol i bin go long Torres Straits 
                    na mekim dispela rikoding long 1898.`,
                    `Ol dispela silenda rikoding i gat ol toktok na stori na singsing 
                    i kam long ol Pasifik komuniti bilong bipo.`,
                    `True Echoes i wok wantaim ol oganisesen bilong kalsa na wok 
                    painimaut long Pasifik rijen na long UK. Ol dispela koleksen i stap 
                    long helpim ol komuniti i gat interes long histori na pasin tumbuna.`,
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
