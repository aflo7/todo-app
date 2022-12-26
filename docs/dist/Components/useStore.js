import {useState, useEffect} from "../../snowpack/pkg/react.js";
const defaultStore = [
  {name: "Quick Notes", tasks: [], count: 0},
  {name: "Today", tasks: [], count: 0},
  {name: "Next Week", tasks: [], count: 0}
];
const useStore = () => {
  const [store, setStore] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("Quick Notes");
  const [currTasks, setCurrTasks] = useState([]);
  useEffect(() => {
    checkIfStoreExists();
  }, []);
  useEffect(() => {
    localStorage.setItem("Store", JSON.stringify(store));
  }, [store]);
  function checkIfStoreExists() {
    const localStore = localStorage.getItem("Store");
    if (localStore) {
      setStore(JSON.parse(localStore));
    } else {
      localStorage.setItem("Store", JSON.stringify(defaultStore));
      setStore(defaultStore);
    }
  }
  function addTask(e, content) {
    e.preventDefault();
    const newTask = {
      content,
      id: crypto.randomUUID()
    };
    const currStore = [...store];
    const folder = currStore.find((folder2) => folder2.name === selectedFolder);
    if (folder) {
      folder.tasks.push(newTask);
      folder.count += 1;
      setStore(currStore);
    }
  }
  function createNewFolder(e, folderName) {
    e.preventDefault();
    const currStore = [...store];
    const foundFolder = currStore.find((folder) => folder.name === folderName);
    if (foundFolder !== void 0) {
      alert("Folder already exists");
      return;
    }
    const newFolder = {name: folderName, count: 0, tasks: []};
    currStore.push(newFolder);
    setStore(currStore);
  }
  function deleteTask(id) {
    const currStore = [...store];
    const foundFolder = currStore.find((folder) => folder.name === selectedFolder);
    if (foundFolder) {
      for (let i = 0; i < foundFolder.tasks.length; i++) {
        if (foundFolder.tasks[i].id === id) {
          foundFolder.tasks.splice(i, 1);
          break;
        }
      }
      setStore(currStore);
    }
  }
  function handleSelectedFolderChange(folderName) {
    setSelectedFolder(folderName);
  }
  useEffect(() => {
    const foundFolder = store.find((folder) => folder.name === selectedFolder);
    if (foundFolder === void 0) {
      setCurrTasks([]);
      return;
    }
    setCurrTasks(foundFolder.tasks);
  }, [selectedFolder, store]);
  return {
    store,
    selectedFolder,
    addTask,
    createNewFolder,
    deleteTask,
    handleSelectedFolderChange,
    currTasks
  };
};
export default useStore;
