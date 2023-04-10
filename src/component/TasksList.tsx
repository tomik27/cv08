import {useEffect, useState} from "react";
import {Task, tasks} from "../data/init-data";
import TaskCard from "./TaskCard";
interface Props{
    tasks:Array<Task>
}
const TasksList =({tasks}:Props)=>{

    const[taskList,setTaskList] = useState<Array<Task>>(tasks)

    useEffect(()=>{
        setTaskList(tasks);
    },[tasks]) //pri zmene parametru se zmeni

    const taskDoneHandle=(task:Task) =>{
        //aktualizovat pole s novyma promenyma
        //...taskList vezme vsechny prvky pole a dosadi je jako argumenty
        setTaskList([...taskList,task]);
        console.log("Changing state of reactive variable")
    }


    return  <section>
        <h1>Aktualni tasky</h1>
        {taskList.filter(t=> !t.done).map(t=>
            <TaskCard key={t.id} task={t} onTaskDone={taskDoneHandle}/>
        )}

        <h1>Splněné tasky</h1>
        {taskList.filter(t=> t.done).map(t=>
            <TaskCard key={t.id} task={t} onTaskDone={taskDoneHandle}/>
        )}
        </section>
}

export default TasksList;