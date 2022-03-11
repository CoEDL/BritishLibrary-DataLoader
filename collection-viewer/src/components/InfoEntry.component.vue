<template>
    <div class="flex flex-col" v-if="data.length">
        <div class="font-bold">{{ field }}:</div>
        <div class="flex-grow">
            {{ fieldData }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        field: {
            type: String,
            required: true,
        },
        data: {
            type: Array,
            required: true,
        },
    },
    computed: {
        fieldData() {
            const length = this.data.length;
            return this.data
                .map((f, i) =>
                    f.trim().slice(-1) === "." ? f : i !== length - 1 ? `${f},` : `${f}.`
                )
                .join(" ");
        },
    },
    data() {
        return {};
    },
};
</script>
