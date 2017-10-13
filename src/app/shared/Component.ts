export class Component{
    constructor(
        public changelistBuild: string,
        public owner: string,
        public timeStarted: string,
        public state: string,
        public metrics: number,
        public build: boolean,
        public unitTest: boolean,
        public functionalTest: boolean
     ){}
}