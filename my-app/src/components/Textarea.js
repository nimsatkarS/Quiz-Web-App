import React, {useState} from 'react'


export default function Textarea(props) {
const UpClick = ()=>{
  let netText = text.toUpperCase();
  setText(netText);
  props.showAlert("Converting the Upper Case","Success");
}

const LoClick = ()=>{
  let netText = text.toLowerCase();
  setText(netText);
  props.showAlert("Converting the Lower Case","Success");

}

const UponChange = (event)=>{
setText(event.target.value);
}

const handleCopy = () => {
  var text = document.getElementById("myBox");
  text.select(); // Select the text
  text.setSelectionRange(0, 99999); // Optional: Select a range (not needed if `select()` is used)
  navigator.clipboard.writeText(text.value); // Copy the selected text to the clipboard
}


const remExSpace =()=>{
  let newText = text.split(/[]+/);
  setText(newText.join(" "))
}
  const [text, setText] = useState('');

  return (
    <>
    <div className='container'>
<div className="mb-3">
  
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="myBox" value={text}  rows="8" onChange={UponChange} ></textarea>
</div>
<button type="button" className="btn btn-primary mx-3" onClick={UpClick}>Upper Case</button>
<button type="button" className="btn btn-primary mx-3" onClick={LoClick}>Lower Case</button>
<button type="button" className="btn btn-primary mx-3" onclick={handleCopy}>HandleCopy</button>
<button type="button" className="btn btn-primary mx-3" onClick={remExSpace}>RemExSpace</button>


    </div>
    <div className='container my-3'>
<h2>Your Text Summary</h2>
<p>Words {text.split(" ").length} , Characters {text.length}</p>
<p> {0.008 * text.split(" ").length} Time To Read </p>

    </div>
    </>
  )
}
