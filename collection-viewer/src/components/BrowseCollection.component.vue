<template>
    <div class="p-2 text-base cursor-pointer bg-gray-200 rounded-lg m-2 flex flex-col">
        <div class="flex flex-col space-y-4" @click="displayItem">
            <div class="flex flex-col md:flex-row">
                <div class="text-ld md:text-2xl pr-2">
                    {{ collection["Shelfmark"].join(" ") }}
                </div>
                <div class="text-2xl">
                    {{ collection["Collection Title"].join(" ") }}
                </div>
            </div>

            <div class="flex flex-col md:flex-row">
                <div class="md:w-48 font-bold">Description:</div>
                <div class="flex-grow">
                    {{ collection["Collection Description"].join(" ") }}
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="md:w-48 font-bold">Inventory:</div>
                <div class="flex-grow">
                    {{ collection["Collection Inventory"].join(" ") }}
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="md:w-48 font-bold">Country:</div>
                <div class="flex-grow">
                    {{ collection["Country"].join(" ") }}
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="md:w-48 font-bold">Location of Original:</div>
                <div class="flex-grow">
                    {{ collection["Location of Original"].join(" ") }}
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="md:w-48 font-bold">Performer/Contributor:</div>
                <div class="flex-grow">
                    {{ collection["Performer/Contributor"].join(" ") }}
                </div>
            </div>
        </div>
        <div
            v-if="collection['Additional collection information (PDF)'].length"
            class="my-4 text-cloudburst hover:text-celadonblue text-xl"
        >
            <a :href="pdfSrc">Find out more about this collection</a>
        </div>
    </div>
</template>

<script>
export default {
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
