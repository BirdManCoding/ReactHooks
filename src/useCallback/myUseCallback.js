import { useState, useCallback } from "react";
import Title from "./components/title";
import Count from "./components/count";
import Button from "./components/button";

function MyUseCallback() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  return (
    <div className='useCallback'>
      <Title />
      <Count text='Age' count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text='Salary' count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default MyUseCallback;
