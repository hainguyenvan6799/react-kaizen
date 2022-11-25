import {useId} from 'react';

const FormWithUseId = () => {
    const id = useId();
    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <form>
              <label className="labelText" htmlFor={id + 'firstname'}>First Name</label>
              <input className="input" type="text" id={id + 'firstname'}/><br/>
              <label className="labelText" htmlFor={id + 'lastname'}>Last Name</label>
              <input className="input" type="text" id={id + 'lastname'}/><br/>
          </form>
        </div>
    )
  }
  
  export default FormWithUseId;