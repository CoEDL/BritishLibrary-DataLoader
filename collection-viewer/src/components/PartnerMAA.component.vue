<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row"
        >
            <div>
                <img :src="image" class="h-16" />
            </div>
            <div class="ml-4">
                PARADISEC
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">
                The Museum of Archaeology and Anthropology (MAA) at the
                University of Cambridge was founded in 1884. It has one of the
                most important collections of its kind in the UK.
            </div>
            <div class="">
                Its collections span nearly two million years of human history,
                from the stone tools of Olduvai Gorge to contemporary art. The
                museum is particularly noted for its Pacific collections, which
                include material from eighteenth century voyages of Captain
                James Cook and other early British explorers, the Museum's
                founding collections from Fiji, and the pioneering
                anthropological fieldwork of Alfred Haddon and the 1898
                Cambridge Expedition to the Torres Strait and New Guinea.
            </div>
            <div>
                MAA is committed to collaborative research to better understand
                and present the complex and often difficult colonial histories
                associated with its collections. The museum is particularly
                known for its work with originating communities and its
                innovative exhibitions which draw contemporary artists into
                dialogue with the historic collections.
            </div>
        </div>
    </div>
</template>

<script>
import image from "src/assets/images/PARADISEC_Logo.webp";
export default {
    data() {
        return { image };
    },
};
</script>
