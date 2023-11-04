import { response } from 'express';
import * as todoService from '../services/todo-service.js';

const setErrorResponse = (obj, response) => {
    response.status(500);
    response.json(obj);
}
const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

export const post = async (request, response) => {
    try {
        console.log('Hello post method calling');
        const payload = request.body;
        const todo = await todoService.save(payload);
        console.log(todo);
        setSuccessResponse(todo, response);
    } catch(error) {
        setErrorResponse(error, response);
    }   
}

export const index = async (request, response) => {
    try {
        const title = request.query.title;
        const description = request.query.description;
        const query = {};

        if(title) {
            query.title = title;
        }
        if(description) {
            query.description = description;
        }

        const todo = await todoService.search(query);
        setSuccessResponse(todo, response);

    } catch(error) {
        setErrorResponse(error, response);
    }
}

export const get = async (request, response) => {
    try {
        const id = request.params.id;
        const todo = await todoService.get(id);
        setSuccessResponse(todo, response);
    } catch(error) {
        setErrorResponse(error, response);
    }
}

export const update = async (request, response) => {
    try {
        const id = request.params.id;
        const updated = {...request.body};
        updated.id = id;
        const todo = await todoService.update(updated);
        setSuccessResponse(todo, response);
    } catch(error) {
        setErrorResponse(error, response);
    }
}

export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const todo = await todoService.remove(id);
        setSuccessResponse({message: `Successfully deleted ${id}`}, response);
    } catch(error) {
        setErrorResponse(error, response);
    }
}