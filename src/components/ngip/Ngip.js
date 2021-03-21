import React,{useState,Fragment} from 'react'
import TableUtil from './table/tableUtil'
import Polynomial from './table/Polynomial'
import classes from './Ngip.module.css';
import Form from './form/form'

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
        <div className={classes.Top}>
            
            <form className={classes.Form}
            onSubmit = {handleSubmit}>
               {
                <div className={classes.formrow}>
                   {!show?<Form
                    handleSubmit = {handleSubmit}
                    handleInputChange = {handleInputChange}
                    handleAddFields = {handleAddFields}
                    handleRemoveFields = {handleRemoveFields}
                    inputFields = {inputFields}
                    setInputFields = {setInputFields}
                   />:null}
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
