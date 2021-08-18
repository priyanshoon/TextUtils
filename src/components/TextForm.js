import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpOnClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText)
    }

    const handleLowOnClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText)
    }

    const [text, setText] = useState('')

    return (
        <div>
            <div className="mb-3 mt-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7" placeholder="Enter Here!"></textarea>
            </div>
            <button className="btn btn-danger mx-2 my-1" onClick={handleUpOnClick}>Convert To Uppercase</button>
            <button className="btn btn-danger mx-2 my-1" onClick={handleLowOnClick}>Convert To Lowercase</button>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <strong>
                    <p>{text.split(' ').length} Words and {text.length} Characters</p>
                    <p>{0.008 * text.split(' ').length} Minutes to read</p>
                </strong>
                <h2>Perview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
