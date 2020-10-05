<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row"
        >
            <div class="">
                PARADISEC
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">{{ content[language][0] }}</div>
            <div class="">{{ content[language][1] }}</div>
            <div>{{ content[language][2] }}</div>
            <div>{{ content[language][3] }}</div>
            <picture>
                <source :srcset="image.png" />
                <source :srcset="image.webp" />
                <img :src="image.png" class="h-32 object-fit mx-auto" />
            </picture>
        </div>
    </div>
</template>

<script>
import webp from "src/assets/images/PARADISEC_Logo.webp";
import png from "src/assets/images/PARADISEC_Logo.png";
export default {
    data() {
        return {
            image: { webp, png },
            content: {
                English: [
                    `PARADISEC [Pacific and Regional Archive for Digital Sources in
                Endangered Cultures] is a digital archive of records of some of
                the many small cultures and languages of the world.`,
                    `PARADISEC works to safely preserve materials that would
                otherwise be lost and their collection represents over 1,200
                languages.`,
                    `Founded in 2003, PARADISEC is a consortium made up of the
                University of Sydney, the University of Melbourne and the
                Australian National University. PARADISEC has established a
                framework for accessioning, cataloguing and digitising audio,
                text and visual material, and preserving digital copies. A
                primary goal is to safely preserve material that would otherwise
                be lost. In this way PARADISEC can make field recordings
                available to the people and communities recorded, and to their
                descendants.`,
                    `Their research group has developed models to ensure that the
                archive can provide access to interested communities, and
                conforms to emerging international standards for digital
                archiving. PARADISEC also work with cultural centres in the
                Pacific to support the management and digitisation of their own
                collections.`,
                ],
                TokPisin: [
                    `PARADISEC [Pacific and Regional Archive for Digital Sources 
                    in Endangered Cultures] em i wanpela oganaisesen olsem 
                    laibri bilong lukautim ol rikoding na pepa long ol kain kain 
                    kalsa na tok ples long olgeta hap graun na ples long wol.`,
                    `PARADISEC em i save wok long sapotim ol samting bai stap 
                    sef na lukautim gut long bihain taim nogut bai ol lus olgeta 
                    o bagarap na nau ol koleksen i stap pinis olsem antap long 
                    1,200 tok ples.`,
                    `Long 2003, PARADISEC em i bin kam kamap aninit long 
                    bungwantain long tripela yuni - University of Sydney, University 
                    of Melbourne na Australian National University. PARADISEC em 
                    mekim pinis ol rot na samting long bihainim na yusim laibri 
                    long bungim na kisim, putim na lukautim, makim na painim 
                    ol rikoding ol i dijitaisim pinis bilong harim ol vois, 
                    toktok na singsing na lukluk long ol pepa na piksa samting. 
                    As wok bilong PARADISEC em long lukautim na sapotim ol kalsa 
                    na tok ples i stap pinis nogut bai ol lus nating.
                    PARADISEC em i ken go long ol ples na komuniti bilong mekim niupela 
                    rikoding or painim ol arapela rikoding I stap pinis long 
                    dijitaisim na putim long laibri tu.`,
                    `Bihain ol kopi long 
                    dispela rikoding i ken go long ol manmeri i stap long rikoding 
                    o long ol pikinini o tumbuna bilong ol. PARADISEC wok manmeri 
                    bai sapotim na strongim laibri wantaim ol teknikal samting na ol 
                    painimaut helpim na toksave i go long komuniti. 
                    PARADISEC tu wok bungwantaim ol kalsa oganisaisesen long 
                    Pasifik long sapotim menesmen na lukautim long ol koleksen 
                    bilong wan wan kantri.`,
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
