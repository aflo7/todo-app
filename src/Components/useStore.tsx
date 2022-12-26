import React, { useState, useEffect } from "react"

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
  const [currTasks, setCurrTasks] = useState<Task[]>([])

  useEffect(() => {
    checkIfStoreExists()
  }, [])

  // whenever the store changes in state, change the store in localStorage
  useEffect(() => {
    localStorage.setItem("Store", JSON.stringify(store))
  }, [store])

  function checkIfStoreExists() {
    const localStore = localStorage.getItem("Store")
    if (localStore) {
      setStore(JSON.parse(localStore))
    } else {
      localStorage.setItem("Store", JSON.stringify(defaultStore))
      setStore(defaultStore)
    }
  }

  function addTask(e: React.FormEvent<HTMLFormElement>, content: string) {
    e.preventDefault()
    const newTask: Task = {
      content,
      id: crypto.randomUUID()
    }

    const currStore = [...store]
    const folder = currStore.find((folder) => folder.name === selectedFolder)
    if (folder) {
      folder.tasks.push(newTask)
      folder.count += 1
      setStore(currStore)
    }
  }

  function createNewFolder(
    e: React.FormEvent<HTMLFormElement>,
    folderName: string
  ) {
    e.preventDefault()
    const currStore = [...store]
    const foundFolder = currStore.find((folder) => folder.name === folderName)
    if (foundFolder !== undefined) {
      alert("Folder already exists")
      return
    }
    const newFolder: Folder = { name: folderName, count: 0, tasks: [] }
    currStore.push(newFolder)
    setStore(currStore)
  }

  function deleteTask(id: string) {
    const currStore = [...store]
    const foundFolder = currStore.find(
      (folder) => folder.name === selectedFolder
    )
    if (foundFolder) {
      for (let i = 0; i < foundFolder.tasks.length; i++) {
        if (foundFolder.tasks[i].id === id) {
          foundFolder.tasks.splice(i, 1)
          break
        }
      }
      setStore(currStore)
    }
  }

  function handleSelectedFolderChange(folderName: string) {
    setSelectedFolder(folderName)
  }

  useEffect(() => {
    const foundFolder = store.find((folder) => folder.name === selectedFolder)
    if (foundFolder === undefined) {
      setCurrTasks([])
      return
    }
    setCurrTasks(foundFolder.tasks)
  }, [selectedFolder, store])

  return {
    store,
    selectedFolder,
    addTask,
    createNewFolder,
    deleteTask,
    handleSelectedFolderChange,
    currTasks
  }
}

export default useStore
