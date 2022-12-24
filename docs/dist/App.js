import React, {useState, useEffect} from "../snowpack/pkg/react.js";
import "./Styles/app.css.proxy.js";
import Nav from "./Components/Nav.js";
import Notes from "./Components/Notes.js";
import {AiOutlineMenu} from "../snowpack/pkg/react-icons/ai.js";
import {useMediaQuery} from "../snowpack/pkg/react-responsive.js";
import {BiNotepad} from "../snowpack/pkg/react-icons/bi.js";
const defaultStore = [
  {name: "Quick Notes", tasks: [], count: 0},
  {name: "Today", tasks: [], count: 0},
  {name: "Next Week", tasks: [], count: 0}
];
function App() {
  const [store, setStore] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("Quick Notes");
  const [showNav, setShowNav] = useState(true);
  const showNav2 = useMediaQuery({
    minWidth: 700
  });
  useEffect(() => {
    const localStore = localStorage.getItem("Store");
    if (localStore == null) {
      localStorage.setItem("Store", JSON.stringify(defaultStore));
      setStore(defaultStore);
    } else {
      setStore(JSON.parse(localStore));
    }
  }, []);
  function addTask(e, content) {
    e.preventDefault();
    const newTask = {
      content,
      id: crypto.randomUUID()
    };
    const tempStore = [...store];
    const folder = tempStore.find((folder2) => folder2.name === selectedFolder);
    if (folder === void 0) {
      return;
    }
    folder.tasks.push(newTask);
    folder.count += 1;
    setStore(tempStore);
  }
  function createNewFolder(e, folderName) {
    e.preventDefault();
    const currStore = [...store];
    console.log(currStore);
    const exists = currStore.find((store2) => store2.name === folderName);
    if (exists !== void 0) {
      alert("Folder already exists");
      return;
    }
    const newFolder = {name: folderName, count: 0, tasks: []};
    currStore.push(newFolder);
    setStore(currStore);
  }
  function deleteTask(id) {
    console.log(id);
    const currStore = [...store];
    const folder = currStore.find((folder2) => folder2.name === selectedFolder);
    if (folder === void 0) {
      return;
    }
    for (let i = 0; i < folder.tasks.length; i++) {
      if (folder.tasks[i].id === id) {
        folder.tasks.splice(i, 1);
        break;
      }
    }
    setStore(currStore);
  }
  useEffect(() => {
    localStorage.setItem("Store", JSON.stringify(store));
  }, [store]);
  function handleSelectedFolderChange(folderName) {
    setSelectedFolder(folderName);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title-text"
  }, /* @__PURE__ */ React.createElement(BiNotepad, {
    className: "title-icon"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "title-text-inner"
  }, "Todo App")), /* @__PURE__ */ React.createElement(AiOutlineMenu, {
    className: "title-nav-icon",
    onClick: () => setShowNav((prev) => !prev)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "bottom-wrapper"
  }, showNav || showNav2 ? /* @__PURE__ */ React.createElement("div", {
    className: "nav-wrapper"
  }, /* @__PURE__ */ React.createElement(Nav, {
    selectedFolder,
    store,
    setSelectedFolder: handleSelectedFolderChange
  })) : null, /* @__PURE__ */ React.createElement(Notes, {
    selectedFolder,
    store,
    addTask,
    createNewFolder,
    deleteTask
  })));
}
export default App;
