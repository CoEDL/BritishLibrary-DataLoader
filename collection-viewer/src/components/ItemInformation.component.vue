<template>
    <div>
        <!-- <div>
            <pre>{{ item }}</pre>
        </div> -->
        <div class="flex flex-col space-y-4">
            <info-entry-component name="Location of Original" :item="item" />
            <info-entry-component name="Reference" :item="item" />
            <info-entry-component name="Call Number" :item="item" />
            <info-entry-component name="Description (Performance Note)" :item="item" />
            <info-entry-component name="Item Note" :item="item" />
            <info-entry-component name="Sound Recording Date" :item="item" />
            <info-entry-component name="Duration of recording" :item="item" />
            <info-entry-component name="Recording Location" :item="item" />
            <info-entry-component name="Performer/Contributor" :item="item" />
            <info-entry-component name="Performer/Contributor Country" :item="item" />
            <info-entry-component name="Performer/Contributor Culture" :item="item" />
            <info-entry-component name="Rights" :item="item" />
            <info-entry-component name="Performer Permission" :item="item" />
            <info-entry-component name="Acquisition Source" :item="item" />
            <info-entry-component name="Language Name" :item="item" />
            <info-entry-component name="Language code" :item="item" />
            <info-entry-component name="Accent/dialect heading" :item="item" />
            <info-entry-component name="Documentation" :item="item" />
            <info-entry-component name="Recording Note" :item="item" />
            <info-entry-component name="Recording Equipment" :item="item" />
            <info-entry-component name="Playback Mode" :item="item" />
            <info-entry-component name="Genre" :item="item" />
            <info-entry-component name="Subject" :item="item" />
            <info-entry-component name="Keyword" :item="item" />
        </div>
    </div>
</template>

<script>
import InfoEntryComponent from "./InfoEntry.component.vue";

import { compact } from "lodash";

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
