import { useState } from "react";
import ReactMarkdown from "react-markdown";



const MarkDownView = () => {
    
    const [markdown, setMarkdown] = useState(`# welcome to my React Markdown!
## FaceBook
### Whatsapp
**bold text**
*italicized text*
> blockquote
1. First item
2. Second item
3. Third item
`);

    return (

        <div className="MarkDownView">
            
            <div className="container">
                <h2 className="title"> React Markdown </h2>
                <div className="markdown-text">
                    <textarea value={markdown} onChange={ (e) => setMarkdown(e.target.value) }>  </textarea>
                </div>

                <ReactMarkdown className="markdown-view">
                    {markdown}
                </ReactMarkdown>

               

            </div>
        </div>
        
    )

}




export default MarkDownView;