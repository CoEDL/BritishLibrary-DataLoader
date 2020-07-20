<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-golden-sand py-6 px-2 flex flex-row"
        >
            <div>
                <img :src="image" class="h-20" />
            </div>
            <div class="ml-4">
                British Library
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">
                The British Library is the national library of the United
                Kingdom and one of the world's greatest research libraries.
            </div>
            <div class="">
                It provides world class information services to the academic,
                business, research and scientific communities and offers
                unparalleled access to the world's largest and most
                comprehensive research collection. The Library's collection has
                developed over 250 years and exceeds 150 million separate items
                representing every age of written civilisation and includes
                books, journals, manuscripts, maps, stamps, music, patents,
                photographs, newspapers and sound recordings in all written and
                spoken languages.
            </div>
        </div>
    </div>
</template>

<script>
import image from "src/assets/images/BritishLibrary.webp";
export default {
    data() {
        return { image };
    },
};
</script>
