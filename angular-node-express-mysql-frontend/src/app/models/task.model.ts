export interface Task {
  id: string,
  description: string,
  createdAt: Date,
  done: boolean,
  userId: string
}


export enum TasksTabs {
  toDo = 'To do',
  done = 'Done'
}
