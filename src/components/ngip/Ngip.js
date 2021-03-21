import React,{useState,Fragment} from 'react'
import TableUtil from './table/tableUtil'
import Polynomial from './table/Polynomial'
import classes from './Ngip.module.css';
import Form from './form/form'
import Loader from "react-loader-spinner";
import {rotate270} from "2d-array-rotation";
import Table from './table/Table';

export default function Ngip() {
    //state variables
    
    const [inputFields,setInputFields] = useState([{x:'',y:''}])
    const [n,setN] = useState(0);
    const [load,setLoad] = useState(false)
    const [show,setShow] = useState(false)
    const [grid,setGrid] = useState([]);
    const [fwdPoly,setFwdPoly] = useState([]);
    const [bkwdPoly,setBkwdPoly] = useState([]);
    const [disp,setDisp] = useState(false)

    
    
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

    
    const constructTable = (dataX,dataY)=>{
        const tbl = []
        for (let i=0;i<=n+1;i++){
            if (i===0) {tbl[i] = dataX.reverse();continue;}
            if (i===1) {tbl[i] = dataY.reverse();continue}
            else tbl[i] = []
            for (let j=0;j<=n-i+1;j++){
                tbl[i][j] = tbl[i-1][j] - tbl[i-1][j+1]
            }
            for (let j=n-i+2;j<n;j++){
                tbl[i][j] = 0;
            }
        }
        
        const fwd = []
        const bkwd = []
        for (let i=2;i<=n;i++){
            fwd.push(tbl[i][n-i])
            bkwd.push(tbl[i][0])
        }
        // const tbl2 = _.zip(...tbl)
        console.log(fwd)
        console.log(bkwd)
        const tbl2 = rotate270(tbl)
        setGrid(tbl2);
        setFwdPoly(fwd);
        setBkwdPoly(bkwd);
        console.log(tbl2);
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      const dataX = inputFields.map((elem,i)=>{return parseFloat(elem.x)});
      const dataY = inputFields.map((elem,i)=>{return parseFloat(elem.y)})
      console.log(inputFields);
      constructTable(dataX,dataY);
      setLoad(true);
      setShow(true);
      setTimeout(()=>{
          setLoad(false);
          
      },1000);
  }
    
    return (
        <div className={classes.Top}>
            <h2>Newton Gregory Forward and Backward Interpolation</h2>
            {!show?
            <div className={classes.formC}>
            <p>Enter the X and Corresponding Y values to generate the Newton Polynomial</p>
              <form className={classes.Form}
                onSubmit = {handleSubmit}>
                    <div className={classes.formrow}>
                      
                        <Form
                          handleSubmit = {handleSubmit}
                          handleInputChange = {handleInputChange}
                          handleAddFields = {handleAddFields}
                          handleRemoveFields = {handleRemoveFields}
                          inputFields = {inputFields}
                          setInputFields = {setInputFields}
                          n={n}
                        />
                        <div className={classes.submitButton}>
                            <button
                                className="btn btn-primary mr-2"
                                type="submit"
                                onSubmit={handleSubmit}
                            >
                                Calculate
                            </button>
                        </div>
                  </div>
              </form>
            </div>:null}
            {load?
            <div className={classes.Loader}>
            <Loader
                type="GRID"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            /></div>:null}
            {show && !load?
            <div className={classes.Table}>
              <Table
                grid = {grid}
                fwdPoly = {fwdPoly}
                bkwdPoly= {bkwdPoly}
                n={n}
              />
            </div>:null}
      </div>
    )
}
