import React, {useState, useEffect} from 'react'

interface Task {
  content: string
  id: string
}

interface Folder {
  name: string
  tasks: Task[]
  count: number
}

const defaultStore: Folder[] = [
  { name: "Quick Notes", tasks: [], count: 0 },
  { name: "Today", tasks: [], count: 0 },
  { name: "Next Week", tasks: [], count: 0 }
]

const useStore = () => {
  const [store, setStore] = useState<Folder[]>([])
  const [selectedFolder, setSelectedFolder] = useState("Quick Notes")


  useEffect(() => {
    const localStore = localStorage.getItem("Store")
    if (localStore == null) {
      localStorage.setItem("Store", JSON.stringify(defaultStore))
      setStore(defaultStore)
    } else {
      setStore(JSON.parse(localStore))
    }
  }, [])

  function addTask(e: React.FormEvent<HTMLFormElement>, content: string) {
    e.preventDefault()
    const newTask: Task = {
      content,
      id: crypto.randomUUID()
    }

    const tempStore = [...store]
    const folder = tempStore.find((folder) => folder.name === selectedFolder)
    if (folder === undefined) {
      return
    }
    folder.tasks.push(newTask)
    folder.count += 1
    setStore(tempStore)
  }

  function createNewFolder(
    e: React.FormEvent<HTMLFormElement>,
    folderName: string
  ) {
    e.preventDefault()
    const currStore = [...store]
    const exists = currStore.find((store) => store.name === folderName)
    if (exists !== undefined) {
      alert("Folder already exists")
      return
    }
    const newFolder: Folder = { name: folderName, count: 0, tasks: [] }
    currStore.push(newFolder)
    setStore(currStore)
  }

  function deleteTask(id: string) {
    const currStore = [...store]
    const folder = currStore.find((folder) => folder.name === selectedFolder)
    if (folder === undefined) {
      return
    }

    // find task with specific id, and delete it
    for (let i = 0; i < folder.tasks.length; i++) {
      if (folder.tasks[i].id === id) {
        folder.tasks.splice(i, 1)
        break
      }
    }
    setStore(currStore)
  }

  // whenever the store changes in state, change the store in localStorage
  useEffect(() => {
    localStorage.setItem("Store", JSON.stringify(store))
  }, [store])

  function handleSelectedFolderChange(folderName: string) {
    setSelectedFolder(folderName)
  }
  return {store, selectedFolder, addTask, createNewFolder, deleteTask, handleSelectedFolderChange}
}

export default useStore