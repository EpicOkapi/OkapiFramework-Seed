import "reflect-metadata";

import { Server } from 'okapiframework';

import { TaskController } from './task/controller/task.controller';
import { TaskRepository } from './task/repository/task.repository';

import config from './config';

/*
 * Register controllers and services
 */

const server: Server = new Server();

server.registerRepository(TaskRepository);
server.registerController(TaskController);

//Boot it up
server.letsGo(config);
