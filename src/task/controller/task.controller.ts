import { Controller, Route } from 'okapiframework';
import { inject } from 'inversify';

import { TaskRepository } from '../repository/task.repository';

import * as express from 'express';

@Controller('/tasks')
export class TaskController {

    constructor(@inject('TaskRepository') private taskRepository: TaskRepository){

    }

    @Route('/', 'get')
    private getAll(req: express.Request, res: express.Response){

        this.taskRepository.findAll(['content', 'completed'])
            .then((tasks) => {
                res.json(tasks);
            });
    }

    @Route('/:id', 'get')
    private get(req: express.Request, res: express.Response){

        this.taskRepository.findById(parseInt(req.param('id', 1)))
            .then((task) => {
                if(!task){
                    res.status(404);
                    res.json({ 'message': 'Not Found' });

                    return;
                }

                res.json(task);
            });
    }
}
