const FormWithoutUseId = () => {
  return (
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <form>
            <label className="labelText" htmlFor="firstname">First Name</label>
            <input className="input" type="text" id="firstname"/><br/>
            <label className="labelText" htmlFor="lastname">Last Name</label>
            <input className="input" type="text" id="lastname"/><br/>
        </form>
      </div>
  )
}

export default FormWithoutUseId;