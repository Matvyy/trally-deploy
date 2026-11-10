import { TaskItem } from "../TaskItem/TaskItem"
import { useTasks } from "../../businessLogicLayer/useTasks"
import style from "./TasksList.module.css"


type Props = {
    onBoardIdChange: (boardId: string | null) => void
    onSelectedTaskIdChange: (id: string | null) => void
    selectedTaskId: string | null
}

export function TasksList({ onBoardIdChange, selectedTaskId, onSelectedTaskIdChange }: Props) {
    const { tasks } = useTasks()


    if (tasks === null) {
        return (
            <>
                <h1>List of Tasks</h1>
                <span>loading....</span>
            </>
        )
    }

    if (tasks.length === 0) {
        return (
            <>
                <h1>List of Tasks</h1>
                <span>no tasks</span>
            </>
        )
    }

    const handleClick = (id: string | null, boardId: string | null) => {
        onSelectedTaskIdChange(id)
        onBoardIdChange(boardId)
    }

    const handleClickReset = () => {
        onSelectedTaskIdChange(null)
    }




    return (
        <div>
            <button onClick={handleClickReset}>reset selection</button>
            <hr />
            <ul className={style.tasks} >
                {tasks.map(task => {

                    return (
                        <TaskItem key={task.id} task={task} onClick={handleClick} isSelected={task.id === selectedTaskId} />
                    )
                })}
            </ul>
        </div>
    )
}


