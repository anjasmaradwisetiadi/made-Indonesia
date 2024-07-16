import axios from "axios";

const fakeApiApiKey = process.env.APP_URL_FAKE_API;
const masterDuelApiKey = process.env.APP_URL_MASTER_DUEL_RULER;

export const instanceAxios = axios.create({
    baseURL: masterDuelApiKey,
});

export const instanceAxiosFake = axios.create({
    baseURL: fakeApiApiKey,
});

