import clsx from "clsx"
import { type GlobalTaskListItemJsonApiData } from "../../dataAccessLayer/api"
import style from "./TaskItem.module.css"

type Props = {
    task: GlobalTaskListItemJsonApiData
    onClick: (id: string | null, boardId: string | null) => void
    isSelected: boolean
}

export function TaskItem({ task, onClick, isSelected }: Props) {

    const handleClick = () => {
        onClick(task.id, task.relationships.board.data.id)
    }
    const onChange = () => { }

    const selectedTaskStyle = clsx({
        [style.task]: true,
        [style.selected]: isSelected
    })

    // const bg = {
    //     'bg-#ffffff': task.attributes.priority === 0,
    //     'bg-#ffd7b5': task.attributes.priority === 1,
    //     'bg-#ffb38a': task.attributes.priority === 2,
    //     'bg-#ff9248': task.attributes.priority === 3,
    //     'bg-#ff6700': task.attributes.priority === 4
    // }



    const titleThatIsDone = clsx({
        [style.title]: true,
        [style.isDone]: task.attributes.status === 2
    })



    return (
        <li onClick={handleClick} className={selectedTaskStyle} >
            <div>
                <div className={titleThatIsDone} >Heading: {task.attributes.title}</div>
            </div>

            <div>Status

                <input type="checkbox" checked={task.attributes.status === 2} onChange={onChange} />
            </div>
            <div>Date of task adding: {new Date(task.attributes.addedAt).toLocaleDateString()} </div>
        </li>
    )
}