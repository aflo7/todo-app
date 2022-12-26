// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@media screen and (max-width: 700px) {\n  .bottom-wrapper {\n    flex-direction: column;\n  }\n  .title-nav-icon {\n    display: block;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .notes-wrapper {\n    width: 900px;\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}