import axios from "axios";

const instance = axios.create({
    baseURL: 'scenaries/',
});

export const scenaries = {
    getList() {
        return instance.get(`scenaries.json`).then(response => {
            return response.data;
        });
    },

    getConfig(path) {
        return instance.get(`${path}/config.json`).then(response => {
            return response.data;
        });
    },
}