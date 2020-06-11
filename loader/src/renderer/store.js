"use strict";

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { isArray, round } from "lodash";

const state = reset();

export const mutations = {
    setLocalDataPath(state, path) {
        state.localDataPath = path;
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
        localDataPath: undefined,
        messages: [],
        stopDataLoad: false,
        loadProgress: 0,
    };
}
