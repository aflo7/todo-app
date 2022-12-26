import React, {useState} from "../../snowpack/pkg/react.js";
import {FaRegCircle} from "../../snowpack/pkg/react-icons/fa.js";
import {AiOutlineDelete} from "../../snowpack/pkg/react-icons/ai.js";
function Notes(props) {
  const {selectedFolder, addTask, store, createNewFolder, deleteTask, currTasks} = props;
  const [content, setContent] = useState("");
  const [folderName, setFolderName] = useState("");
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  const [showAddTaskBtn, setShowAddTaskBtn] = useState(true);
  return /* @__PURE__ */ React.createElement("div", {
    className: "notes-wrapper"
  }, selectedFolder === "New Folder" ? /* @__PURE__ */ React.createElement("div", {
    className: "form-wrapper"
  }, /* @__PURE__ */ React.createElement("form", {
    className: "new-task-form",
    onSubmit: (e) => {
      createNewFolder(e, folderName);
      setFolderName("");
    }
  }, /* @__PURE__ */ React.createElement("input", {
    required: true,
    className: "folder-name-input",
    id: "folder-name",
    name: "folder-name",
    type: "text",
    value: folderName,
    onChange: (e) => setFolderName(e.target.value)
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "create-folder-btn"
  }, "Create"))) : /* @__PURE__ */ React.createElement("div", {
    className: "form-wrapper"
  }, showAddTaskBtn ? /* @__PURE__ */ React.createElement("button", {
    className: "add-task-btn",
    onClick: () => {
      setShowNewTaskForm((prev) => !prev);
      setShowAddTaskBtn((prev) => !prev);
    }
  }, /* @__PURE__ */ React.createElement("strong", null, "+ "), " Add a task") : null, showNewTaskForm ? /* @__PURE__ */ React.createElement("form", {
    className: "new-task-form",
    onSubmit: (e) => {
      addTask(e, content);
      setContent("");
    }
  }, /* @__PURE__ */ React.createElement("input", {
    className: "new-task-content-input",
    type: "text",
    name: "content",
    id: "content",
    value: content,
    onChange: (e) => setContent(e.target.value),
    required: true
  }), /* @__PURE__ */ React.createElement("div", {
    className: "new-task-btn-wrapper"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "create-btn"
  }, "Add"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "cancel-btn",
    onClick: () => {
      setShowNewTaskForm((prev) => !prev);
      setShowAddTaskBtn((prev) => !prev);
    }
  }, "Cancel"))) : null), /* @__PURE__ */ React.createElement("div", {
    className: "note-wrapper"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, selectedFolder !== "New Folder" ? selectedFolder : null)), selectedFolder !== "New Folder" && currTasks ? currTasks.map((task, i) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "single-note-wrapper",
      key: i
    }, /* @__PURE__ */ React.createElement("div", {
      className: "single-note"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "fa-reg-circle-wrapper"
    }, /* @__PURE__ */ React.createElement(FaRegCircle, {
      className: "fa-reg-circle",
      onClick: () => deleteTask(task.id)
    })), /* @__PURE__ */ React.createElement("div", {
      className: "single-note-content"
    }, task.content)), /* @__PURE__ */ React.createElement("div", {
      className: "single-note-delete-icon-wrapper"
    }, /* @__PURE__ */ React.createElement(AiOutlineDelete, {
      className: "single-note-delete-icon",
      onClick: () => deleteTask(task.id)
    })));
  }) : null));
}
export default Notes;
