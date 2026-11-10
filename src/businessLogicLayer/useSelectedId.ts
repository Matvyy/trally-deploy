import { useState } from "react"



export const useSelectedId = ()=>{
    const [boardId, setBoardId] = useState<string | null>(null)
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)

    const handleTaskSelect = (id: string | null) => {
        setSelectedTaskId(id)
    }

    const handleBoardSelect = (id: string | null) => {
        setBoardId(id)
    }

    return{
        boardId,
        selectedTaskId,
        handleBoardSelect,
        handleTaskSelect
    }
}