<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row"
        >
            <div class="">
                Institute of Papua New Guinea Studies
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">
                Founded one year before Independence in 1974, the Institute of
                Papua New Guinea Studies [IPNGS] is a national cultural
                institution that researches, documents, archives, and promotes
                Papua New Guinea cultures, with a focus on music/dance,
                ethnology, and literature.
            </div>
            <div class="">
                While the primary focus is on traditional expressions of
                culture, attention is also given to more recently developed
                expressions, such as those performed in church, town, military
                displays, etc.
            </div>
            <div class="">
                The IPNGS Music Archive aims to reflect all music/dance-related
                research that has been done in Papua New Guinea and includes
                around 12,000 hours of recordings on reels, cassettes and discs,
                as well as films, photos, and published and unpublished printed
                works.
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
import webp from "src/assets/images/IPNGS-logo.webp";
import png from "src/assets/images/IPNGS-logo.png";
export default {
    data() {
        return { image: { webp, png } };
    },
};
</script>
