"use strict";

import { compact, groupBy, reduce, uniq, uniqBy, capitalize, orderBy } from "lodash";

const speakerRolesToDisplay = ["participant", "performer", "signer", "singer", "speaker"];
export async function loadData() {
    try {
        let response = await fetch(mapRepositoryRoot("/repository/index.json"));
        if (response.status !== 200) {
            throw new Error(response);
        }
        let { collections, items } = await response.json();
        return { collections, items };
    } catch (error) {
        console.log(error);
    }

    function postprocess(items) {
        items = items.map((item) => {
            let images = item.images.map((image) => {
                return {
                    itemId: item.itemId,
                    collectionId: item.collectionId,
                    title: item.title,
                    type: "image",
                    item: image,
                    name: image.name.split(".").shift(),
                    people: item.people.map((s) => s.name),
                    categories: item.categories,
                    languages: item.languages,
                    region: item.region,
                    ...reduce(item.classifications),
                };
            });
            images = orderBy(images, "name");
            let audio = groupBy(item.audio, (a) => a.name.split(".").shift());
            let keys = Object.keys(audio);
            item.audio = keys.map((key) => {
                const files = compact(audio[key].map((a) => mapRepositoryRoot(a.path)));
                return {
                    itemId: item.itemId,
                    collectionId: item.collectionId,
                    title: item.title,
                    type: "audio",
                    item: files,
                    name: key,
                    people: item.people.map((s) => s.name),
                    categories: item.categories,
                    languages: item.languages,
                    region: item.region,
                    ...reduce(item.classifications),
                };
            });

            let video = groupBy(item.video, (v) => v.name.split(".").shift());
            keys = Object.keys(video);
            item.video = keys.map((key) => {
                const files = compact(video[key].map((v) => mapRepositoryRoot(v.path)));
                return {
                    itemId: item.itemId,
                    collectionId: item.collectionId,
                    title: item.title,
                    type: "video",
                    item: files,
                    name: key,
                    people: item.people.map((s) => s.name),
                    categories: item.categories,
                    languages: item.languages,
                    region: item.region,
                    ...reduce(item.classifications),
                };
            });
            return {
                ...item,
                images,
            };
        });
        return items;
    }

    function extractFilters({ collections, items }) {
        let filters = [];
        // items = [...collections, ...items];
        let data = { items, collections };
        ["items", "collections"].forEach((d) => {
            data[d].forEach((item) => {
                item.people.forEach((person) => {
                    if (speakerRolesToDisplay.includes(person.role))
                        filters.push({
                            type: "people",
                            value: person.name,
                        });
                });
                item.classifications.forEach((c) => {
                    filters.push({
                        type: c.name,
                        value: c.value,
                    });
                });
                item.languages.forEach((l) => {
                    filters.push({ type: "language", value: l });
                });
                item.categories.forEach((c) => {
                    filters.push({ type: "category", value: c });
                });
                filters.push({
                    type: "title",
                    value: item.title,
                });
            });
        });

        filters = uniqBy(filters, (f) => `${f.name}${f.value}`);
        filters = orderBy(filters, ["name", "value"]);
        const filterTypes = uniq(filters.map((f) => f.type));
        let f = [];
        for (let type of filterTypes) {
            f.push({
                label: capitalize(type),
                options: filters
                    .filter((f) => f.type === type)
                    .map((f) => {
                        return {
                            label: f.value,
                            value: {
                                type: type,
                                value: f.value,
                                label: `${capitalize(f.type)}: ${f.value}`,
                            },
                        };
                    }),
            });
        }
        return f;
    }
}

export function mapRepositoryRoot(path) {
    try {
        const root =
            process.env.NODE_ENV === "testing" ? "/mobile-viewer/repository" : "/repository";
        return path.replace("/repository", root);
    } catch (error) {
        return path;
    }
}
