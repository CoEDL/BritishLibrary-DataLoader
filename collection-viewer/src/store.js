"use strict";

import Vue from "vue";
import Vuex from "vuex";
import { flattenDeep, orderBy, cloneDeep } from "lodash";
Vue.use(Vuex);
import { loadData } from "./data-loader.service";

const configuration = {
    strict: process.env.NODE_ENV !== "production",
    state: {
        disclaimer: true,
        items: [],
        collections: [],
        filters: [],
        selectedFilter: undefined,
        backup: {
            items: [],
            collections: [],
        },
    },
    mutations: {
        reset(state) {
            state = {
                items: [],
                collections: [],
                filters: [],
                selectedFilter: [],
                backup: {
                    items: [],
                    collections: [],
                },
            };
        },
        saveData(state, payload) {
            state.collections = orderBy(payload.collections, "collectionId");
            state.backup.collections = orderBy(
                payload.collections,
                "collectionId"
            );

            // state.items = orderBy(payload.items, ["collectionId", "itemId"]);
            // state.backup.items = orderBy(payload.items, [
            //     "collectionId",
            //     "itemId",
            // ]);
            state.items = { ...payload.items };
            state.backup.items = { ...payload.items };
        },
        setFilters(state, filters) {
            state.filters = [...filters];
        },
        setSelectedFilter(state, selectedFilter) {
            state.selectedFilter = selectedFilter;
            if (selectedFilter) {
                switch (selectedFilter.type) {
                    case "people":
                        state.items = state.backup.items.filter((item) => {
                            return item.people.filter((person) => {
                                return person.name === selectedFilter.value;
                            }).length;
                        });
                        state.collections = state.backup.collections.filter(
                            (collection) => {
                                return collection[selectedFilter.type].filter(
                                    (type) => {
                                        return (
                                            type.name === selectedFilter.value
                                        );
                                    }
                                ).length;
                            }
                        );
                        break;
                    case "title":
                        state.items = state.backup.items.filter(
                            (item) => item.title === selectedFilter.value
                        );
                        state.collections = state.backup.collections.filter(
                            (collection) =>
                                collection.title === selectedFilter.value
                        );
                        break;
                    case "genre":
                        state.items = state.backup.items.filter((item) => {
                            return item.classifications.filter((c) => {
                                return (
                                    c.name === "genre" &&
                                    c.value === selectedFilter.value
                                );
                            }).length;
                        });
                        state.collections = state.backup.collections.filter(
                            (collection) => {
                                return collection.classifications.filter(
                                    (c) => {
                                        return (
                                            c.name === "genre" &&
                                            c.value === selectedFilter.value
                                        );
                                    }
                                ).length;
                            }
                        );
                        break;
                    case "language":
                        state.items = state.backup.items.filter((item) => {
                            return item.languages.includes(
                                selectedFilter.value
                            );
                        });
                        state.collections = state.backup.collections.filter(
                            (collection) => {
                                return collection.languages.includes(
                                    selectedFilter.value
                                );
                            }
                        );
                        break;
                    case "category":
                        state.items = state.backup.items.filter((item) => {
                            return item.categories.includes(
                                selectedFilter.value
                            );
                        });
                        state.collections = state.backup.collections.filter(
                            (collection) => {
                                return collection.categories.includes(
                                    selectedFilter.value
                                );
                            }
                        );
                        break;
                }
                if (state.collections.length) {
                    let collectionIds = state.collections.map(
                        (c) => c.collectionId
                    );
                    state.items = state.backup.items.filter((item) =>
                        collectionIds.includes(item.collectionId)
                    );
                } else if (state.items.length) {
                    let collectionIds = state.items.map(
                        (item) => item.collectionId
                    );
                    state.collections = state.backup.collections.filter((c) =>
                        collectionIds.includes(c.collectionId)
                    );
                }
            } else {
                state.items = [...state.backup.items];
                state.collections = [...state.backup.collections];
            }
        },
        setDisclaimerState(state, payload) {
            state.disclaimer = payload;
        },
    },
    getters: {
        itemsFlattened: (state) => {
            return flattenDeep(
                state.items.map((item) => {
                    let components = [];
                    if (item.images.length) {
                        components.push({
                            ...item.images[0],
                            images: item.images,
                        });
                    }
                    return [...components, ...item.audio, ...item.video];
                })
            );
        },
        item: (state) => ({ collectionId, itemId }) => {
            return state.items.filter((item) => {
                return (
                    item.collectionId === collectionId && item.itemId === itemId
                );
            })[0];
        },
        collectionItems: (state) => ({ collectionId }) => {
            return cloneDeep(state.items[collectionId]);
        },
    },
    actions: {
        async loadData({ commit }) {
            let { items, collections } = await loadData();
            commit("saveData", { items, collections });
        },
    },
};
export const store = new Vuex.Store(configuration);
