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
                PARADISEC [Pacific and Regional Archive for Digital Sources in
                Endangered Cultures] is a digital archive of records of some of
                the many small cultures and languages of the world.
            </div>
            <div class="">
                PARADISEC works to safely preserve materials that would
                otherwise be lost and their collection represents over 1,200
                languages.
            </div>
            <div>
                Founded in 2003, PARADISEC is a consortium made up of the
                University of Sydney, the University of Melbourne and the
                Australian National University. PARADISEC has established a
                framework for accessioning, cataloguing and digitising audio,
                text and visual material, and preserving digital copies. A
                primary goal is to safely preserve material that would otherwise
                be lost. In this way PARADISEC can make field recordings
                available to the people and communities recorded, and to their
                descendants.
            </div>
            <div>
                Their research group has developed models to ensure that the
                archive can provide access to interested communities, and
                conforms to emerging international standards for digital
                archiving. PARADISEC also work with cultural centres in the
                Pacific to support the management and digitisation of their own
                collections.
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
