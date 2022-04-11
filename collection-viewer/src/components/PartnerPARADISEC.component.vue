<template>
    <div class="flex flex-col">
        <div class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row">
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
                    `PARADISEC [Pacific and Regional Archive for Digital Sources in Endangered Cultures] em i wanpela laibri bilong lukautim ol rikoding na pepa long ol kain kain kalsa na tok ples long olgeta hap graun na ples long wol.`,
                    `PARADISEC em i save wok long sapotim ol samting bai stap sef na lukautim gut long bihaintaim, nogut bai ol samting i lus olgeta o bagarap. Koleksen i makim antap long 1,200 tok ples.`,
                    `PARADISEC em i bin kamap long 2003. Em kamap ananit long tripela yuni: University of Sydney, University of Melbourne, na Australian National University. PARADISEC i mekim pinis wanpela rot bilong kisim, na dijitaisim, putim, na lukautim long laibri, ol rikoding o pepa o arapela samting i makim ol toktok na singsing. As wok bilong PARADISEC em long lukautim na sapotim ol kalsa na tok ples i stap pinis, nogut bai ol i lus nating. Em olsem na PARADISEC i ken wokim kopi bilong ol dispela rikoding na pepa bilong givim long ol komuniti yet na tu long ol pikinini na tumbuna bilong ol.`,
                    `Wok manmeri bilong PARADISEC i sapotim na strongim laibri wantaim ol teknikal samting na ol painimaut helpim na toksave i go long komuniti. PARADISEC tu i wok wantaim ol kalsa oganisaisesen bilong Pasifik bilong sapotim na helpim menesmen na lukautim ol koleksen bilong ol yet.`,
                ],
                Bislama: [
                    "PARADISEC [Pasifik mo Riginol Arkaef blong Digital Soses long endanger Kalja] emi wan organaeseson blong Arkaef we istap lukaotem ol rikot blog ol Kalja mo lanwis blong sam long ol fulap kaontri raon long wol.",
                    "PARADISEC emi wok blong presevem gud ol materiol we maet isave lus mo kolekson we emi mekem nao ia ikasem ova 1. 200 lanwis.",
                    "Sins emi statem wok blong hem long 2003 PARADISEC emi joen mo wok wetem ol Universiti olsem Sydney Universiti, Universiti blong Melbourne mo Nasonal Universiti blong Australia. PARADISEC emi setem ap plan blong wok blong lukaotem, katelokem, digitaesem ol audio, text mo visual materiol mo semtaem preservem ol digitol kopi. Wan wok blong hem tu emi blong lukaotem gud mo semtaem preservem ol materiol we maet isave go lus. Long wei ia PARADISEC isave mekem fil rikoting ia oli sef istap blong ol pipol mo Komiuniti isave gat akses long hem igo long future.",
                    "Risej krup blong PARADISEC emi developem ol model blong mekem sua se arkaef isave provaedem akses long ol Komiuniti we oli gat interest mo akri mo joen wetem internasonal stadard blong digital arkaef. PARADISEC emi wok tu wetem ol Kaljoral Senta long Pasifik blong sapotem managemen mo digitisaton blong wan wan kolekson blong olgeta.",
                ],
                Pijin: [
                    "PARADISEC [Pasifik an Rijenal Akaiv fo Digital Sources long Endangered kalsa] hem digital akaiv wea olketa rekod blong samfala staka smol kalsa an languis blong wol.",
                    "PARADISEC waka fo preservim presevim olketa materials wea kosup lus an olketa koleksonfrom moa long 1200 languis.",
                    "Stat kam yet long 2003, PARADISEC hem wanfala consortium wea trifala univasiti olketa stand tugeda fo mekem waka hem long Universiti blong Sydney, Universiti blong Melbourne an Australian Nasinal Universiti. PARADISEC garem waka fo lukaotim, katelogim, digitaisim olketa audio, text an visual materials an presevim olketa digital kopi. Wan bifala waka blong olketa hem fo mekem seif long lukaotim an semtaem presevim olketa material wea kosup lus. Hem nomoa PARADISEC save mekem fil rekoding hem stap gud wea olketa pipol an komuniti save akses fo descendants blong olketa.",
                    "Disfala research group hem developim model fo mekem save wea akaiv save providim akses long olketa komuniti hu hem garem interest. Olketa waka hem mekem I luk save an mitim intanasinal standard fo digital akaiv. PARADISEC hem waka tu wetem olketa kalsaral senta insaet long Pasifik fo sapotim managemen an digitisation blong koleksen fo olketa evriwan. ",
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
