<template>
    <div>
        <el-form ref="form" :model="form" label-width="200px">
            <el-form-item label="Data Path">
                <span v-if="!dataPath">
                    <select-folder-component name="setLocalDataPath"></select-folder-component>
                    <p
                        class="text-muted"
                    >Please specify the folder that contains the data you wish to load onto the device.</p>
                </span>
                <span v-if="dataPath">
                    {{dataPath}}
                    <span class="px-4">
                        <el-button type="danger" v-on:click="reset" circle size="mini">
                            <i class="fas fa-times fa-fw"></i>
                        </el-button>
                    </span>
                </span>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import SelectFolderComponent from "./select-folder.component.vue";
export default {
    data() {
        return {
            form: {}
        };
    },
    computed: {
        dataPath() {
            return this.$store.state.localDataPath;
        }
    },
    components: {
        SelectFolderComponent
    },
    methods: {
        reset() {
            this.$store.commit("resetDataPathSelection");
        }
    }
};
</script>

<style scoped>
</style>
