"use strict";

import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import ShellComponent from "components/shell.component.vue";
export const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "shell",
            component: ShellComponent,
        },
    ],
});
