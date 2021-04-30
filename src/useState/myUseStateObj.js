import { useState } from "react";

function MyUseStateObj() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div className='useState'>
      <form>
        <input
          type='text'
          placeholder='firstName'
          value={name.firstName}
          onChange={e => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type='text'
          placeholder='lastName'
          value={name.lastName}
          onChange={e => setName({ ...name, lastName: e.target.value })}
        />
        <h2>FirstName: {name.firstName}</h2>
        <h2>LastName: {name.lastName}</h2>
      </form>
    </div>
  );
}

export default MyUseStateObj;
