import localforage from "localforage";

export default class LocalForageUtils {
    static async elementsValid(...keys) {
        for (let key of keys) {
            if (!await LocalForageUtils.elementValid(key)) return false;
        }
        return true;
    }

    static async elementValid(key) {
        return await localforage.getItem(key).then((el) => {
            return el !== undefined && el !== null && el !== '';
        });
    }
}