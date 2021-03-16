import React, {useState} from 'react';
import translate from "translate";

translate.engine = 'libre';


function Input(){

  const [input, setInput] = useState('');
  const [result, setResult] = useState('testing');
  const [langTo,setLangTo] = useState('');

  async function execTrans(e) {
    e.preventDefault();
    console.log(e.target.langTo.value);
    const langTo = e.target.langTo.value;
    const translation = await translate(input, {to: langTo});
    console.log('translated!', translation); //for debbugging
    setResult(translation);
  }

  function handleChange(e){
    setInput(e.target.value);
    console.log(input); //debugging
  }

return(
<>
<form
  onSubmit={execTrans}>
  <label htmlFor='langTo'>Select Language Output</label>
  <select id='langTo'>
    <option value='es' defaultValue>Spanish</option>
    <option value='fr'>French</option>
    <option value='de'>German</option>
    <option value='ja'>Japanese</option>
  </select>
  <label htmlFor='userInput'>Enter here:</label>
    <textarea
      rows='4'
      columns='50'
      maxLength='300'
      placeholder='Enter English Here'
      id='userInput'
      value={input}
      onChange={handleChange}></textarea>
    <input type='submit' value='submit'/>
</form>

  <p>{result}</p>
</>
);

}


export default Input;
