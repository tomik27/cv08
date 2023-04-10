import {Task} from "../data/init-data";

interface Props{
    task: Task
    //definuje typ funkce onTaskDone, která přijímá objekt typu Task jako argument a nevrací žádnou hodnotu
    onTaskDone: (task:Task)=> void
}

const TaskCard = ({task,onTaskDone}:Props)=>{
    const doneClickHandle = (e:React.ChangeEvent<HTMLInputElement>) =>{
        task.done = e.target.checked;
        onTaskDone(task);
        console.table(task);
    }

    return <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>{task.creationDate.toISOString()}</p>
        <p>{task.updateDate?.toISOString()}</p>
        <br />
        <label>Splněno</label>
        <input type="checkbox" checked={task.done} name="done" onChange={doneClickHandle} />

    </div>
}

export default TaskCard;