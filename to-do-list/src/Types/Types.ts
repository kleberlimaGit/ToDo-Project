 export interface List {
    id:string;
    task: string;
    onDeleteTask: (task: string) => void;
    onCountMark : (mark: boolean) => void;
  }
  