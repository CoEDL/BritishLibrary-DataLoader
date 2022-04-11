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
                Bislama: [
                    "True Echoes emi risej projek we emi aim blong rikonektem ol rij arkaev blong earli saon rikoting blong Oceanic Kaolja wetem ol komuiniti long ples we oli stap long hem.",
                    "True Echoes emi usem digitised wax cylinder rikoting blong mekem ol foto. Ol rikoting ia oli mekem long 19th mo earli 20th centuries. Ol saon rikoting ia oli karem aot long ol risej we ol anthropologist oli bin mekem bifo. Ol rikoting ia British Library Sound Archive nao oli holem istap nao ia.",
                    "Wax cylinder kolekson we emi includem rikoting we oli mekem long Papua Niu Guinea, Solomon Aelan, Vanuatu, Niu Kaledonia mo Australia bitwin 1898 mo 1918. Ol earli rikoting oli mekem long 1898 we ol memba blong Cambridge Anthropological Exeditons nao oli mekem igo long Torres Straits.",
                    "Ol rikoting olsem emi spesel tumas from oli blong long long taem mo oli representem Oceanic Komuinity.",
                    "True Echoes istap wok wetem ol institution long saed blong Kalja mo Risej long region wetem UK blong faenem wan gudfala wei mo fasen blong gat akses long ol kolekson we istap. Semtaem blong mekem sua se hao nao yumi gat gudfala fasen blong katalokem ol heritage ia mo semtaem hao nao Komiuniti isave gat akses long em from emi blong olgeta.",
                ],
                Pijin: [
                    "True Echoes hem wanfala research projek wea hem aim fo konektim baek moa olketa gutfala stori blong saon rekodings lo taem bifo yet wea olketa rekodim Oceanic kalsa blong olketa komuniti wea hem kam from.",
                    "True Echoes hem usim digitised wax cylinder rekodings yah olketa usim phonograph. Olketa rekodings stat kam long 19th century an eali 20th centuries an representim samfala wei fo usim taem bifo saon insaet lo anthropological research. Olketa tradisinal stori yah hem i stap wantaem Britis Laebri Sound Archive.",
                    "Olketa wax cylinder koleksin hem inkludim rekodings wea olketa Papua New Guinea, Solomon Islands, Vanuatu, New Caledonia an Australia betwin 1898 an 1918. Olketa bifo taem rekodings pipol lo Cambridge Anthropological Expedison long Torres Stret nah duim long 1898.",
                    "Olketa rekodings barava bik tumas an impotant tumas bikos olketa nomoa wea ol dokuments blong taem bifo ol save tekem oral tradisin blong olketa Oceanic Komuniti.",
                    "True Echoes hem waka wetem kalsaral an research institusins insaet long rijen an insaet long UK fo mek save yumi save lukim an garem olketa koleksin, mek save olketa bin katalog insaet olketa wei wea hem i isi fo ol komunti wea olketa ownim disfala kalsa yah save lukim.",
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
