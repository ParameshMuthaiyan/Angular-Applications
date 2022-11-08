export class Todo {
    subscribe(arg0: (res: any) => void) {
      throw new Error('Method not implemented.');
    }
    constructor(
        public id: number,
        public title: string,
        public salution: string,
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public phone: string,
        public email: string
    ) { }
}