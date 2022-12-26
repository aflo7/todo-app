// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "\n:root {\n  --navy: #264653;\n  --teal: #2A9D8F;\n  --gold: #E9C46A;\n  --orange: #F4A261;\n  --dark-orange: #E76F51;\n\n\n}\n* {\n  box-sizing: border-box;\n  font-size: 16pt;\n\n}\nbody {\n  margin: 0;\n  font-family: 'proxima-nova', sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  /* background-color: rgb(29, 56, 83); */\n  background-color: var(--orange);\n  color: black;\n  /* font-size: 18pt; */\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\nbutton {\n  /* border-radius: 10px; */\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n\n}\n\ninput {\n  /* border-radius: 10px; */\n  font-size: 12pt;\n  color: black;\n  padding: 5px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}