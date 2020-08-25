<template>
    <div class="border border-gray-200 rounded bg-white p-8 h-64">
        <div class="flex flex-col md:flex-row">
            <div class="text-2xl flex flex-col">
                <div class="text-lg">
                    {{ item["Shelfmark"].join(" ") }}
                </div>
                <div>
                    {{ item["Item Title"].join(" ") }}
                </div>
            </div>
        </div>

        <render-audio-component
            v-if="item['Format code'][0] === 'a'"
            :src="item['Original filename'][0]"
        >
        </render-audio-component>

        <render-image-component
            v-if="item['Format code'][0] === 'i'"
            :src="item['Original filename'][0]"
        >
        </render-image-component>

        <!-- <pre>{{ item }}</pre> -->
    </div>
</template>

<script>
import RenderAudioComponent from "./RenderAudio.component.vue";
import RenderImageComponent from "./RenderImage.component.vue";
export default {
    components: {
        RenderAudioComponent,
        RenderImageComponent,
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
