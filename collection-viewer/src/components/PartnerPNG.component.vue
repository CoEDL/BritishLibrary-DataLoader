<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-golden-sand py-6 px-2 flex flex-row"
        >
            <div class="w-1/5 md:w-auto pt-2 md:-mt-4">
                <img :src="image" class="h-20" />
            </div>
            <div class="ml-4">
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
        </div>
    </div>
</template>

<script>
import image from "src/assets/images/IPNGS-logo.webp";
export default {
    data() {
        return { image };
    },
};
</script>
