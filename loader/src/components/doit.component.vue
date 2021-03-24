<template>
    <div class="flex flex-col">
        <div class="flex flex-row space-x-2">
            <div>
                <el-button type="primary" v-on:click="loadTheData" size="small" :disabled="loading">
                    <i class="fas fa-cog" v-bind:class="{ 'fa-spin': loading }"></i>
                    Load the data
                </el-button>
            </div>
        </div>
        <div class="text-gray-600">
            This will wipe any other content currently on the Disk.
        </div>
        <div class="my-4" v-if="showSuccess">
            <div class="text-2xl bg-green-400 text-white text-center p-2 rounded">
                Data Loaded
            </div>
        </div>
        <div class="my-4" v-if="showError">
            <div class="text-2xl bg-red-400 text-white text-center p-2 rounded">
                There was an problem loading the data.
            </div>
        </div>
    </div>
</template>

<script>
import { DataLoader } from "src/services/data-loader-service";

export default {
    data() {
        return {
            doit: false,
            loading: false,
            showSuccess: false,
            showError: false,
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
                    commit: this.$store.commit,
                });
                try {
                    await dataloader.load({
                        target: this.$store.state.usbMountPoint,
                        data: this.$store.state.data.data,
                        // dataOnly: this.dataOnly,
                    });
                    this.showSuccess = true;
                    setTimeout(() => {
                        this.showSuccess = false;
                    }, 2000);
                } catch (error) {
                    this.showError = true;
                    setTimeout(() => {
                        this.showError = false;
                    }, 2000);
                    console.log(error);
                }
                this.loading = false;
            }, 200);
        },
        stopDataLoad() {
            this.$store.commit("stopDataLoad");
            this.loading = false;
        },
    },
};
</script>
