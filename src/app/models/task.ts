export interface Task {
    id: string,
    content: string,
    completed: boolean,
    priority: number,
    dateString: string,
    due: string,
    repeating: boolean,
    age: number
}
