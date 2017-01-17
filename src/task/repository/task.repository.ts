import { Repository, DatabaseManager } from 'okapiframework';
import { inject } from 'inversify';

import { Task } from '../entity/task';

export class TaskRepository extends Repository<Task> {

    constructor(@inject('DatabaseManager') databaseManager: DatabaseManager){
        super(databaseManager);

        this.tableName = 'tasks';
    }
}
