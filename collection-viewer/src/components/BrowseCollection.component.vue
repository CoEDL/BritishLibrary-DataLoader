<template>
    <div class="p-2 text-base cursor-pointer bg-gray-200 rounded-lg m-2 flex flex-col">
        <div class="flex flex-col space-y-4" @click="displayItem">
            <div class="flex flex-col md:flex-row">
                <div class="text-2xl pr-2">
                    {{ collection["Shelfmark"].join(" ") }}
                </div>
                <div class="text-2xl">
                    {{ collection["Collection title"].join(" ") }}
                </div>
            </div>
            <info-entry-component
                v-for="field of fields"
                :key="field"
                :field="field"
                :data="collection[field]"
            />
        </div>
        <div class="flex flex-col mt-4" v-if="pdfName">
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
        return {
            filterFields: ["Additional collection information (PDF)"],
            fields: [],
        };
    },
    computed: {
        pdfSrc: function() {
            return `/repository/${this.collection["Additional collection information (PDF)"]}`;
        },
        pdfName: function() {
            return this.collection["Additional collection information (PDF)"]?.[0];
        },
    },
    mounted() {
        this.fields = Object.keys(this.collection).filter((f) => !this.filterFields.includes(f));
    },
    methods: {
        displayItem() {
            this.$router.push(`/collection/${this.collection.Shelfmark[0]}`);
        },
    },
};
</script>
