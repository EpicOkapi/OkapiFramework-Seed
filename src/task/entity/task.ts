import { Entity } from 'okapiframework';

export interface Task extends Entity {
    content: string;
    completed: boolean;
}
