import React from "react";
import "./App.css";
import { useState } from "react";
import { marked } from "marked";


export default function  App(){


  //a header (H1 size), a sub header (H2 size),
  // a link, inline code, a code block, 
  //a list item, a blockquote, an image, and bolded text
  const [text, setText] = useState(`
  # H1
  ## H2

  [title](https://www.example.com)

  \`code\`
  
  - First item
- Second item
- Third item
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
  
> blockquote
![alt text](image.jpg)
**bold text**

  `);

  marked.setOptions({
    breaks: true
  })
   return(

      <div className="App">

        <textarea id="editor" 
        onChange={(event)=>{
              setText(event.target.value);
             }}
             value={text}
             >
             </textarea>
        <div id="preview"
        dangerouslySetInnerHTML={{
        __html: marked(text),
        }}
        ></div>
  

  
      </div>
    );

  }
