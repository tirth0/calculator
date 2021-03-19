import React,{useState,useEffect,useRef,Fragment} from 'react'
import TableUtil from './table/tableUtil'

export default function Ngip() {
    //state variables
    
    const dataX = [0,0.25,0.50,0.75,1.00]
    const dataY = [1,1.5314,2.1281,2.7984,3.5597]
    const [inputFields,setInputFields] = useState([{x:0,y:0}])
    const [n,setN] = useState(0);
    const [load,setLoad] = useState(false)
    const [show,setShow] = useState(false)
 
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(inputFields);
        setLoad = true;
        setTimeout(()=>{
            
        });
    }

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "x") {
          values[index].x = parseInt(event.target.value,10);
        } else {
          values[index].y = parseInt(event.target.value,10);
        }
        setInputFields(values);
      };
    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ x: 0, y: 0 });
        setInputFields(values);
        setN(n+1);
      };
    
    const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
        setN(n-1);
      };

    
    return (
        <div>
            <form
            onSubmit = {handleSubmit}>
               {
                <div className="form-row">
                   {inputFields.map((inputField, index) => (
                     <Fragment key={`${inputField}~${index}`}>
                       <div className="form-group col-sm-6">
                         <label htmlFor="x">X value</label>
                         <input
                           type="text"
                           className="form-control"
                           id="x"
                           name="x"
                           value={inputField.x}
                           onChange={event => handleInputChange(index, event)}
                         />
                       </div>
                       <div className="form-group col-sm-4">
                         <label htmlFor="y">Y value</label>
                         <input
                           type="text"
                           className="form-control"
                           id="y"
                           name="y"
                           value={inputField.y}
                           onChange={event => handleInputChange(index, event)}
                         />
                       </div>
                       <div className="form-group col-sm-2">
                         <button
                           className="btn btn-link"
                           type="button"
                           onClick={() => handleRemoveFields(index)}
                         >
                           -
                         </button>
                         <button
                           className="btn btn-link"
                           type="button"
                           onClick={() => handleAddFields()}
                         >
                           +
                         </button>
                       </div>
                     </Fragment>
                    ))}
                    <div className="submit-button">
                        <button
                            className="btn btn-primary mr-2"
                            type="submit"
                            onSubmit={handleSubmit}
                        >
                            Calculate
                        </button>
                    </div>
                </div>
               }
            </form>
            
        </div>
    )
}
