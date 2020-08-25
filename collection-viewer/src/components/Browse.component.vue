<template>
    <div class="flex flex-col">
        <browse-collection-component
            class="m-4 mb-4 py-4"
            v-for="(collection, idx) of collections"
            :key="idx"
            :collection="collection"
        >
        </browse-collection-component>
    </div>
</template>

<script>
import BrowseCollectionComponent from "./BrowseCollection.component.vue";

export default {
    components: {
        BrowseCollectionComponent,
    },
    data() {
        return {};
    },
    computed: {
        collections: function() {
            return this.$store.state.collections;
        },
    },
};
</script>
