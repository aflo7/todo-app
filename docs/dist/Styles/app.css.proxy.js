// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App {\n  display: flex;\n  flex-direction: column;\n  /* border-top: 2px solid white; */\n  /* justify-content: space-evenly; */\n  height: 100vh;\n}\n.bottom-wrapper {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  border-top: 2px solid white;\n}\n\n.title {\n  background-color: var(--navy);\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n  padding-left: 25px;\n}\n\n.title-text {\n  display: flex;\n  text-align: center;\n  /* font-size: 20pt; */\n  color: white;\n  -webkit-user-select: none; /* Safari */        \n-moz-user-select: none; /* Firefox */\n-ms-user-select: none; /* IE10+/Edge */\nuser-select: none; /* Standard */\n}\n\n.title-nav-icon {\n  padding-top: 8px;\n  font-size: 22pt;\n  color: white;\n  background-color: var(--navy);\n  display: none;\n  cursor: pointer;\n}\n\n.title-nav-icon:hover {\n  color: rgb(206, 206, 206);\n  /* text-align: ; */\n}\n.title-icon {\n  font-size: 30pt;\n  margin-right: 10px;\n}\n\n.title-text-inner {\n  height: 40px;\n  line-height: 40px;\n\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}