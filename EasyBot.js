"use strict";
exports.__esModule = true;
function default_1(field) {
    var moves = [];
    for (var i = 0; i < field.length; i++) {
        var column = field[i];
        if (column.lastIndexOf(0) !== -1) {
            moves.push(i);
        }
    }
    return moves[randomMove(moves)];
}
exports["default"] = default_1;
function randomMove(moves) {
    var rand = Math.random() * (moves.length);
    rand = Math.floor(rand);
    return rand;
}
