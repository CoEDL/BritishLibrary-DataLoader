<template>
    <div>
        <!-- <div>
            <pre>{{ item }}</pre>
        </div> -->
        <div class="flex flex-col space-y-4">
            <info-entry-component name="Location of original" :item="item" />
            <info-entry-component name="Reference" :item="item" />
            <info-entry-component name="Call number" :item="item" />
            <info-entry-component name="Description (performance note)" :item="item" />
            <info-entry-component name="Item note" :item="item" />
            <info-entry-component name="Sound recording date" :item="item" />
            <info-entry-component name="Duration of recording" :item="item" />
            <info-entry-component name="Recording location" :item="item" />
            <info-entry-component name="Performer/contributor" :item="item" />
            <info-entry-component name="Performer/contributor country" :item="item" />
            <info-entry-component name="Performer/contributor culture" :item="item" />
            <info-entry-component name="Rights" :item="item" />
            <info-entry-component name="Performer permission" :item="item" />
            <info-entry-component name="Language name" :item="item" />
            <info-entry-component name="Language code" :item="item" />
            <info-entry-component name="Accent/dialect heading" :item="item" />
            <info-entry-component name="Documentation" :item="item" />
            <info-entry-component name="Recording note" :item="item" />
            <info-entry-component name="Recording equipment" :item="item" />
            <info-entry-component name="Playback mode" :item="item" />
            <info-entry-component name="Genre" :item="item" />
            <info-entry-component name="Subject" :item="item" />
            <info-entry-component name="Keyword" :item="item" />
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
        return {};
    },
};
</script>
