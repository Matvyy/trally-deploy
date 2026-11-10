import { useTaskSelection } from "../../businessLogicLayer/useTaksSelection"
import style from "./TaskDetails.module.css"


type Props = {
    selectedTaskId: string | null 
    boardId: string | null 
}

export function TaskDetails({ selectedTaskId, boardId }: Props) {

    const { selectedTask, selectedBoard} = useTaskSelection(selectedTaskId, boardId)

    return (
        <div className={style.task}>
            <>
                <h3>details</h3>
                {!selectedTask && !selectedTaskId && "Task is not selected"}
                {!selectedTask && selectedTaskId && "loading..."}
                {selectedTask && selectedTask.id !== selectedTaskId && "loading..."}
                {selectedTask && selectedBoard && <>
                    <p>title: {selectedTask.attributes.title}</p>
                    <p>title of board: {selectedBoard.attributes.title}</p>
                    <p>description: {selectedTask.attributes.description === '' ? <>no description</> : selectedTask.attributes.description}</p>
                </>}
            </>
        </div>
    )
}