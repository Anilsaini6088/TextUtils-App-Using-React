import React, {useState} from 'react'
// import Navbar from './Navbar';


export default function userForm(props) {

  const handleUpClick = ()=>{
    // console.log("upperCase is clicked")
    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert("Uppercase text enable ","success")
  }
  const handleUpClick2 = ()=>{
    // console.log("upperCase is clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lowarcase text enable ","success")
  }
  const handleOnChange = (event)=>{
    // console.log("upperCase is clicked")
    // setText("")
    setText(event.target.value);
  }

  const handleClearText = ()=>{
    // console.log("upperCase is clicked")
    // setText("")
    setText("");

    props.showAlert("cleare text","success")
  }

  const handleSentenceText = ()=>{
    // console.log("upperCase is clicked")
    let  newText = text.split(" ").length[0].toUpperCase();
    setText(newText);
    props.showAlert("Sentence text enable ","success")
  }

  const [text,setText] = useState("");
  // setText("new-text");
  return (
    <>
    
<div className="mb-3 formfield my-5" style={{color: props.mode==='dark'?'white':'black'}}>
  <h2>{props.heading} </h2>
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" value={text}></textarea>
  <button className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2"  onClick={handleUpClick2}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2"  onClick={handleClearText}>Clear text</button>
  <button className="btn btn-primary mx-2"  onClick={handleSentenceText}>Sentence Case</button>
   <div className="container my-3">
   <h3>Text Summary</h3>
   <p>{text.split(" ").length} words and {text.length} characters</p>
   <p> you read this text in {text.split(" ").length * 0.008} minutes</p>
   <h2>preview</h2>
   <p>{text.length>0?text:'please enter somthing in the field'}</p>
   </div>
  
   
</div>
</>
  )
}
