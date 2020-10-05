<template>
    <div>
        <div class="flex flex-col space-y-4">
            <info-entry-component name="Reference" :value="item['Reference']" />
            <info-entry-component
                name="Description"
                :value="item['Description (Item Note)']"
            />
            <info-entry-component
                name="Performance Note"
                :value="item['Performance Note']"
            />
            <info-entry-component
                name="Sound recording date"
                :value="item['Sound Recording Date']"
            />
            <info-entry-component
                name="Recording Location"
                :value="item['Recording Location']"
            />
            <info-entry-component
                name="Performer / Contributer"
                :value="item['Performer/Contributor']"
            />
            <info-entry-component
                name="Performer / Contributer Country"
                :value="item['Performer/Contributor Country']"
            />
            <info-entry-component
                name="Performer / Contributer Country"
                :value="item['Accent/dialect heading']"
            />
            <info-entry-component name="Rights" :value="item['Rights']" />
            <info-entry-component name="Language" :value="item['Language']" />
            <info-entry-component
                name="Recording Note"
                :value="item['Recording Note']"
            />
            <info-entry-component name="Genre" :value="item['Genre']" />
            <info-entry-component name="Subject" :value="item['Subject']" />
            <info-entry-component name="Keyword" :value="item['Keyword']" />
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
