<template>
    <div class="flex flex-col" v-if="value && value.length">
        <div class="font-bold">{{ name }}:</div>
        <div class="flex-grow">
            {{ value.join(" ") }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        value: {
            type: Array | undefined,
            required: true,
        },
    },
    data() {
        return {};
    },
};
</script>
