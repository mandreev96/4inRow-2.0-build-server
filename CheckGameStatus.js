"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
function default_1(field) {
    var HORIZONTAL = field.length;
    var VERTICAL = field[0].length;
    var FIRST_PLAYER = 1;
    var SECOND_PLAYER = 2;
    var DEFAULT_CELL = 0;
    var WIN = 4;
    var firstPlayer = 0;
    var secondPlayer = 0;
    function clearPoints() {
        firstPlayer = 0;
        secondPlayer = 0;
    }
    function increasePoints(cell) {
        if (cell === FIRST_PLAYER) {
            firstPlayer += 1;
            secondPlayer = 0;
        }
        else if (cell === SECOND_PLAYER) {
            secondPlayer += 1;
            firstPlayer = 0;
        }
        else {
            clearPoints();
        }
    }
    function checkResult() {
        if (firstPlayer === WIN)
            return constants_1.STATUS_GAME.WIN_FIRST_PLAYER;
        if (secondPlayer === WIN)
            return constants_1.STATUS_GAME.WIN_SECOND_PLAYER;
    }
    function vertical() {
        for (var _i = 0, field_1 = field; _i < field_1.length; _i++) {
            var column = field_1[_i];
            clearPoints();
            for (var _a = 0, column_1 = column; _a < column_1.length; _a++) {
                var cell = column_1[_a];
                increasePoints(cell);
                if (checkResult())
                    return checkResult();
            }
        }
    }
    if (vertical())
        return vertical();
    function horizontal() {
        for (var j = 0; j < VERTICAL; j++) {
            clearPoints();
            for (var i = 0; i < HORIZONTAL; i++) {
                var cell = field[i][j];
                increasePoints(cell);
                if (checkResult())
                    return checkResult();
            }
        }
    }
    if (horizontal())
        return horizontal();
    function diagonalLeftToRight() {
        for (var i = 0; i <= HORIZONTAL - WIN; i++) {
            for (var j = 0; j <= VERTICAL - WIN; j++) {
                clearPoints();
                var cell = field[i][j];
                if (cell !== DEFAULT_CELL) {
                    for (var k = 0; k < WIN; k++) {
                        var cell_1 = field[i + k][j + k];
                        increasePoints(cell_1);
                        if (checkResult())
                            return checkResult();
                    }
                }
            }
        }
    }
    if (diagonalLeftToRight())
        return diagonalLeftToRight();
    function diagonalRightToLeft() {
        for (var i = WIN - 1; i < HORIZONTAL; i++) {
            for (var j = 0; j <= VERTICAL - WIN; j++) {
                clearPoints();
                var cell = field[i][j];
                if (cell !== DEFAULT_CELL) {
                    for (var k = 0; k < WIN; k++) {
                        var cell_2 = field[i - k][j + k];
                        increasePoints(cell_2);
                        if (checkResult())
                            return checkResult();
                    }
                }
            }
        }
    }
    if (diagonalRightToLeft())
        return diagonalRightToLeft();
    return constants_1.STATUS_GAME.CONTINUE;
}
exports["default"] = default_1;
