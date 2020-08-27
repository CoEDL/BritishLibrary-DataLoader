<template>
    <div class="flex flex-col">
        <div class="font-bold">{{ name }}:</div>
        <div class="flex-grow" v-if="value && value.length">
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
