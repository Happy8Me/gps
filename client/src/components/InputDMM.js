
function InputDMM({
    degDMMLat, 
    setDegDMMLat, 
    degDMMLon, 
    setDegDMMLon, 
    minDMMLat, 
    minDMMLon,
    setMinDMMLat,
    setMinDMMLon, 
    handleSubmitDMM
}) {

    return (
        <form onSubmit={handleSubmitDMM}>
            <h3>Degrees Decimal Minutes</h3>       
            <div className="inputs">  
                <div>
                    <h6>Latitude</h6>
                    <div>
                        <label>
                            <input 
                                type="number" 
                                max="90" 
                                min="-90" 
                                value={degDMMLat} 
                                onChange={(e) => {setDegDMMLat(Number(e.target.value))}}
                                required
                            />
                            º
                        </label>
                        <label>
                            <input 
                                type="number" 
                                step="any"
                                min="0" 
                                max="59.9999"
                                value={minDMMLat} 
                                onChange={(e) => {setMinDMMLat(Number(e.target.value))}}
                                required
                            />
                            ' 
                        </label>
                    </div>
                </div>
                <div>
                    <h6>Longitude</h6>
                    <div>
                        <label>
                            <input 
                                type="number" 
                                max="180" 
                                min="-180" 
                                value={degDMMLon} 
                                onChange={(e) => {setDegDMMLon(Number(e.target.value))}}
                                required
                            />
                            º
                        </label>
                        <label>
                            <input 
                                type="number"  
                                step="any"
                                min="0" 
                                max="59.9999"
                                value={minDMMLon} 
                                onChange={(e) => {setMinDMMLon(Number(e.target.value))}}
                                required
                            />
                            ' 
                        </label>
                    </div>
                </div> 
                <button type="Submit"> Add location </button>
            </div>        
        </form>
    );
};
     
export default InputDMM;


    