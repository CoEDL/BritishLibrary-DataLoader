<template>
    <div class="flex flex-col">
        <div
            class="heading-text page-title-size bg-goldensand py-6 px-2 flex flex-row"
        >
            <div class="">
                Tjibaou Cultural Centre, New Caledonia
            </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
            <div class="font-bold">
                The Tjibaou Cultural Centre’s mission to research, collect,
                enhance and promote the indigenous cultural heritage of New
                Caledonia.
            </div>
            <div class="">
                This includes linguistic and archaeological heritage, as well as
                contemporary forms of cultural expression, such as broadcasting
                and art. The Centre also implements and develops indigenous
                artistic creation and facilitates regional and international
                exchanges. Inaugurated in 1998, the Centre includes an art
                centre, exhibition spaces, and a specialised multimedia library.
            </div>
        </div>
        <!-- <picture>
                <source :srcset="image.png" />
                <source :srcset="image.webp" />
                <img
                    :src="image.png"
                    class="h-32 object-fit mx-auto"
                />
            </picture> -->
    </div>
</template>

<script>
import webp from "src/assets/images/BritishLibrary.webp";
import png from "src/assets/images/BritishLibrary.png";
export default {
    data() {
        return { image: { webp, png } };
    },
};
</script>
