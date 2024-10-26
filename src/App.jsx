import { useState } from 'react'
import './App.css'

function App() {
  const [result, setValue] = useState('')

  const displayContent = (content) => {
    setValue(result + content);
  };

  const clearCalcScreen = () => {
    setValue('');
  };

  const displayResult = () => {
    try {
      setValue(eval(result).toString()); 
    } catch (error) {
      setValue('Error');
    }
  };

  const removeLastDigit = () => {
    setValue(result.slice(0, -1));
  };

  return (
    <>
      <div className="container">
      <input type="text" value={result} placeholder='0' readOnly />
      <div className='icons'>
         <div onClick={clearCalcScreen} className='col1'><button>AC</button></div>
        <div onClick={()=>displayContent('(')} className='col2'><button>(</button></div>
        <div onClick={()=>displayContent(')')} className='col3'><button>)</button></div>
         <div onClick={()=>displayContent('/')}  className='col4'> <button>/</button></div>
      </div>
      <div className='icons1'>
         <div onClick={()=>displayContent('7')}  className='col1'><button>7</button></div>
        <div onClick={()=>displayContent('8')}  className='col2'><button>8</button></div>
        <div onClick={()=>displayContent('9')}  className='col3'><button>9</button></div>
         <div onClick={()=>displayContent('*')}  className='col4'> <button>*</button></div>
      </div>
      <div className='icons2'>
         <div onClick={()=>displayContent('4')}  className='col1'><button>4</button></div>
        <div onClick={()=>displayContent('5')}  className='col2'><button>5</button></div>
        <div onClick={()=>displayContent('6')}  className='col3'><button>6</button></div>
         <div onClick={()=>displayContent('+')}  className='col4'> <button>+</button></div>
      </div>
      <div className='icons3'>
         <div onClick={()=>displayContent('1')}  className='col1'><button>1</button></div>
        <div onClick={()=>displayContent('2')}  className='col2'><button>2</button></div>
        <div onClick={()=>displayContent('3')}  className='col3'><button>3</button></div>
         <div onClick={()=>displayContent('-')}  className='col4'> <button>-</button></div>
      </div>
      <div className='icons4'>
         <div onClick={()=>displayContent('0')}  className='col1'><button>0</button></div>
        <div onClick={()=>displayContent('.')}  className='col2'><button>.</button></div>
        <div onClick={removeLastDigit} className='col3'><button>DEL</button></div>
         <div onClick={displayResult} className='col4'> <button>=</button></div>
      </div>
      </div>
    </>
  )
}

export default App