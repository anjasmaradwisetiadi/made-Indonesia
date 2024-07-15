import axios from "axios";
import {errorHandle, responseMessage} from "./error_handle";

const fakeApiApiKey = import.meta.env.APP_URL_FAKE_API;
const masterDuelApiKey = import.meta.env.APP_URL_MASTER_DUEL_RULER;


export const instanceAxios = axios.create({
    baseURL: masterDuelApiKey,
});

export const instanceAxiosFake = axios.create({
    baseURL: fakeApiApiKey,
});

