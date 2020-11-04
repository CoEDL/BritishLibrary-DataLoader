"use strict";

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { isArray, round } from "lodash";
import { DataLoader } from "src/services/data-loader-service";

const state = reset();

export const mutations = {
    setLocalDataPath(state, path) {
        state.localDataPath = path;
    },
    setUsbMountPoint(state, path) {
        state.usbMountPoint = path;
    },
    saveData(state, payload) {
        state.data = { ...payload };
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

export const actions = {
    async loadData({ commit, state }) {
        const dataLoader = new DataLoader({
            dataPath: state.localDataPath,
        });
        let data = {};
        let errors = [];
        try {
            data = await dataLoader.import();
        } catch (error) {
            console.log(error);
            errors.push(error.message);
        }
        commit("saveData", { data, errors });
    },
};

const configuration = {
    strict: process.env.NODE_ENV !== "production",
    state,
    mutations,
    actions,
    getters,
};

export const store = new Vuex.Store(configuration);

function reset() {
    return {
        localDataPath: undefined,
        usbMountPoint: undefined,
        data: {
            errors: [],
        },
        messages: [],
        stopDataLoad: false,
        loadProgress: 0,
    };
}
