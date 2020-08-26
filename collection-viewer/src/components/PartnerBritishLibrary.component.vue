<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row"
        >
            <div class="">
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
            <picture>
                <source :srcset="image.png" />
                <source :srcset="image.webp" />
                <img
                    :src="image.png"
                    class="h-32 object-cover opacity-50 style-image mx-auto"
                />
            </picture>
        </div>
    </div>
</template>

<script>
import webp from "src/assets/images/BritishLibrary.webp";
import png from "src/assets/images/BritishLibrary.png";
export default {
    data() {
        return { image: { webp, png } };
    },
};
</script>
