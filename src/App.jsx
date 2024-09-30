import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import ScoreIndicator from './Components/ScoreIndicator';
import imgDart from './Assets/hand-drawn-bullseye.png';

document.title = "Jeu de Flechettes";

function App() {  

  const [totalScore, setTotalScore]=useState(501);
  const [oldScore, setOldScore]=useState(0);
  const [multiplicator, setMultiplicator]=useState(1);
  const [darts, setDart]=useState(3);
  const [rounds, setRound]=useState(0);

const handleChange=(CharToSubstract)=>{
  if (darts-1==0){
    setDart(3);
    setRound(rounds+1);
    if (totalScore-(CharToSubstract*multiplicator)>=0){
      setOldScore(totalScore-(CharToSubstract*multiplicator));
    };
  }else{  
  setDart(darts-1);
}
  if (CharToSubstract==25 && multiplicator==3){
    alert("Impossible de faire un triple sur le 25");
    setMultiplicator(1);
  } else if((totalScore-(CharToSubstract*multiplicator))<0){
    alert('Tour terminé');
    setMultiplicator(1);
    setTotalScore(oldScore);
    setDart(3);
  } else if((totalScore-(CharToSubstract*multiplicator))==0){
    setTotalScore(totalScore-(CharToSubstract*multiplicator));
    setMultiplicator(1);
    alert('Bien joué bogoss');
  }else{  
  setTotalScore(totalScore-(CharToSubstract*multiplicator));
  setMultiplicator(1);
  }
  
};

const replay=()=>{
  setTotalScore(501);
  setMultiplicator(1);
  setDart(3);
  setRound(0);
}


  return (
    <>
      <div>
        <header className='col-12 d-flex gap-3 justify-content-center mb-2 mt-2'>
          <h1>Flechettes</h1>
          <ScoreIndicator value={totalScore} maxValue={501} />
          <h4>Tour :{rounds}</h4>
        
        <div className='stockDart'>
        {darts==3 && <>  
          <img src={imgDart} alt="" className='dartImg' />
          <img src={imgDart} alt="" className='dartImg' />
          <img src={imgDart} alt="" className='dartImg' />
         </>}

         {darts==2 && <>  
          <img src={imgDart} alt="" className='dartImg' />
          <img src={imgDart} alt="" className='dartImg' />
         </>}

         {darts==1 && <>  
          <img src={imgDart} alt="" className='dartImg' />
         </>}
        </div>


          </header>
          {totalScore==0? <>
              {/* {j'affiche le message de victoire} */}
             <div className='d-flex justify-content-center'>
              <Button className='col-2 align-self-center col 3'variant="primary" size="lg" onClick={replay}>Rejouer</Button>{' '}
              </div>
          </> : <>
              {/* J'affiche le message de defaite */}
          
          <div className='d-flex flex-column align-items-center'>
          <div className='col-5 d-flex justify-content-between col 3 mb-2 mt-5'>
            <Button className="col-2" variant="light" size="lg" onClick={() => handleChange(1)}>1</Button>{' '}
            <Button className="col-2" variant="dark" size="lg" onClick={() => handleChange(2)}>2</Button>{' '}
            <Button className="col-2" variant="light" size="lg" onClick={() => handleChange(3)}>3</Button>{' '}
            <Button className="col-2" variant="dark" size="lg" onClick={() => handleChange(4)}>4</Button>{' '}
            <Button className="col-2" variant="light" size="lg" onClick={() => handleChange(5)}>5</Button>{' '}
          </div>
          <div className='col-5 d-flex justify-content-between col 3 mb-2'>
            <Button className="col-2" variant="dark" size="lg" onClick={() => handleChange(6)}>6</Button>{' '}
            <Button className="col-2" variant="light" size="lg" onClick={() => handleChange(7)}>7</Button>{' '}
            <Button className="col-2" variant="dark" size="lg" onClick={() => handleChange(8)}>8</Button>{' '}
            <Button className="col-2" variant="light" size="lg" onClick={() => handleChange(9)}>9</Button>{' '}
            <Button className="col-2" variant="dark" size="lg" onClick={() => handleChange(10)}>10</Button>{' '}
          </div>
          <div className='col-5 d-flex justify-content-between col 3 mb-2'>
            <Button className="col-2" variant="light" size="lg" onClick={() => handleChange(11)}>11</Button>{' '}
            <Button className="col-2" variant="dark" size="lg" onClick={() => handleChange(12)}>12</Button>{' '}
            <Button className="col-2" variant="light" size="lg" onClick={() => handleChange(13)}>13</Button>{' '}
            <Button className="col-2" variant="dark" size="lg" onClick={() => handleChange(14)}>14</Button>{' '}
            <Button className="col-2" variant="light" size="lg" onClick={() => handleChange(15)}>15</Button>{' '}
          </div>
          <div className='col-5 d-flex justify-content-between col 3 mb-2'>
            <Button className="col-2" variant="dark" size="lg" onClick={() => handleChange(16)}>16</Button>{' '}
            <Button className="col-2" variant="light" size="lg" onClick={() => handleChange(17)}>17</Button>{' '}
            <Button className="col-2" variant="dark" size="lg" onClick={() => handleChange(18)}>18</Button>{' '}
            <Button className="col-2" variant="light" size="lg" onClick={() => handleChange(19)}>19</Button>{' '}
            <Button className="col-2" variant="dark" size="lg" onClick={() => handleChange(20)}>20</Button>{' '}
          </div>
          <div className='col-5 d-flex justify-content-between col 3 mb-2'>
            <Button className="col-2"variant="warning" size="lg" onClick={() => handleChange(25)}>25</Button>{' '}
            <Button className="col-3" variant="info" size="lg" onClick={() => setMultiplicator(2)}>Double</Button>{' '}
            <Button className="col-3" variant="danger" size="lg" onClick={() => setMultiplicator(3)}>Triple</Button>{' '}
            <Button className="col-2" variant="secondary" size="lg" onClick={() => handleChange(0)}>Nul</Button>{' '}
          </div>
        </div>
        </> 
          }
      </div>
        

        
    </>
  );

}
export default App;
