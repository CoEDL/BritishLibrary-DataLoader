"use strict";

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { isArray, round } from "lodash";

const state = reset();

export const mutations = {
    setTargetDevice(state, device) {
        state.targetDevice = device;
    },
    setUsbPath(state, path) {
        state.usbMountPoint = path;
    },
    setLocalDataPath(state, path) {
        state.localDataPath = path;
    },
    resetDataPathSelection(state) {
        state.localDataPath = undefined;
    },
    resetUsbDiskSelection(state) {
        state.usbMountPoint = undefined;
    },
    resetMessages(state) {
        state.messages = [];
        state.stopDataLoad = false;
        state.loadProgress = 0;
    },
    setInfoMessage(state, msgs) {
        if (!isArray(msgs)) msgs = [msgs];
        state.messages = [
            ...state.messages,
            ...msgs.map((m) => {
                return { type: "info", msg: m };
            }),
        ];
    },
    setCompleteMessage(state, msgs) {
        if (!isArray(msgs)) msgs = [msgs];
        state.messages = [
            ...state.messages,
            ...msgs.map((m) => {
                return { type: "infoComplete", msg: m };
            }),
        ];
    },
    setErrorMessage(state, msgs) {
        if (!isArray(msgs)) msgs = [msgs];
        state.messages = [
            ...state.messages,
            ...msgs.map((m) => {
                return { type: "error", msg: m };
            }),
        ];
    },
    stopDataLoad(state) {
        state.stopDataLoad = true;
    },
    updateDataLoadProgress(state, payload) {
        state.loadProgress = round((payload.n / payload.total) * 100, 0);
    },
};

export const getters = {};

const configuration = {
    strict: process.env.NODE_ENV !== "production",
    state,
    mutations,
    actions: {},
    getters,
};

export const store = new Vuex.Store(configuration);

function reset() {
    return {
        targetDevice: undefined,
        localDataPath: undefined,
        usbMountPoint: undefined,
        hostname: "catalog.net",
        ssid: "PARADISEC",
        messages: [],
        stopDataLoad: false,
        loadProgress: 0,
    };
}
