"use strict";
exports.__esModule = true;
var express = require("express");
var http = require("http");
var socketIO = require("socket.io");
var cors = require("cors");
var bodyParser = require("body-parser");
var FieldActions_1 = require("./FieldActions");
var EasyBot_1 = require("./EasyBot");
var PlayerActions_1 = require("./PlayerActions");
var constants_1 = require("./constants");
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(cors());
app.use(bodyParser.json());
server.listen(3001, function () {
    console.log('node start');
});
io.on('connection', function (socket) {
    console.log(io.sockets);
});
app.post('/singlePlayer', function (req, res) {
    var body = req.body;
    var player = PlayerActions_1.generateSinglePlayer(body);
    var playerId = player.id;
    PlayerActions_1.pendingSinglePlayer[playerId] = player;
    res.send(player);
});
app.post('/multiplayer', function (req, res) {
    var body = req.body;
});
app.post('/move', function (req, res) {
    var _a = req.body, index = _a.index, id = _a.id;
    var field = PlayerActions_1.pendingSinglePlayer[id].field.slice();
    var fieldChangedByPlayer = FieldActions_1.updateField(field, index, exports.PLAYER_NUMS.FIRST_PLAYER).slice();
    var statusGame = FieldActions_1.getStatusGame(field);
    if (statusGame === constants_1.STATUS_GAME.CONTINUE) {
        var botMove = EasyBot_1["default"](fieldChangedByPlayer);
        PlayerActions_1.pendingSinglePlayer[id].field = FieldActions_1.updateField(fieldChangedByPlayer, botMove, exports.PLAYER_NUMS.SECOND_PLAYER).slice();
        var updatedField = PlayerActions_1.pendingSinglePlayer[id].field;
        var statusGame_1 = FieldActions_1.getStatusGame(updatedField);
        res.send({
            field: PlayerActions_1.pendingSinglePlayer[id].field,
            column: botMove,
            statusGame: statusGame_1
        });
    }
    else {
        res.send({
            statusGame: statusGame
        });
    }
});
app.post('/deleteSinglePlayer', function (req, res) {
    var id = req.body.id;
    delete PlayerActions_1.pendingSinglePlayer[id];
    res.send(PlayerActions_1.pendingSinglePlayer);
});
app.post('/playAgainSinglePlayer', function (req, res) {
    var id = req.body.id;
    PlayerActions_1.pendingSinglePlayer[id].field = FieldActions_1.generateField();
    res.send(true);
});
exports.PLAYER_NUMS = Object.freeze({
    FIRST_PLAYER: 1,
    SECOND_PLAYER: 2
});
