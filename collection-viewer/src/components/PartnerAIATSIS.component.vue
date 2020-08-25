<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-col"
        >
            <div class="">
                Australian Institute of Aboriginal and Torres Strait Islander
                Studies
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">
                AIATSIS is a research, collections and publishing organisation,
                which promotes knowledge and understanding of Aboriginal and
                Torres Strait Islander cultures, traditions, languages and
                stories, past and present.
            </div>
            <div class="">
                AIATSIS has a growing collection of over one million items,
                including films, photographs, audio recordings, art and
                artefacts, as well as printed and other resource materials.
                These collections are both culturally significant and an
                important resource of anybody looking to improve their knowledge
                of Aboriginal and Torres Strait Islander history and culture.
            </div>
            <div>
                AIATSIS also conducts community-based research in a variety of
                sectors, including languages, health, native title, and
                education.
            </div>
            <div>
                AIATSIS, originally established by an Act of the Parliament of
                Australia in 1964 as AIAS, was reconstituted in 1989 as AIATSIS.
                It is based in Canberra, Australia.
            </div>
            <div>
                <img :src="image" class="w-40" />
            </div>
        </div>
    </div>
</template>

<script>
import image from "src/assets/images/AIATSIS.webp";
export default {
    data() {
        return { image };
    },
};
</script>
