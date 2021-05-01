function MyReducer() {
  let result;
  const arr = [1, 2, 3, 4];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  result = arr.reduce(reducer);
  console.log(result);

  result = arr.reduce(reducer, 5);
  console.log(result);

  return <div className='useState'>useReducer</div>;
}

export default MyReducer;
