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
                    `Beginning with recordings made in 1898 by members of the Cambridge
            Anthropological Expedition to Torres Straits, the wax cylinder
            collection includes recordings made in Papua New Guinea, the Solomon
            Islands, Vanuatu, New Caledonia and Australia.`,
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
                    long yusim planti bikpela save i stap long taim 
                    bipo laibri i gat saun rekoding ol i holim vois, tok stori na 
                    singsing long kastom na kalsa insait long Pasifik na olgeta 
                    mas go bek long ol komuniti na ples ol i bin kamapim.`,
                    `True Echoes i yusim masin bilong pilai musik na rekodim 
                    long samting olsem gris wantaim paip.`,
                    `Ol dispela olpela rikoding ol i mekim gutpela pinis long 
                    harim tudei bikos ol i bin stap olsem wan handet yia pinis 
                    long mak olsem bihaintaim long pinisim 1900 na bipotaim 
                    long statim 2000.`,
                    `Ol dispela saun rikoding em i bin kalsa painimaut wok long 
                    taim bipo na ol i holim stap long ples bilong British Library 
                    Sound Archive.`,
                    `
                    Ol koleksen insait long ol gris wantaim paip em ol bin mekim 
                    rikoding long Papua New Guinea, Solomon Islands, Vanuatu, New Caledonia 
                    na Australia namel long ol yia statim long 1898 i 
                    nap long 1918. 
                    Em ol memba bilong Cambridge Anthropological Expedition ol i 
                    bin go long Torres Straits na mekim dispela bipotaim tru 
                    rikoding long 1898. Ol dispela rikoding em i hat long painim 
                    olsem na em bikpela samting tumas. Ol dispela kastom pasin 
                    bipotaim ol i save wokim long toktok na stori tasol insait 
                    long ol Pasifik komuniti na nau mas stap long pepa na rikod.`,
                    `
                    True Echoes i wok wantaim ol kalsa na wok painimaut oganaisesen 
                    long Pasifik rijen na long UK bai ol dispela koleksen i stap gut 
                    long helpim ol komuniti husat ol makim ples tumbuna long lukaut 
                    na kisim gutpela save long kalsa.`,
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
