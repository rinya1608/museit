import LocalForageUtils from "../utils/LocalForageUtils";
import localforage from "localforage";

export default class AuthService{
    static async login(email, password){
        return fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(r => {
            if (r.ok) {
                console.log(r)
                return r.json();
            } else {
                // const obj = (r.json() as any);
                throw "Error auth";
            }
        }).catch(r => (alert(r), null));
    }

    static async register(email, name, password, confirmPassword){
        return fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                name: name,
                password: password,
                confirmPassword: confirmPassword
            })
        }).then(r => {
            if (r.ok) {
                console.log(r)
                return r.json();
            } else {
                // const obj = (r.json() as any);
                throw "Error auth";
            }
        }).catch(r => (alert(r), null));
    }

    static async getCurrentUser() {
        if (await LocalForageUtils.elementValid("token")) {
            return fetch('/api/auth/currentuser', {
                headers: {
                    "Authorization": "Bearer " + await localforage.getItem("token")
                }
            }).then(r => {
                if (!r.ok) {
                    throw new Error("Not authorized");
                }
                return r.json();
            })
        }
    }

    static async logout() {
        localforage.removeItem("token")
        localforage.removeItem("refreshToken")
        localforage.removeItem("user")
    }

    static async refreshToken() {
        return fetch(`/api/auth/refreshtoken`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + await localforage.getItem("token")
            },
            body: `{"tokenRefresh": "${localStorage.getItem("refreshToken")}"}`
        }).then(r => {
            if (!r.ok) {
                throw new Error("Not authorized");
            }
            return r.json();
        })
    }

}