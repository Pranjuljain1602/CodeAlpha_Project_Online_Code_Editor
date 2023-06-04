const editors = document.querySelectorAll(".editor textarea");
const outputFrame = document.querySelector("#output-frame");

function updateOutput() {
  const html = editors[0].value;
  const css = editors[1].value;
  const js = editors[2].value;

  const output =
    outputFrame.contentDocument || outputFrame.contentWindow.document;
  const outputHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Output</title>
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>${js}</script>
    </body>
    </html>
  `;
  output.open();
  output.write(outputHTML);
  output.close();
}

editors.forEach((editor) => {
  editor.addEventListener("keyup", updateOutput);
});

updateOutput();