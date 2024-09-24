import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';





function App() {  

  const [totalScore, setTotalScore]=useState(501);
  const [operator, setOperator]=useState(1);

const handleChange=(CharToSubstract)=>{
  setTotalScore(totalScore-CharToSubstract*operator);
};


  return <>
  <div>
    
  <header>
    <h1>Flechettes</h1>
    <h2>Score :</h2>
    <input value={totalScore} disabled/>
  </header>

  <div>
    <div className='col-12 d-flex gap-3 justify-content-center mb-2 mt-2'>
      <Button variant="light" onClick={()=>handleChange(1)}>1</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(2)}>2</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(3)}>3</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(4)}>4</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(5)}>5</Button>{' '}
    </div>
    <div className='col-12 d-flex gap-3 justify-content-center mb-2'>
      <Button variant="light" onClick={()=>handleChange(6)}>6</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(7)}>7</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(8)}>8</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(9)}>9</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(10)}>10</Button>{' '}
    </div>
    <div className='col-12 d-flex gap-3 justify-content-center mb-2'>
      <Button variant="light" onClick={()=>handleChange(11)}>11</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(12)}>12</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(13)}>13</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(14)}>14</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(15)}>15</Button>{' '}
    </div>
    <div className='col-12 d-flex gap-3 justify-content-center mb-2'>
      <Button variant="light" onClick={()=>handleChange(16)}>16</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(17)}>17</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(18)}>18</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(19)}>19</Button>{' '}
      <Button variant="light" onClick={()=>handleChange(20)}>20</Button>{' '}
    </div>
    <div className='col-12 d-flex gap-3 justify-content-center mb-2'>
      <Button variant="warning" onClick={()=>handleChange(25)}>25</Button>{' '}
      <Button variant="info" onClick={()=>setOperator(2)}>Double</Button>{' '}
      <Button variant="danger" onClick={()=>setOperator(3)}>Triple</Button>{' '}
    </div>
    <div className='col-12 d-flex gap-3 justify-content-center mb-2'>
      <Button variant="secondary">Nul</Button>{' '}
    </div>
  </div>


  </div>
  </>

}
export default App;
