<template>
    <div class="flex flex-col p-4 space-y-4">
        <div
            class="p-8 text-xl text-gray-800 font-light bg-yellow-200 rounded-lg"
        >
            <p>
                This application will prepare a folder of content for loading
                onto a RaspberryPi USB Disk plugged in to this computer.
            </p>
            <p class="mt-2">
                The folder you choose requires a particular structure and the
                loader will check that it exists and report any issues it
                discovers: 
            </p>
            <p class="mt-2 text-base">
                <ul class="ml-8 list-decimal">
                    <li>There must be a file named <span class="text-orange-700">metadata.xlsx</span>
                    in the root of the folder.
                    </li>
                    <li>There must be a folder for each collection defined in the 
                        metadata spreadsheet.
                    </li>
                    <li>Within each collection folder there must be a folder for each 
                        item such that the collection folder name and item folder name 
                        can be used to create the Shelfmark.
                    </li>
                </ul>
            </p>
        </div>
        <select-data-path-component />
        <!-- <select-usb-component/> -->
        <!-- <do-it-component/> -->
        <!-- <logger-component v-if="messages.length"/> -->
    </div>
</template>

<script>
import SelectDataPathComponent from "./select-data-path.component.vue";
// import SelectUsbComponent from "./select-usb.component.vue";
// import DoItComponent from "./doit.component.vue";
// import LoggerComponent from "./logger/logger.component.vue";

export default {
    components: {
        SelectDataPathComponent,
        // SelectUsbComponent,
        // DoItComponent,
        // LoggerComponent
    },
    data() {
        return {};
    },
    computed: {
        messages: function() {
            return this.$store.state.messages;
        },
    },
};
</script>

<style lang="scss" scoped></style>
