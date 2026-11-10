import { useState, useEffect } from "react"
import { getTasks, type GlobalTaskListItemJsonApiData} from "../dataAccessLayer/api"



export const useTasks = () => {
    const [tasks, setTasks] = useState<Array<GlobalTaskListItemJsonApiData> | null>(null)


    useEffect(() => {
        getTasks().then(json => (setTasks(json.data)))
    }, [])

    return {
        tasks,

    }

}