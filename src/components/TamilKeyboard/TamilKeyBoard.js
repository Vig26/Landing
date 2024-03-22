import { useRef, useState } from 'react';
import { Input } from 'antd';
import TamilKeyboard  from "cosmic-tamil-keyboard";

export default function TamilKeyBoard(){
   
 const [data, setdata] = useState({
     visible: false,
     inputs: ""
 });
 const inputRef = useRef();
 const keyboardRef = useRef();

 console.log("Input Data : ",data);

 const handleKeyboardChange = (data) => {
   setdata((inputData) => ({ ...inputData, inputs: data, }))
 };

 return (
   <>
     <Input 
       type="text"
       id="virtualkeyID"
       onPaste={(e) => keyboardRef.current.handlePaste(e)}
       onKeyPress={(e) => keyboardRef.current.keypress(e)}
       onKeyDown={(e) => keyboardRef.current.keyup(e)}
       onCut={e => keyboardRef.current.handleCut(e)}
       onFocus={(e) => [keyboardRef.current.onfocus(e),
       // multiple un used keyboard hideing(textbox id passing for array in the format)
       keyboardRef.current.anotherKeyBoardHide(["virtualkeyID1","virtualkeyID2","virtualkeyID3"])]}
       value={data.inputs}
       ref={inputRef} />

     <TamilKeyboard  keysound={true}
       visible={data.inputs === ""}
       // To 'set' keyboard input values to above input field
       keydatavalue={handleKeyboardChange}
       ref={keyboardRef}
       // 'inputid' same as above input field 'id'
       inputid={"virtualkeyID"}
       // 'inputref' same as above input field 'ref'
       inputref={inputRef} /> 
 <button  onClick={(e)=>keyboardRef.current.allowclear(e)}>allowclear</button>
 </>
 );
}