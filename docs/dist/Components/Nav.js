import React from "../../snowpack/pkg/react.js";
import {AiOutlineFolderAdd, AiOutlineFolder} from "../../snowpack/pkg/react-icons/ai.js";
import "../Styles/nav.css.proxy.js";
function Nav({store, setSelectedFolder, selectedFolder}) {
  return /* @__PURE__ */ React.createElement("nav", null, store ? store.map((folder, i) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "nav-btn",
      key: i,
      style: folder.name === selectedFolder ? {backgroundColor: "var(--orange)"} : {},
      onClick: () => setSelectedFolder(folder.name)
    }, /* @__PURE__ */ React.createElement(AiOutlineFolder, {
      className: "nav-icon"
    }), /* @__PURE__ */ React.createElement("div", {
      className: "nav-inner-text"
    }, folder.name));
  }) : null, /* @__PURE__ */ React.createElement("div", {
    style: selectedFolder === "New Folder" ? {backgroundColor: "var(--orange)"} : {},
    className: "nav-btn",
    onClick: () => setSelectedFolder("New Folder")
  }, /* @__PURE__ */ React.createElement(AiOutlineFolderAdd, {
    className: "nav-icon"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "nav-inner-text"
  }, "New Folder")));
}
export default Nav;
