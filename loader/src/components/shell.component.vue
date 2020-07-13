<template>
    <div class="flex flex-col p-4 space-y-4">
        <div
            class="p-8 text-xl text-gray-800 font-light bg-yellow-200 rounded-lg"
        >
            <div>
                This application will prepare a folder of content for loading
                onto a RaspberryPi USB Disk plugged in to this computer.
            </div>
            <div class="mt-2">
                The folder you choose requires a particular structure. The
                loader will check that it exists and report any issues it
                discovers.
            </div>
            <div class="mt-2 text-base">
                <ul class="ml-8 list-decimal">
                    <li>
                        There must be a file named
                        <span class="text-orange-700">metadata.xlsx</span>
                        in the root of the folder.
                    </li>
                    <li>
                        There must be a folder for each collection defined in
                        the metadata spreadsheet.
                    </li>
                    <li>
                        Data files are expected to be found within their
                        respective collection folders and must be named exactly
                        as they are in the spreadsheet.
                    </li>
                </ul>
            </div>
        </div>
        <div class="space-y-8">
            <select-data-path-component />
            <select-usb-mount-point-component v-if="!errors.length" />
            <do-it-component v-if="!errors.length" />
            <div
                class="bg-red-200 p-6 text-gray-700 rounded text-center"
                v-if="errors.length"
            >
                {{ errors[0] }}
            </div>
        </div>
        <!-- <logger-component v-if="messages.length"/> -->
    </div>
</template>

<script>
import SelectDataPathComponent from "./select-data-path.component.vue";
import SelectUsbMountPointComponent from "./select-usb-component.vue";
import DoItComponent from "./doit.component.vue";
// import LoggerComponent from "./logger/logger.component.vue";

export default {
    components: {
        SelectDataPathComponent,
        SelectUsbMountPointComponent,
        DoItComponent,
        // LoggerComponent
    },
    data() {
        return {};
    },
    computed: {
        errors: function() {
            return this.$store.state.data.errors;
        },
        messages: function() {
            return this.$store.state.messages;
        },
    },
};
</script>

<style lang="scss" scoped></style>
