import { Request, Response } from 'express';
import CreateCouseService from './CreateCouseService';

export function CreateCourse(request: Request, response: Response) {
    CreateCouseService.execute({
        name: 'Typescript',
        // duration: 10, 
        educator: 'Octávio',
    });

    CreateCouseService.execute({
        name: 'React',
        duration: 10, 
        educator: 'Pedro',
    });
    return response.send();
}