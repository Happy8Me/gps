function InputDD({DDLat, setDDLat, DDLon, setDDLon, handleSubmitDD}) {
    return (
        <form onSubmit={handleSubmitDD}>
            <h3>Decimal Degrees</h3>
            <div className="inputs">
            <div>
                <h6>Latitude</h6>
                <div>
                    <label>
                        <input 
                            type="number" 
                            step="any"
                            max="90" 
                            min="-90" 
                            value={DDLat} 
                            onChange={(e) => {setDDLat(Number(e.target.value))}}
                            required
                        />
                        º
                    </label>
                </div>
            </div>
            <div>
                <h6>Longitude</h6>
                <div>
                    <label>
                        <input 
                            type="number" 
                            step="any" 
                            max="180" 
                            min="-180" 
                            value={DDLon} 
                            onChange={(e) => {setDDLon(Number(e.target.value))}}
                            required
                        />
                        º
                    </label>
                </div>
            </div>
            <button type="Submit"> Add location </button>
            </div>
        </form>
    );
};
    
export default InputDD;


    