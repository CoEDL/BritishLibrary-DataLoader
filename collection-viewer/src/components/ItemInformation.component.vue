<template>
    <span>
        <el-button
            type="text"
            @click="dialogVisible = !dialogVisible"
            size="small"
            class="style-information-button"
        >
            info
            <i class="fas fa-caret-down"></i>
        </el-button>
        <el-dialog :visible.sync="dialogVisible" :fullscreen="true" :modal="false">
            <span class="text-left text-black">
                <div class="row py-2">
                    <div class="col-12 col-md col-lg col-xl text-xl">Title</div>
                    <div class="col-12 col-md-10 col-lg-10 col-xl-10">{{item.title}}</div>
                </div>
                <div class="row py-2">
                    <div class="col-12 col-md col-lg col-xl text-xl">Date</div>
                    <div class="col-12 col-md-10 col-lg-10 col-xl-10">{{item.date}}</div>
                </div>
                <div class="row py-2">
                    <div class="col-12 col-md col-lg col-xl text-xl">Metadata</div>
                    <div
                        class="col-12 col-md-10 col-lg-10 col-xl-10"
                    >{{item.collectionId}} / {{item.itemId}}</div>
                </div>
                <div class="row py-2" v-if="speakers.length">
                    <div class="col-12 col-md col-lg col-xl text-xl">Speakers</div>
                    <div class="col-12 col-md-10 col-lg-10 col-xl-10">
                        <div v-for="(speaker, idx) of speakers" :key="idx">{{speaker}}</div>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col-12 col-md col-lg col-xl text-xl">Languages</div>
                    <div class="col-12 col-md-10 col-lg-10 col-xl-10">
                        <div v-for="(language, idx) of item.languages" :key="idx">{{language}}</div>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col-12 col-md col-lg col-xl text-xl">Region</div>
                    <div class="col-12 col-md-10 col-lg-10 col-xl-10">{{item.region}}</div>
                </div>
                <div class="row py-2">
                    <div class="col-12 col-md col-lg col-xl text-xl">Description</div>
                    <div class="col-12 col-md-10 col-lg-10 col-xl-10">{{item.description}}</div>
                </div>
                <div class="row py-2">
                    <div class="col-12 col-md col-lg col-xl text-xl">Citation</div>
                    <div class="col-12 col-md-10 col-lg-10 col-xl-10">{{item.citation}}</div>
                </div>
            </span>
        </el-dialog>
    </span>
</template>

<script>
import { compact } from "lodash";

export default {
    props: {
        itemId: String,
        collectionId: String
    },
    computed: {
        item: function() {
            return this.$store.getters.item({
                collectionId: this.collectionId,
                itemId: this.itemId
            });
        },
        speakers: function() {
            let people = this.item.people.map(person => {
                if (this.speakerRolesToDisplay.includes(person.role))
                    return person.name;
            });
            return compact(people);
        }
    },
    data() {
        return {
            speakerRolesToDisplay: [
                "participant",
                "performer",
                "signer",
                "singer",
                "speaker"
            ],
            dialogVisible: false
        };
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
@import "assets/variables.scss";

.style-information-button {
    color: $background-color-dark;
}
</style>

