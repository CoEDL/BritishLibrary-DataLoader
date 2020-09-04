<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row"
        >
            <div class="">
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
            <picture>
                <source :srcset="image.png" />
                <source :srcset="image.webp" />
                <img :src="image.png" class="h-32 object-fit mx-auto" />
            </picture>
        </div>
    </div>
</template>

<script>
import webp from "src/assets/images/VKS-logo.webp";
import png from "src/assets/images/VKS-logo.png";
export default {
    data() {
        return { image: { webp, png } };
    },
};
</script>
