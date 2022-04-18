<template>
    <div class="bg-cloudburst flex flex-row justify-between p-4">
        <el-button
            type="text"
            v-show="!homePage"
            class="text-white text-xl -mt-2 cursor-pointer mr-2"
            @click="navigate"
        >
            <i class="fas fa-arrow-left"></i>
        </el-button>
        <router-link :to="{ name: 'home' }" class="flex-grow">
            <div class="heading-text heading-text-size text-white">
                True Echoes
            </div>
        </router-link>
        <!-- <router-link :to="{ name: 'search' }">
            <div class="text-white text-2xl"><i class="fas fa-search"></i></div>
        </router-link> -->
        <navbar-language-selector-component />

        <router-link :to="{ name: 'menu' }">
            <div class="text-white text-2xl">
                <i class="fas fa-bars"></i>
            </div>
        </router-link>
    </div>
</template>

<script>
import NavbarLanguageSelectorComponent from "./NavbarLanguageSelector.component.vue";
export default {
    components: {
        NavbarLanguageSelectorComponent,
    },
    data() {
        return {};
    },
    computed: {
        homePage: function() {
            return this.$route.name === "home" ? true : false;
        },
    },
    methods: {
        navigate() {
            this.$router.go(-1);
        },
    },
};
</script>
