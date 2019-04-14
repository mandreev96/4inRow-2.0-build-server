"use strict";
exports.__esModule = true;
var FieldActions_1 = require("./FieldActions");
exports.pendingSinglePlayer = {};
exports.pendingMultyPlayer = [];
function generateSinglePlayer(body) {
    return {
        name: body.name,
        color: body.color,
        difficulty: body.difficulty,
        id: generateID(),
        field: FieldActions_1.generateField()
    };
}
exports.generateSinglePlayer = generateSinglePlayer;
function generateID() {
    return "f" + (+new Date).toString(Math.floor(Math.random() * (16 - 9)) + 9);
}
