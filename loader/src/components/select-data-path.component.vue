<template>
    <div class="flex flex-row">
        <div class="w-32 font-light text-gray-800 pt-1">Data Path</div>
        <div class="flex flex-col" v-if="!dataPath">
            <div>
                <el-button type="primary" v-on:click="open" size="small">
                    <i class="fas fa-folder-open"></i>
                    Select data folder
                </el-button>
            </div>
            <p class="text-gray-600 font-light">
                Please specify the folder that contains the data you wish to
                load onto the device.
            </p>
        </div>
        <span v-if="dataPath" class="flex flex-row">
            <div class="pt-1">
                {{ dataPath }}
            </div>
            <span class="px-4">
                <el-button type="danger" v-on:click="reset" circle size="mini">
                    <i class="fas fa-times fa-fw"></i>
                </el-button>
            </span>
        </span>
    </div>
</template>

<script>
const { dialog } = require("electron").remote;

export default {
    data() {
        return {};
    },
    computed: {
        dataPath() {
            return this.$store.state.localDataPath;
        },
    },
    methods: {
        async open() {
            this.folder = await dialog.showOpenDialog({
                properties: ["openDirectory"],
            });
            if (!this.folder.canceled && this.folder.filePaths) {
                this.$store.commit(
                    "setLocalDataPath",
                    this.folder.filePaths[0]
                );
                this.$store.dispatch("loadData");
            }
        },
        reset() {
            this.$store.commit("setLocalDataPath", undefined);
        },
    },
};
</script>

<style scoped></style>
