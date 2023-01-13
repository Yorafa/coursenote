import axios from 'axios';

export const fileClient = axios.create({
    baseURL: '../content/',
    timeout: 100000
});

export const getCourses = async () => {
    return await fileClient.get("/courses.json");
};

export const getCourseDetail = async (id) => {
    return await fileClient.get(`/${id}/${id}.json`);
};

export const getCourseContent = async (id, fileName) => {
    return await fileClient.get(`/${id}/${fileName}.md`);
};