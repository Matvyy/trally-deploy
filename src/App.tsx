import { TasksList } from "./ui/TasksList/TasksList.tsx"
import { TaskDetails } from "./ui/TaskDetails/TaskDetails.tsx"
import { useSelectedId } from "./businessLogicLayer/useSelectedId.ts"


function App() {
  const {boardId, selectedTaskId, handleTaskSelect, handleBoardSelect} = useSelectedId()

  return (
    <>
      <h1>List of Tasks</h1>
      <div style={{ display: "flex", gap: "10px"}}>
        <TasksList onBoardIdChange={handleBoardSelect} selectedTaskId={selectedTaskId} onSelectedTaskIdChange={handleTaskSelect} />
        <TaskDetails selectedTaskId={selectedTaskId} boardId={boardId} />

      </div>
    </>
  )
}

export default App





