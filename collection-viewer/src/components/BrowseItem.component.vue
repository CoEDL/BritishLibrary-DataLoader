<template>
    <div class="bg-white p-8 flex flex-col">
        <div class="text-2xl flex flex-col">
            <div>
                {{ item["Item title"].join(" ") }}
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
        <div>
            <el-button
                type="text"
                @click="showInformation = !showInformation"
                class="text-cloudburst hover:text-celadonblue"
                w
            >
                {{ learnMore[language] }}
            </el-button>
        </div>
        <item-information-component :item="item" v-if="showInformation" />
    </div>
</template>

<script>
import RenderAudioComponent from "./RenderAudio.component.vue";
import RenderImageComponent from "./RenderImage.component.vue";
import ItemInformationComponent from "./ItemInformation.component.vue";
export default {
    components: {
        RenderAudioComponent,
        RenderImageComponent,
        ItemInformationComponent,
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            showInformation: false,
            learnMore: {
                English: "Learn more about this item",
                TokPisin: "lanim moa long dispela samting",
            },
        };
    },
    computed: {
        language: function() {
            return this.$store.state.language.selected;
        },
    },
};
</script>
