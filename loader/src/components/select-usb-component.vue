<template>
    <div class="flex flex-row">
        <div class="w-32 font-light text-gray-800 pt-1">USB Mount Point</div>
        <div class="flex flex-col" v-if="!usbMountPoint">
            <div>
                <el-button type="primary" v-on:click="open" size="small">
                    <i class="fas fa-folder-open"></i>
                    Select USB Disk
                </el-button>
            </div>
            <p class="text-gray-600 font-light">
                Please select the USB disk that will be plugged in to the
                RaspberryPi.
            </p>
        </div>
        <span v-if="usbMountPoint">
            {{ usbMountPoint }}
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
        usbMountPoint() {
            return this.$store.state.usbMountPoint;
        },
    },
    methods: {
        async open() {
            this.folder = await dialog.showOpenDialog({
                properties: ["openDirectory"],
            });
            if (!this.folder.canceled && this.folder.filePaths) {
                this.$store.commit(
                    "setUsbMountPoint",
                    this.folder.filePaths[0]
                );
            }
        },
        reset() {
            this.$store.commit("setUsbMountPoint", undefined);
        },
    },
};
</script>

<style scoped></style>
