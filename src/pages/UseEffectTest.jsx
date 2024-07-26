import { useState, useEffect } from "react"

export default function UseEffectTest() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({ key: 'value' });
  
  useEffect(() => {
    console.log('useEffect has run');
  }, [a, b, c]);
  
  useEffect(() => {
    console.log('useEffect triggered due to count change');
  }, [count]);

  useEffect(() => {
    console.log('useEffect triggered due to obj change');
  }, [obj]);

  return (
    <div>
      <div>
        <button onClick={() => setA(a + 1)}>Increment A</button>
        <button onClick={() => setB(b + 1)}>Increment B</button>
        <button onClick={() => setC(c + 1)}>Increment C</button>
      </div>      
      <div>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <button onClick={() => setObj({ key: 'value' })}>Set Same Object</button>
        <button onClick={() => setObj({ key: 'new value' })}>Set New Object</button>
      </div>
    </div>
  );

}