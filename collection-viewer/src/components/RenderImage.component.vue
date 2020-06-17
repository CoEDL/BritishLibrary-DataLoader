<template>
    <div>
        <div class="row">
            <div class="col text-center">{{image.name}}</div>
        </div>
        <div class="row my-2">
            <div class="col text-center">
                <router-link :to="to" class="flex flex-row justify-around">
                    <!-- <span v-if="image.item.thumbnail">
                        <img :src="image.item.thumbnail" class="style-image">
                    </span>-->
                    <!-- <span v-if="!image.item.thumbnail"> -->
                    <img :src="image.item.path" class="style-image" />
                    <!-- </span> -->
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: Object
    },
    data() {
        return {
            to: {}
        };
    },
    mounted() {
        this.to = {
            path: `/images/${this.image.collectionId}/${this.image.itemId}`
        };
    }
};
</script>

<style lang="scss" scoped>
.style-image-placeholder {
    font-size: 10em;
}

.style-image {
    max-height: 150px;
}
</style>



