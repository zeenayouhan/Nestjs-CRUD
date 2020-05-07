import { Controller, Get, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

        @Get()
        getAllTasks(){
            this.tasksService.getAllTasks();

        }

    }

