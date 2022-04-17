import localforage from "localforage";

export default class LocalForageUtils {
    static elementsValid(...keys) {
        for (let key of keys) {
            if (!LocalForageUtils.elementValid(key)) return false;
        }
        return true;
    }

    static async elementValid(key) {
        return localforage.getItem(key).then((el) => {
            return el !== undefined && el !== null && el !== '';
        });
    }
}