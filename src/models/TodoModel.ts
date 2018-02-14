export default class TodoModel {
    public id = Number(new Date()) + Math.floor(Math.random() * 1e10);

    constructor(
        public description: string,
        public completed: boolean = false,
    ){

    }
}

