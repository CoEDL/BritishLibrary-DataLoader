<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row"
        >
            <div class="">
                British Museum
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">
                The British Museum was founded in 1753 and opened its doors in
                1759. It was the first national museum to cover all fields of
                human knowledge, open to visitors from across the world.
            </div>
            <div class="">
                The British Museum brings together the cultures of the world
                under one roof. Its 8 million objects allow us to explore the
                extraordinary diversity of human cultures, from small
                communities to vast empires, to discover the many forms and
                expressions human beings have given to every aspect of life, and
                to realise how closely they are interconnected.
            </div>
            <div>
                The Museum's aim is to hold a collection representative of world
                cultures and to ensure that the collection is housed in safety,
                conserved, curated, researched and exhibited.
            </div>
            <!-- <div>
                <img :src="image" class="h-16" />
            </div> -->
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
