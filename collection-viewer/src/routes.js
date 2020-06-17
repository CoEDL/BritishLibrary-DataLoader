"use strict";

import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import ShellComponent from "components/Shell.component.vue";
import BadRequestComponent from "components/BadRequest.component.vue";
import ViewImageComponent from "components/ViewImage.component.vue";
import RenderItemListComponent from "components/RenderItemList.component.vue";
import RenderCollectionListComponent from "components/RenderCollectionList.component.vue";
import RenderCollectionItems from "components/RenderCollectionItems.component.vue";
import RenderImageSetComponent from "components/RenderImageSet.component.vue";
import ContentFilterComponent from "components/ContentFilter.component.vue";

export const router = new VueRouter({
    mode: "history",
    base: process.env.NODE_ENV === "testing" ? "/mobile-viewer/" : "/",
    routes: [
        { path: "*", name: "404", component: BadRequestComponent },
        {
            path: "/",
            name: "root",
            component: ShellComponent,
            children: [
                {
                    path: "content-filter",
                    name: "viewContentFilter",
                    component: ContentFilterComponent
                },
                {
                    path: "items",
                    name: "viewItemList",
                    component: RenderItemListComponent
                },
                {
                    path: "collections",
                    name: "viewCollectionList",
                    component: RenderCollectionListComponent
                },
                {
                    path: "collections/:collectionId",
                    name: "viewCollection",
                    component: RenderCollectionItems
                },
                {
                    path: "images/:collectionId/:itemId",
                    name: "images",
                    component: RenderImageSetComponent
                },
                {
                    path: "images/:collectionId/:itemId/:imageName",
                    name: "image",
                    component: ViewImageComponent
                }
            ]
        }
    ]
});
