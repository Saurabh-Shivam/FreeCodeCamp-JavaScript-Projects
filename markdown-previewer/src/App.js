import { useState } from "react";
import { marked } from "marked";
function App() {
  // When the website loads these things should be displayed at first
  // a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
  const [text, setText] = useState(`
  # H1 
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  1. First item
  2. Second item
  3. Third item
  > blockquote
  ![alt text](image.jpg)
  **bold text**
  `);

  marked.options({
    breaks: true,
  });

  function changeHandler(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <textarea id="editor" onChange={changeHandler} value={text}></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  );
}

export default App;
