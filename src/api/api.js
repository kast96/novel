import axios from "axios";
import { showError } from "../utils/errors";

const instance = axios.create({
    baseURL: '/scenaries/',
});

export const scenaries = {
    getList() {
        return instance.get(`scenaries.json`).then(response => {
            return response.data;
        }).catch(reason => {
            showError(`Ошибка загрузки сценариев\n${reason}`);
        });
    },

    getConfig(id) {
        return instance.get(`${id}/config.json`).then(response => {
            return response.data;
        }).catch(reason => {
            showError(`Ошибка загрузки конигурационного файла сценария ${id}\n${reason}`);
        });
    },

    getResources(id) {
        return instance.get(`${id}/resources.json`).then(response => {
            return response.data;
        }).catch(reason => {
            showError(`Ошибка загрузки файла ресурсов сценария ${id}\n${reason}`);
        });
    },

    getStory(id) {
        return instance.get(`${id}/story.json`).then(response => {
            return response.data;
        }).catch(reason => {
            showError(`Ошибка загрузки файла сценария ${id}\n${reason}`);
        });
    }
}