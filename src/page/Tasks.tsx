import TaskCard from "../component/TaskCard";
import {Task, tasks} from "../data/init-data";
import {useEffect, useState} from "react";
import TasksList from "../component/TasksList";

interface Props {
}

const Tasks=({}:Props)=>{

    const[taskList,setTaskList]=useState<Array<Task>>([]);

    const baseURL=import.meta.env.VITE_BACKEND_URL;

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const result = await (fetch(`${baseURL}/task/tasks`));

        const data = await result.json() as Array<Task>;
        console.log(data);

       const transfered = data.map(t =>{
           const {creationDate,updateDate,...rest}=t;

            return{
                creationDate:new Date(creationDate),
               // updateDate:new Date(updateDate),
                ...rest
            } as Task;
        });
        setTaskList(transfered);
    }
        return <TasksList tasks={taskList} />
};

export default Tasks;