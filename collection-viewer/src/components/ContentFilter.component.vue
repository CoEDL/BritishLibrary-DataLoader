<template>
    <div class="flex flex-col align-content items-center">
        <div
            class="text-lg my-4"
        >Apply one of the filters below to limit the collections and items shown.</div>
        <div v-for="(group, grpIdx) in filters" :key="grpIdx" class="mb-2">
            <div class="flex flex-col md:flex-row">
                <div class="w-screen px-4 md:w-40 px-0">{{groupLabel(group)}}</div>
                <el-select
                    v-model="selectedFilter"
                    :placeholder="groupLabel(group)"
                    class="w-screen px-4 md:w-64"
                    :clearable="!smallDevice"
                    :filterable="!smallDevice"
                >
                    <el-option
                        v-for="item in group.options"
                        :key="item.label"
                        :label="item.value.label"
                        :value="item.value"
                        :value-key="item.value.value"
                    >
                        <div class="w-48" v-if="smallDevice">{{ item.label }}</div>
                        <div v-else>{{ item.label }}</div>
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="my-2 flex flex-col md:flex-row">
            <router-link :to="{ path: '/collections'}">
                <el-button class="my-1 md:mx-2 w-64 md:w-auto">
                    <i class="fas fa-layer-group"></i>
                    Browse Collections
                </el-button>
            </router-link>
            <router-link :to="{ path: '/items'}">
                <el-button class="my-1 md:mx-2 w-64 md:w-auto">
                    <i class="fas fa-folder-open"></i>
                    Browse items
                </el-button>
            </router-link>
            <el-button
                @click="resetFilter"
                :disabled="!selectedFilter"
                class="my-1 md:mx-2 w-64 md:w-auto"
            >
                <i class="fas fa-ban"></i>&nbsp;clear-filter
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        filters: function() {
            return this.$store.state.filters;
        },
        selectedFilter: {
            get: function() {
                return this.$store.state.selectedFilter;
            },
            set: function(value) {
                this.$store.commit("setSelectedFilter", value || undefined);
            }
        },
        smallDevice: function() {
            return window.innerWidth < 700 ? true : false;
        }
    },
    methods: {
        groupLabel: function(group) {
            return `Filter by ${group.label}`;
        },
        handleSelection(item) {
            this.$store.commit("setSelectedFilter", item || undefined);
            this.dialogVisible = false;
        },
        resetFilter() {
            this.$store.commit("setSelectedFilter", undefined);
        }
    }
};
</script>

<style lang="scss" scoped>
.style-selections {
    cursor: pointer;
}
</style>
