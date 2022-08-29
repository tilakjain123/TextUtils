import React, { useState } from 'react'


export default function Textform(props) {
    // convert to uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    // convert to lowercase
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    // convert every word's first letter to capitalize
    const handleCapClick = () =>{
        let words = text.split(" ");
        let capitalWord = ''
        words.forEach(element=>{
            capitalWord += element.charAt(0).toUpperCase() + element.slice(1) + " "
        })
        setText(capitalWord);
    }
    // clear the textarea
    const handleClear = () =>{
        setText("")
        props.showAlert("Text Cleared", "success")
    }
    // copy the text
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success")
    }
    // handle textarea change
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState("This is Sample Text");
    return (
        <div className={`text-${props.mode==='light'? 'Dark' : 'light'}`}>
        <h3>{props.heading}</h3>
            <div className="mb-3 my-2">
                <label htmlFor="myBox" className="form-label">Enter your Text:</label>
                <textarea className={`form-control bg-${props.mode==='dark'? 'dark' : 'light'} text-${props.mode==='light'? 'Dark' : 'light'}`} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <div>
                <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary m-1" onClick={handleCapClick}>Capitalize every word</button>
                <button className="btn btn-primary m-1" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary m-1" onClick={handleCopy}>Copy Text</button>
            </div>
            <p className='m-2'>{text.replace(/\s/g, "").length} Characters | {text ? text.match(/\b\S+\b/g).length : 0} Words</p>
            <p>Total Hashtags: {(text.match(/(^|\W)(#[a-z\d][\w-]*)/g)|| []).length}</p>
            <p>No. of Lines: {text.split(/\r|\r|\n|\n/).length}</p>
            <h2>Preview:</h2>
            <hr/>
            <p>{text.length===0 ? "Nothing to Preview" : text}</p>
        </div>
    )
}
