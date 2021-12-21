import axios from "axios";
import { showError } from "../utils/errors";

const instance = axios.create({
    baseURL: 'scenaries/',
});

export const scenaries = {
    getList() {
        return instance.get(`scenaries.json`).then(response => {
            return response.data;
        }).catch(reason => {
            showError(`Ошибка загрузки сценариев\n${reason}`);
        });
    },

    getConfig(path) {
        return instance.get(`${path}/config.json`).then(response => {
            return response.data;
        }).catch(reason => {
            showError(`Ошибка загрузки конигурационного файла сценария ${path}\n${reason}`);
        });
    },
}