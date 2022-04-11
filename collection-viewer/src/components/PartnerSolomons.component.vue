<template>
    <div class="flex flex-col">
        <div class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row">
            <div class="">
                Solomon Islands Archives and Museum
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">{{ content[language][0] }}</div>
            <div class="">{{ content[language][1] }}</div>
            <div>{{ content[language][2] }}</div>
            <picture>
                <source :srcset="image.png" />
                <source :srcset="image.webp" />
                <img :src="image.png" class="h-32 object-fit mx-auto" />
            </picture>
        </div>
    </div>
</template>

<script>
import webp from "src/assets/images/SINM-Logo.webp";
import png from "src/assets/images/SINM-Logo.png";
export default {
    data() {
        return {
            image: { webp, png },
            content: {
                English: [
                    `The Solomon Islands National Museum – established in 1969 –
                preserves, protects and promotes local customs and traditions.`,
                    `By working closely with local communities, the museum is
                increasing its capacity to research and manage cultural and
                natural heritage, encourage economic development through
                cultural enterprise, and to promote peace through respect of
                culture. The Museum is also enhancing its cultural
                infrastructure to increase its capacity for storing, conserving
                and exhibiting Solomon Islands’ cultural and historical
                artefacts.`,
                    `The Museum collects artefacts and conducts documentary research 
                into culturally important sites around the country under the 
                National Site Survey programme and in collaboration with visiting 
                archaeologists. These programmes enhance the development of both 
                the SINM and Solomon Islands, and encourage a better understanding 
                of the people, culture and environment of Solomon Islands.`,
                ],
                TokPisin: [
                    `Solomon Islands National Museum (SINM) i bin kamap long 1969 
                    bilong lukautim, protektim na strongim kastom na pasin tumbuna.`,
                    `Dispela oganaisesen em i wok bung wantaim ol komuniti long 
                    ples bilong painimaut moa na lukautim kalsa na pasin tumbuna 
                    wantaim ol samting i kamap long graun, na bilong strongim 
                    gutpela sindaun bilong ol manmeri. Em givim gutpela tok na 
                    tingting long strongim na painim gutpela rot bilong wok mani 
                    bilong sapotim kalsa wok long helpim lukautim na putim gut long 
                    haus tumbuna bilong soim na kisim save moa long kalsa na 
                    ol kaving bilong Solomon Islands.`,
                    `SINM tu i save bungim ol kaving na samting bilong ol tumbuna 
                    ol manmeri wokim long soim kalsa na raitim pepa long painimaut 
                    ol hap o ples long kantri we i kamap aninit long National Survey 
                    Programme em i wok bung wantaim ol save manmeri long digim 
                    graun long painim ol samting bilong tumbuna. Dispela plen bilong 
                    wokim em helpim divelopmen long SINM na Solomon Islands long mekim 
                    gutpela luksave na toksave i kamap long ol manmeri, na long 
                    sait bilong kalsa na envairomen bilong Solomon Islands.`,
                ],
                Bislama: [
                    "Nasonal Misium blong Solomon Aelan sin emi statem wok blong hem long 1969 emi blong presevem, protektem mo promotem ol lokal kastom mo Kalja blong Solomon Aelan.",
                    "Misium ia oltaem emi stap wok wetem Komiuniti blong liftimap wok blong mekem risej mo lukaotem wok blong Kalja mo natural heritage mo semtaem liftemap ekonomik devlopmen mo promotem pis tru long kalja. Solomon Aelan Misium ia tu emi stap wok strong nao ia blong liftimap ol wok blong hem long saed blong mekem gud ol storage mo conservem mo exibitim ol kastom mo kalja wetem ol artefact we igat ol hsitri blong olgeta.",
                    "Misium emi kolektem tu ol artefact mo conductem documentari risej long ol important kaljoral site raon long Solomons mo long Nasonal Saet Sevei program blong SINM mo Solomon Aelan mo semtaem emi encouragem ol pipol blong andastanem moa kastom mo kalja ensaed long environmen blong Solomon Aelan.",
                ],
                Pijin: [
                    "Solomon Islands Nasinal Miusiam hem stat long 1969 wea olketa kipim an luk save impotans blong kalsa blong Solomon Islands an stat waka long olketa lokol kastom an tradisin.",
                    "Nasinal muisiam waka wetem olketa lokol komiuniti fo inkrisim moa kapasiti blong research blong hem wea save helpem managemen kalsa an natural heritage, enkarejim ekonomic developmen wetem kaltural kalsaral entaprais, an fo promotim peace wetem respect long kalsa. Disfala miusiam tu hem mekem gohet kalsaral infrastructure fo inkrisim kapasiti fo storim, conservim an fo exhibitim Solomon Islands kalsa an historical artifacts blong hem.",
                    "Solomon Islands Miusiam hem kolektim artifacts an kondaktim olketa duim samfala pepa wok insaet long olketa kalsaral impotan saet evriwea insaet long kandere andanit long Nasinal Saet Sevei program na waka tugeda wetem olketa ovasis archaeologists. Olketa program yah fo mekem gohet development blong olketa SINM an kandere blong yumi wea olketa enkarajim ting ting save blong pipol, kalsa an envairomen blong kandere blong yumi long Solomon Islands.",
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
