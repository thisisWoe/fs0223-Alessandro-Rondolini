"use strict";
/*
export const Q = (selector:string):HTMLElement | null => {
    const element = document.querySelector(selector);
    if (element !== null){
        return document.querySelector(selector)
    } else {
        return null;
    }
};
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallAuth = exports.Call = exports.Qall = exports.Q = void 0;
var Q = function (selector) {
    var element = document.querySelector(selector);
    return element !== null ? element : null;
};
exports.Q = Q;
/*
export const Qall:Function = (selectors:string): NodeListOf<Element> | null => {
    const elements = document.querySelectorAll(selectors);
    if(elements.length > 0 && elements !== null){
        return elements;
    } else {
        return null;
    }
};
*/
var Qall = function (selectors) {
    var elements = document.querySelectorAll(selectors);
    return elements.length ? Array.from(elements) : null;
};
exports.Qall = Qall;
var Call = function (url) {
    return fetch(url)
        .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("Request Error");
        }
    })
        .catch(function (error) {
        console.error(error);
    });
};
exports.Call = Call;
var CallAuth = function (url, auth) {
    return fetch(url, {
        headers: {
            'Authorization': auth,
        },
    })
        .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("Request Error");
        }
    })
        .catch(function (error) {
        console.error(error);
    });
};
exports.CallAuth = CallAuth;
