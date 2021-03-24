<template>
    <div class="flex flex-col" v-if="item">
        <div class="font-bold">{{ name }}:</div>
        <div class="flex-grow">
            <div v-if="item[name].length">
                {{ item[name].join(", ") }}
            </div>
            <div v-else>N/A</div>
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
