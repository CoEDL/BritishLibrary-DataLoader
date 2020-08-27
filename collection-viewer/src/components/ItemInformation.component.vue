<template>
    <div>
        <div class="flex flex-col space-y-4">
            <div class="flex flex-col md:flex-row">
                <div class="pr-2">
                    {{ item["Reference"].join(" ") }}
                </div>
                <div class="">
                    {{ item["Item Title"].join(" ") }}
                </div>
            </div>

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
                :value="item['Performer / Contributor']"
            />
            <info-entry-component name="Rights" :value="item['Rights']" />
            <info-entry-component name="Language" :value="item['Language']" />
            <info-entry-component
                name="Recording Note"
                :value="item['Recording Note']"
            />
            <info-entry-component name="Genre" :value="item['Genre']" />
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
