<template>
    <div class="flex flex-col">
        <div class="font-bold">{{ field }}:</div>
        <div class="flex-grow">
            {{ data.join(", ") }}
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
    data() {
        return {};
    },
};
</script>
