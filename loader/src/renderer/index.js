"use strict";

import "core-js/stable";
import "regenerator-runtime/runtime";
import "source-map-support/register";

import "assets/tailwind.scss";
import "element-ui/lib/theme-chalk/index.css";
import "assets/main.css";

import fontawesome from "@fortawesome/fontawesome-free/js/all";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoReplaceSvg = "nest";

import Vue from "vue";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
Vue.use(ElementUI, { locale });

import App from "components/app";
import { router } from "./routes";
import { store } from "./store";

App.router = router;
App.store = store;
new Vue(App);
