<template>
    <div class="p-2 text-base cursor-pointer bg-gray-200 rounded-lg m-2 flex flex-col">
        <div class="flex flex-col space-y-4" @click="displayItem">
            <div class="flex flex-col md:flex-row">
                <div class="text-ld md:text-2xl pr-2">
                    {{ collection["Shelfmark"].join(" ") }}
                </div>
                <div class="text-2xl">
                    {{ collection["Collection title"].join(" ") }}
                </div>
            </div>
            <info-entry-component name="Reference" :item="collection" />
            <info-entry-component name="Location of original" :item="collection" />
            <info-entry-component name="Collection description" :item="collection" />

            <info-entry-component name="Collection inventory" :item="collection" />
            <info-entry-component name="Documentation" :item="collection" />
            <info-entry-component name="Country" :item="collection" />
            <info-entry-component name="Keyword" :item="collection" />
            <info-entry-component name="Performer/contributor" :item="collection" />
        </div>
        <div class="flex flex-col mt-4">
            <div class="font-bold">Additional collection information (PDF):</div>
            <div class="flex-grow">
                <a :href="pdfSrc">
                    {{ collection["Additional collection information (PDF)"][0] }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import InfoEntryComponent from "./InfoEntry.component.vue";

export default {
    components: {
        InfoEntryComponent,
    },
    props: {
        collection: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    computed: {
        pdfSrc: function() {
            return `/repository/${this.collection["Additional collection information (PDF)"]}`;
        },
    },
    methods: {
        displayItem() {
            this.$router.push(`/collection/${this.collection.Shelfmark[0]}`);
        },
    },
};
</script>
