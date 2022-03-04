const inicio_control = require("./../control/controlinicio");

function adicionar(app){

    app.get("/", inicio_control.inicio);

    //saludar
    app.get("/saludo", inicio_control.saludo);

}

module.exports = {
    adicionar
}