<template>
    <div class="style-navbar px-4">
        <div :class="{ 'style-dropdown px-4': showLinks }">
            <div class="row py-2">
                <div class="col">
                    <router-link :to="{ path: '/collections'}">
                        <el-button size="mini">
                            <i class="fas fa-layer-group"></i>
                            <span class="hidden md:inline-block">Browse Collections</span>
                        </el-button>
                    </router-link>
                    <router-link :to="{ path: '/items'}">
                        <el-button size="mini">
                            <i class="fas fa-folder-open"></i>
                            <span class="hidden md:inline-block">Browse All Items</span>
                        </el-button>
                    </router-link>
                    <router-link to="/content-filter" class="float-right">
                        <el-button size="mini">
                            <i class="fas fa-search"></i>
                            <span class="hidden md:inline-block">filter items and collections</span>
                        </el-button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            watchers: {},
            menuItems: {
                contentFilter: true
            },
            showLinks: false
        };
    },
    mounted() {
        this.watchers.filters = this.$watch("$route.path", this.toggleFilter);
        this.toggleFilter();
    },
    beforeDestroy() {
        this.watchers.filters();
    },
    methods: {
        toggleFilter() {
            if (["/collections", "/items"].includes(this.$route.path)) {
                this.menuItems = {
                    contentFilter: true
                };
            } else {
                this.menuItems = {
                    contentFilter: false
                };
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.style-navbar {
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    z-index: 2;
    background-color: #013243;
}

.style-hamburger {
    font-size: 20px;
}

.style-dropdown {
    // margin: 15px;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 120px;
    z-index: 2;
    overflow: hidden;
    background-color: #013243;
    overflow: hidden;
}

.style-dropdown a:hover {
    color: #fff;
}
</style>

