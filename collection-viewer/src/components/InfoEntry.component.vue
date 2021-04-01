<template>
    <div class="flex flex-col" v-if="item && item[name] && item[name].length">
        <div class="font-bold">{{ name }}:</div>
        <div class="flex-grow">
            {{ item[name].join(", ") }}
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
        item: {
            type: Object | undefined,
            required: true,
        },
    },
    data() {
        return {};
    },
};
</script>
