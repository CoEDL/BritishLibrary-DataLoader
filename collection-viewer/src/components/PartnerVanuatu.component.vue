<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-golden-sand py-6 px-2 flex flex-row"
        >
            <div>
                <img :src="image" class="w-20 pt-4 md:pt-0" />
            </div>
            <div class="ml-4">
                Vanuatu Kaljoral Senta
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">
                The Vanuatu Kaljoral Senta assists with the preservation,
                protection and promotion of Vanuatu’s tangible and intangible
                cultural heritage.
            </div>
            <div class="">
                Since its inception, the Vanuatu Kaljoral Senta has played a
                major role in the documentation of traditional knowledge and
                artefacts, the surveying of cultural and historical sites, and
                the discovery of significant archaeological sites.
            </div>
            <div>
                The National Film, Sound and Photo archive at VKS was
                established in the 1960s and is responsible for collecting,
                preserving and promoting the cultural collections of film, photo
                and audio recordings.
            </div>
        </div>
    </div>
</template>

<script>
import image from "src/assets/images/VKS-logo.webp";
export default {
    data() {
        return { image };
    },
};
</script>
