import React, {useState} from 'react';

function Counter () {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [intervall, setIntervall] = useState()
    
    const increment = () => {
        setCount(count + step);
    }

    const decrement = () => {
        setCount(count - step);
    }

    const handleStepChange = ({target: {value}}) => {
        setStep(Number(value));
    };


    const handleStart = () => {
        const autoIncrement = setInterval(() => {
        setCount((count) => count + step)
       }, 1000)
       setIntervall(autoIncrement);
     }

     const handleStop = () => {
         clearInterval(intervall)
     }

      

    return (
        <div>
            <div>Count:{count}</div>
            <div>Step: {step}</div>
            <button onClick={increment}>+{step}</button>
            <button onClick={decrement}>-{step}</button>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

            <input
            type="number"
            name="step"
            value={step}
            min="0"
            max="10"
            onChange={handleStepChange}
            />
        </div>
    );
}


        
    
    


export default Counter;