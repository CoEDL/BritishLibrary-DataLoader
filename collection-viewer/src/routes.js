"use strict";

import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import BadRequestComponent from "components/BadRequest.component.vue";
import HomeComponent from "components/Home.component.vue";
import BrowseCollectionItemsComponent from "components/BrowseCollectionItems.component.vue";
import MenuComponent from "components/Menu.component.vue";
import AboutComponent from "components/About.component.vue";
import BrowseComponent from "components/Browse.component.vue";
import SearchComponent from "components/Search.component.vue";
import PartnersAndFundersComponent from "components/PartnersAndFunders.component.vue";
import PartnerComponent from "components/Partner.component.vue";
import PartnerBritishLibraryComponent from "components/PartnerBritishLibrary.component.vue";
import PartnerBritishMuseumComponent from "components/PartnerBritishMuseum.component.vue";
import PartnerPNGComponent from "components/PartnerPNG.component.vue";
import PartnerAIATSISComponent from "components/PartnerAIATSIS.component.vue";
import PartnerPARADISECComponent from "components/PartnerPARADISEC.component.vue";
import PartnerVanuatuComponent from "components/PartnerVanuatu.component.vue";
import PartnerSolomonsComponent from "components/PartnerSolomons.component.vue";
import PartnerNewCaledoniaComponent from "components/PartnerNewCaledonia.component.vue";
import PartnerMaaComponent from "./components/PartnerMaa.component.vue";
import HowToComponent from "./components/HowTo.component.vue";

export const router = new VueRouter({
    mode: "history",
    base: process.env.NODE_ENV === "testing" ? "/mobile-viewer/" : "/",
    routes: [
        { path: "*", name: "404", component: BadRequestComponent },
        {
            path: "/",
            name: "home",
            component: HomeComponent,
        },
        {
            path: "/collection/:collectionId",
            props: true,
            component: BrowseCollectionItemsComponent,
        },
        {
            path: "/menu",
            name: "menu",
            component: MenuComponent,
        },
        {
            path: "/about",
            name: "about",
            component: AboutComponent,
        },
        {
            path: "/howto",
            name: "howto",
            component: HowToComponent,
        },
        {
            path: "/browse",
            name: "browse",
            component: BrowseComponent,
        },
        {
            path: "/search",
            name: "search",
            component: SearchComponent,
        },
        {
            path: "/partners",
            name: "partners",
            component: PartnersAndFundersComponent,
        },
        {
            path: "/partner",
            name: "partner",
            component: PartnerComponent,
            children: [
                {
                    path: "british-library",
                    name: "british-library",
                    component: PartnerBritishLibraryComponent,
                },
                {
                    path: "british-museum",
                    name: "british-museum",
                    component: PartnerBritishMuseumComponent,
                },
                {
                    path: "ipngs",
                    name: "ipngs",
                    component: PartnerPNGComponent,
                },
                {
                    path: "aiatsis",
                    name: "aiatsis",
                    component: PartnerAIATSISComponent,
                },
                {
                    path: "paradisec",
                    name: "paradisec",
                    component: PartnerPARADISECComponent,
                },
                {
                    path: "vks",
                    name: "vks",
                    component: PartnerVanuatuComponent,
                },
                {
                    path: "sinm",
                    name: "sinm",
                    component: PartnerSolomonsComponent,
                },
                {
                    path: "tccnc",
                    name: "tccnc",
                    component: PartnerNewCaledoniaComponent,
                },
                {
                    path: "maa",
                    name: "maa",
                    component: PartnerMaaComponent,
                },
            ],
        },
    ],
});
