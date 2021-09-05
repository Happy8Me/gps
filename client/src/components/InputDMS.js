function InputDMS({
  degLat, 
  setDegLat, 
  degLon, 
  setDegLon, 
  minLat, 
  minLon,
  setMinLat,
  setMinLon, 
  secLat, 
  setSecLat, 
  secLon, 
  setSecLon, 
  setSignLat,
  setSignLon,
  handleSubmitDMS}) {

  const handleSignLat = (val) => {
    val === "S" 
    ? setSignLat('-')
    : setSignLat('')
  }

  const handleSignLon = (val) => {
    val === "W" 
    ? setSignLon('-')
    : setSignLon('')
  }

  return (
    <form onSubmit={handleSubmitDMS}>
    <h3>Degrees Minutes Seconds</h3>
    <div className="inputs">  
      <div>
        <h6>Latitude</h6>
        <div>
          <label>
            <input 
              type="number" 
              max="90" 
              min="0" 
              value={degLat} 
              onChange={(e) => {setDegLat(Number(e.target.value))}}
              required
            />
            º
          </label>
          <label>
            <input 
              type="number" 
              step="1"
              min="0" 
              max="59"
              value={minLat} 
              onChange={(e) => setMinLat(Number(e.target.value))}
              required  
            />
            ' 
          </label>
          <label>
            <input 
              type="number"  
              step="any"
              min="0" 
              max="59.9999"
              value={secLat} 
              onChange={(e) => setSecLat(Number(e.target.value))}
              required
            />
            ''
          </label>
          <select onChange={(e) => handleSignLat(e.target.value)}>
            <option>N</option>
            <option>S</option>
          </select>
        </div>
      </div>
      <div>
        <h6>Longitude</h6>
          <div>
            <label>
              <input 
                type="number"  
                max="180" 
                min="0" 
                value={degLon} 
                step="any"
                onChange={(e) => {setDegLon(Number(e.target.value))}}
                required
              />
              º
            </label>
            <label>
              <input 
                type="number" 
                step="1"
                min="0" 
                max="59"
                value={minLon} 
                onChange={(e) => {setMinLon(Number(e.target.value))}}
                required
              />
              ' 
            </label>
            <label>
              <input 
                type="number"  
                step="any"
                min="0" 
                max="59.9999"
                value={secLon} 
                onChange={(e) => {setSecLon(Number(e.target.value))}}
                required
              />
              ''
            </label>
            <select onChange={(e) => handleSignLon(e.target.value)}>
              <option>E</option>
              <option>W</option>
          </select>
          </div>
        </div>
      <button type="Submit"> Add location </button>
    </div>        
  </form>

  ); 
};

export default InputDMS;

