<template>
    <div class="flex flex-col">
        <div class="flex flex-row space-x-2">
            <div>
                <el-button
                    type="primary"
                    v-on:click="loadTheData"
                    size="small"
                    :disabled="loading"
                >
                    <i
                        class="fas fa-cog"
                        v-bind:class="{ 'fa-spin': loading }"
                    ></i>
                    Load the data
                </el-button>
            </div>
            <!-- <div>
                <el-button type="danger" v-on:click="stopDataLoad">
                    <i
                        class="fas fa-ban"
                        v-bind:class="{ 'fa-spin': loading }"
                    ></i>
                    Stop data load
                </el-button>
            </div> -->
        </div>
        <div class="text-gray-600">
            This will wipe any other content currently on the Disk.
        </div>
        <div class="my-4" v-if="showAlert">
            <div
                class="text-2xl bg-green-400 text-white text-center p-2 rounded"
            >
                Data Loaded
            </div>
        </div>
        <!-- <div>
            <el-progress
                :percentage="loadProgress"
                class="style-progress-bar"
            />
        </div> -->
        <!-- <div>
            <el-checkbox v-model="dataOnly">
                Load only the data - not the website.
            </el-checkbox>
        </div> -->
    </div>
</template>

<script>
import { DataLoader } from "src/services/data-loader-service";

export default {
    data() {
        return {
            doit: false,
            // dataOnly: process.env.NODE_ENV === "development",
            loading: false,
            showAlert: false,
        };
    },
    computed: {
        loadProgress: function() {
            return this.$store.state.loadProgress || 100;
        },
    },
    methods: {
        loadTheData() {
            this.loading = true;
            const params = { ...this.$store.state };
            this.$store.commit("resetMessages");
            setTimeout(async () => {
                const dataloader = new DataLoader({
                    dataPath: this.$store.state.localDataPath,
                });
                await dataloader.load({
                    target: this.$store.state.usbMountPoint,
                    data: this.$store.state.data.data,
                    // dataOnly: this.dataOnly,
                });
                this.loading = false;
                this.showAlert = true;
                setTimeout(() => {
                    this.showAlert = false;
                }, 2000);
            }, 200);
        },
        stopDataLoad() {
            this.$store.commit("stopDataLoad");
            this.loading = false;
        },
    },
};
</script>
