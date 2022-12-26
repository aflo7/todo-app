import React, { useState } from "react"
import "./Styles/app.css"
import Nav from "./Components/Nav.jsx"
import Notes from "./Components/Notes.jsx"
import { AiOutlineMenu } from "react-icons/ai"
import { useMediaQuery } from "react-responsive"
import { BiNotepad } from "react-icons/bi"
import useStore from "./Components/useStore"

interface Task {
  content: string
  id: string
}

interface Folder {
  name: string
  tasks: Task[]
  count: number
}

function App() {
  const {
    store,
    selectedFolder,
    addTask,
    createNewFolder,
    deleteTask,
    handleSelectedFolderChange,
    currTasks
  } = useStore()
  // const [store, setStore] = useState<Folder[]>([])
  // const [selectedFolder, setSelectedFolder] = useState("Quick Notes")
  const [showNav, setShowNav] = useState(true) // user can click the sandwhich button to show/hide the navbar

  // when the screen becomes larger than 700px, show the nav (folder select) bar
  const showNav2 = useMediaQuery({
    minWidth: 700
  })

  return (
    <div className="App">
      <div className="title">
        <div className="title-text">
          <BiNotepad className="title-icon" />
          <div className="title-text-inner">Todo App</div>
        </div>

        <AiOutlineMenu
          className="title-nav-icon"
          onClick={() => setShowNav((prev) => !prev)}
        />
      </div>
      <div className="bottom-wrapper">
        {showNav || showNav2 ? (
          <div className="nav-wrapper">
            <Nav
              selectedFolder={selectedFolder}
              store={store}
              setSelectedFolder={handleSelectedFolderChange}
            />
          </div>
        ) : null}

        <Notes
          selectedFolder={selectedFolder}
          store={store}
          addTask={addTask}
          createNewFolder={createNewFolder}
          deleteTask={deleteTask}
          currTasks={currTasks}
        />
      </div>
    </div>
  )
}

export default App
