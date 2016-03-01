'use strict';

import * as ws from "ws";
import { Server } from "http";
import { info } from "winston";

export class ChatServer {

    private _wsServer: ws.Server;

    constructor(httpServer: Server) {

        this._wsServer = new ws.Server({server: httpServer});

        this._wsServer.on('connection', function (ws) {

            info('Receive a new connection');
        });
    }
}