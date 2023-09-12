"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexLogin = exports.indexAbout = exports.indexTienda = exports.entrar = exports.login = exports.helloWorld = void 0;
const api_controller_1 = require("./api.controller");
async function helloWorld(req, res) {
    try {
        const apiData = await (0, api_controller_1.api)(); // Espera a que la promesa se resuelva y obtén los datos
        console.log(apiData); // Asegúrate de que los datos se impriman correctamente en la consola
        res.render('welcome', { apiData: apiData }); // Pasa apiData.results a la plantilla
    }
    catch (error) {
        // Maneja cualquier error que pueda ocurrir en la función api()
        console.error('Hubo un error:', error);
    }
}
exports.helloWorld = helloWorld;
async function login(req, res) {
    res.render("login");
}
exports.login = login;
async function entrar(req, res) {
    res.render("entrar");
}
exports.entrar = entrar;
function indexTienda(req, res) {
    res.json('Welcome to my store');
}
exports.indexTienda = indexTienda;
function indexAbout(req, res) {
    res.json('Welcome to my about');
}
exports.indexAbout = indexAbout;
function indexLogin(req, res) {
    res.json('Welcome to my login');
}
exports.indexLogin = indexLogin;
