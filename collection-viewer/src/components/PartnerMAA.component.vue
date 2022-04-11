<template>
    <div class="flex flex-col">
        <div class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row">
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
                Bislama: [
                    "Misium blong akioloji mo antropoloji [MAA] long Universiti blong Cambridge istatem wok blong hem long 1884. Emi gat wan long ol importan kolekson long UK.",
                    "Kolekson we oli gat emi gro bigwan kolosap 2 million yia long saed blong human histori, long saed blong stone tools blong Olduvai Corge mo long contemporary art. Misium ia oli luk save wok blong hem tu from ol kolekson we emi karem long Pasifik we emi includem ol material long eighteenth centuri voyage blong Captain James Cook mo ol narfala earli British explorer olsem MIsium's founding kolekson long Fiji, mo pioneering anthropological filwoka blong Alfred Haddon mo 1898 Cambridge expedition igo long Torres Strait mo New Guinea.",
                    "MAA emi komitim hem blong mekem risej blong andastanem moa ol colonial histri we oli konek wetem ol koleson we emi gat. Misium ia tu oli luk save long hem folem wok we emi mekem wetem komueniti mo long fasen blong mekem ol kaen exhibition we i pulum ol contempprary artis blong toktok mo semtaem luk save ol historikel kolekson we igat long Misium.",
                ],
                Pijin: [
                    "Miusiam blong Archaelogy an Anthropology (MAA) long Universiti blong Cambridge hem stat long 1884. Hem garem wanfala barava impotan koleksen lelebet long UK.",
                    "Olketa koleksen blong hem kosup kasem moa long 2 million yia long human histori from wea hem kam long stone tools blong Olduvai Gorge go kasem contemporary art. Miusiam yah olketa luk save an mekem waka long Pasifik koleksen, wea hem inkludim olketa material long eighteenth century voyages blong Captain James Cook an narafala early British explorers wea Miusiam koleksen kasim kasem Fiji tu, an olketa pioneering anthropological fieldwork blong Alfred Haddon an 1898 Cambridge Expedition wea go kasem Torres Strait an New Guinea.",
                    "MAA hem komitim hem long disfala collaborative research fo mekem andastandim moa an luk save long colonial histori wea olketa mekem wetem koleksen blong hem. Muisiam yah hem garem nem bikos long waka hem duim wetem olketa komuniti fo hau olketa mekem samfala kaen exhibition wea hem pulim olketa contemporary artists fo waka tugeda wetem historical koleksen blong Miusiam.",
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
