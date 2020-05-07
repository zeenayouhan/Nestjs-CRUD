import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks=['Zeena'];


    getAllTasks(){
        return this.tasks;
    }
}
