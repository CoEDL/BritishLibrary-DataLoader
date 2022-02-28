<template>
    <div>
        <div class="flex flex-col space-y-4">
            <info-entry-component
                v-for="field of fields"
                :key="field"
                :field="field"
                :data="item[field]"
            />
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
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            filterFields: ["collectionId"],
            fields: [],
        };
    },
    mounted() {
        this.fields = Object.keys(this.item).filter((f) => !this.filterFields.includes(f));
    },
};
</script>
