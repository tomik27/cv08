import TaskCard from "../component/TaskCard";
import {Task, tasks} from "../data/init-data";
import {useState} from "react";

const Tasks=()=>{

    const[taskList,setTaskList] = useState<Array<Task>>(tasks)

    const taskDoneHandle=(task:Task) =>{
        //aktualizovat podle s novyma promenyma
        //...taskList vezme vsechny prvky pole a dosadi je jako argumenty
        setTaskList([...taskList]);
        console.log("Changing state of reactive variable")
    }

    return <div>
        <h1>Aktualni tasky</h1>
        {taskList.filter(t=> !t.done).map(t=>
            <TaskCard key={t.id} task={t} onTaskDone={taskDoneHandle}/>
        )}

        <h1>Splněné tasky</h1>
        {taskList.filter(t=> t.done).map(t=>
            <TaskCard key={t.id} task={t} onTaskDone={taskDoneHandle}/>
        )}
    </div>
};

export default Tasks;