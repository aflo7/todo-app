import React, {useState} from "../snowpack/pkg/react.js";
import "./Styles/app.css.proxy.js";
import Nav from "./Components/Nav.js";
import Notes from "./Components/Notes.js";
import {AiOutlineMenu} from "../snowpack/pkg/react-icons/ai.js";
import {useMediaQuery} from "../snowpack/pkg/react-responsive.js";
import {BiNotepad} from "../snowpack/pkg/react-icons/bi.js";
import useStore from "./Components/useStore.js";
function App() {
  const {
    store,
    selectedFolder,
    addTask,
    createNewFolder,
    deleteTask,
    handleSelectedFolderChange,
    currTasks
  } = useStore();
  const [showNav, setShowNav] = useState(true);
  const showNav2 = useMediaQuery({
    minWidth: 700
  });
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
    deleteTask,
    currTasks
  })));
}
export default App;
