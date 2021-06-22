export interface Task {
  name: string;
  id: string;
  completed: boolean;
}

export interface List {
  name: string;
  id: string;
  tasks: Task[];
}
