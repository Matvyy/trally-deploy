import { useState, useEffect } from "react"
import { getTrack, type TaskDetailsData, type IncludedBoard  } from "../dataAccessLayer/api"

export const useTaskSelection = (selectedTaskId: string | null, boardId: string | null ) => {
    const [selectedTask, setSelectedTask] = useState<TaskDetailsData | null>(null)
    const [selectedBoard, setSelectedBoard] = useState<IncludedBoard | null>(null)

    useEffect(() => {
        if (!selectedTaskId) {
            setSelectedTask(null)
            return
        }
            getTrack(selectedTaskId, boardId).then(json => {
            setSelectedTask(json.data)
            setSelectedBoard(json.included[0])
        })
    }, [selectedTaskId, boardId])

    return {
        selectedTask,
        selectedBoard
    }
}