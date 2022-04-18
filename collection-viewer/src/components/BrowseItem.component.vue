<template>
    <div class="bg-white p-8 flex flex-col">
        <div class="text-2xl flex flex-col">
            <div>
                {{ item["Item title"].join(" ") }}
            </div>
        </div>

        <div class="flex-grow w-96">
            <render-audio-component
                v-if="isAudio(item['Original filename'][0])"
                :collectionId="item.collectionId"
                :src="item['Original filename'][0]"
            >
            </render-audio-component>
        </div>

        <render-image-component
            class="w-full"
            v-if="isImage(item['Original filename'][0])"
            :collectionId="item.collectionId"
            :src="item['Original filename'][0]"
        >
        </render-image-component>
        <div>
            <el-button
                type="text"
                @click="showInformation = !showInformation"
                class="text-cloudburst hover:text-celadonblue"
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
                Bislama: "Learn moa baotem itim",
                Pijin: "Lane moa abaotim disfala item",
            },
        };
    },
    computed: {
        language: function() {
            return this.$store.state.language.selected;
        },
    },
    methods: {
        isAudio(filename) {
            return filename.match(/\.mp3/) ? true : false;
        },
        isImage(filename) {
            return filename.match(/\.jpg/) ? true : false;
        },
    },
};
</script>
