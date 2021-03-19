import React,{useState,Fragment} from 'react'
import TableUtil from './table/tableUtil'
import Polynomial from './table/Polynomial'

export default function Ngip() {
    //state variables
    
    const [inputFields,setInputFields] = useState([{x:'',y:''}])
    const [n,setN] = useState(0);
    const [load,setLoad] = useState(false)
    const [show,setShow] = useState(false)
 
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(inputFields);
        setLoad(true);
        setTimeout(()=>{
            setLoad(false);
            setShow(true);
        },200);
    }

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "x") {
          values[index].x = event.target.value;
        } else {
          values[index].y = event.target.value;
        }
        setInputFields(values);
      };
    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ x: '', y: '' });
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
            <Polynomial/>
            <form
            onSubmit = {handleSubmit}>
               {
                <div className="form-row">
                   {!show?inputFields.map((inputField, index) => (
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
                    )):null}
                    {!show?<div className="submit-button">
                        <button
                            className="btn btn-primary mr-2"
                            type="submit"
                            onSubmit={handleSubmit}
                        >
                            Calculate
                        </button>
                    </div>:null}
                </div>
               }
            </form>
            <TableUtil 
                n={n} 
                dataX={inputFields.map((elem,i)=>{return parseFloat(elem.x)})} 
                dataY={inputFields.map((elem,i)=>{return parseFloat(elem.y)})} 
                show={show}>
            </TableUtil>
        </div>
    )
}
