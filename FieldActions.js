"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var CheckGameStatus_js_1 = require("./CheckGameStatus.js");
function updateField(field, index, player) {
    var updatedField = field.slice();
    var lastIndex = updatedField[index].lastIndexOf(0);
    updatedField[index][lastIndex] = (player === index_1.PLAYER_NUMS.FIRST_PLAYER) ?
        index_1.PLAYER_NUMS.FIRST_PLAYER : index_1.PLAYER_NUMS.SECOND_PLAYER;
    return updatedField;
}
exports.updateField = updateField;
function generateField() {
    var field = [];
    for (var i = 0; i < 7; i++) {
        field.push([]);
        for (var j = 0; j < 6; j++) {
            field[i].push(0);
        }
    }
    return field;
}
exports.generateField = generateField;
function getStatusGame(field) {
    return CheckGameStatus_js_1["default"](field);
}
exports.getStatusGame = getStatusGame;
