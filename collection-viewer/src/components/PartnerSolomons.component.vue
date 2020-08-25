<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row"
        >
            <div>
                <img :src="image" class="w-32 md:w-20 pt-10 md:pt-0" />
            </div>
            <div class="ml-4">
                Solomon Islands Archives and Museum
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">
                The Solomon Islands National Museum – established in 1969 –
                preserves, protects and promotes local customs and traditions.
            </div>
            <div class="">
                By working closely with local communities, the museum is
                increasing its capacity to research and manage cultural and
                natural heritage, encourage economic development through
                cultural enterprise, and to promote peace through respect of
                culture. The Museum is also enhancing its cultural
                infrastructure to increase its capacity for storing, conserving
                and exhibiting Solomon Islands’ cultural and historical
                artefacts.
            </div>
            <div>
                The Museum collects artefacts and conducts documentary research
                into culturally important sites around the country under the
                National Site Survey programme and in collaboration with
                visiting archaeologists. These programme enhance the development
                of both the SINM and Solomon Islands, and encourage a better
                understanding of the people, culture and environment of Solomon
                Islands.
            </div>
        </div>
    </div>
</template>

<script>
import image from "src/assets/images/SINM-Logo.webp";
export default {
    data() {
        return { image };
    },
};
</script>
