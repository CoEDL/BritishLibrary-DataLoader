<template>
    <div class="flex flex-col">
        not yet implemented
    </div>
</template>

<script>
import BrowseCollectionComponent from "./BrowseCollection.component.vue";
import BrowseItemComponent from "./BrowseItem.component.vue";

export default {
    components: {
        BrowseCollectionComponent,
        BrowseItemComponent,
    },
    data() {
        return {
            activeTab: "items",
        };
    },
    computed: {
        collections: function() {
            return this.$store.state.collections;
        },
        items: function() {
            return this.$store.state.items;
        },
    },
};
</script>
