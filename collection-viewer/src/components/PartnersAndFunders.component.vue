<template>
    <div class="flex flex-col">
        <div class="heading-text page-title-size bg-golden-sand py-6 px-2">
            Partners and funders
        </div>
        <div class="mt-6 m-2 lg:mx-6 lg:text-2xl">
            The True Echoes project works with cultural and research
            institutions in the Oceanic region and in the UK.
        </div>
        <div class="m-2 lg:mx-6 lg:text-2xl">
            <div class="font-bold">Partners include:</div>
            <ul class="pl-8 list-disc">
                <li>
                    <router-link to="/partner/british-library">
                        The British Library
                    </router-link>
                </li>
                <li>
                    <router-link to="/partner/ipngs">
                        Institute of Papua New Guinea Studies
                    </router-link>
                </li>
                <li>
                    <router-link to="/partner/aiatsis">
                        AIATSIS [Australian Institute of Aboriginal and Torres
                        Strait Islander Studies]
                    </router-link>
                </li>
                <li>
                    <router-link to="/partner/vks">
                        Vanuatu Kaljoral Senta • Solomon Islands Archives and Museum
                    </router-link>
                </li>
                <li>
                    <router-link to="/partner/sinm">
                        Solomon Islands Archives and Museum
                    </router-link>
                </li>
                <li>
                    <router-link to="/partner/tccnc">
                        Tjibaou Cultural Centre, New Caledonia
                    </router-link>
                </li>
                <li>
                    <router-link to="/partner/paradisec">
                        PARADISEC [Pacific and Regional Archive for Digital Sources
                        in Endangered Cultures, Australia]
                    </router-link>
                </li>
                <li>
                    Cambridge Museum of Archaeology and Anthropology • British
                    Museum
                </li>
                <li>
                    British Museum
                </li>
            </ul>
        </div>
        <div class="mt-6 m-2 lg:mx-6 lg:text-2xl">
            <div class="heading-text page-title-size">Funders</div>
            <div>
                True Echoes is funded by the Leverhulme Trust and the UK
                Government's Department for Business, Energy and Industrial
                Strategy.
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4 md:px-4">
                <div class="w-full md:w-1/2">
                    <img :src="leverhulmeTrust" class="object-fit" />
                </div>
                <div class="w-full md:w-1/2 md:pt-6">
                    <img :src="fundedByUkGov" class="object-fit" />
                </div>
            </div>
        </div>
    </div>
</template>

                    Institute of Papua New Guinea Studies</li>
                <li>
                    AIATSIS [Australian Institute of Aboriginal and Torres
                    Strait Islander Studies]
                </li>
                <li>
                    Vanuatu Kaljoral Senta • Solomon Islands Archives and Museum
                </li>
                <li>Tjibaou Cultural Centre, New Caledonia</li>
                <li>
                    PARADISEC [Pacific and Regional Archive for Digital Sources
                    in Endangered Cultures, Australia]
                </li>
                <li>
                    Cambridge Museum of Archaeology and Anthropology • British
                    Museum
                </li>
            </ul>
        </div>
        <div class="mt-6 m-2 lg:mx-6 lg:text-2xl">
            <div class="heading-text page-title-size">Funders</div>
            <div>
                True Echoes is funded by the Leverhulme Trust and the UK
                Government's Department for Business, Energy and Industrial
                Strategy.
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4 md:px-4">
                <div class="w-full md:w-1/2">
                    <img :src="leverhulmeTrust" class="object-fit" />
                </div>
                <div class="w-full md:w-1/2 md:pt-6">
                    <img :src="fundedByUkGov" class="object-fit" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import leverhulmeTrust from "src/assets/images/Leverhulme_Trust_RGB_blue.webp";
import fundedByUkGov from "src/assets/images/Funded-by-UK-Gov.webp";

export default {
    data() {
        return {
            leverhulmeTrust,
            fundedByUkGov,
        };
    },
};
</script>
