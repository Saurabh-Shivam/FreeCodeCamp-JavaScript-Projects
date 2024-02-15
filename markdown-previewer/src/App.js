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
    <div className="flex flex-col flex-wrap justify-center items-center gap-8 bg-black">
      <div className="border-2 border-white w-[30%] p-4 mt-10 flex flex-col gap-4 rounded-md">
        <label
          className="text-lg font-bold border-b-2 border-white p-1 text-white"
          htmlFor="editor"
        >
          Editor
        </label>
        <textarea
          className="focus:outline-none border-2 border-red-500 p-2 rounded-md scroll-smooth "
          name="editor"
          id="editor"
          cols="50"
          rows="10"
          onChange={changeHandler}
          value={text}
        ></textarea>
      </div>

      <div className="border-2 border-white w-[45%] p-4 mt-10 flex flex-col gap-4 rounded-md">
        <h2 className="text-lg font-bold border-b-2 border-white text-white p-1 ">
          Previewer
        </h2>
        <div
          className="border-2 border-red-500 text-white p-4 rounded-md"
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
