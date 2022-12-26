// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".nav-btn {\n  display: flex;\n  flex-direction: row;\n  cursor: pointer;\n  padding: 10px;\n  border-radius: 10px;\n  \n\n}\n\n.nav-btn:hover {\n  background-color: var(--gold);\n\n\n}\n\n.nav-inner-text {\n  padding-left: 6px;\n  font-size: 12pt;\n  width: 160px;\n  word-break: break-all;\n\n}\n\n.nav-icon {\n  /* font-size: 18pt; */\n}\n\nnav {\n  /* padding: 15px; */\n  /* background-color: black; */\n}\n\n.nav-wrapper {\n  background-color: var(--dark-orange);\n  padding: 20px;\n\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}