import React,{useState} from 'react';
import Table from './Table';
import {rotate270} from "2d-array-rotation";


export default function TableUtil({n,dataX,dataY}) {
    //state
    const [grid,setGrid] = useState([]);
    const [fwdPoly,setFwdPoly] = useState([]);
    const [bkwdPoly,setBkwdPoly] = useState([]);
    const [disp,setDisp] = useState(false)
    const constructTable = ()=>{
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
        setDisp(!disp)
    }

    
    return (
        <div>
            
            <Table grid={grid} fwdPoly={fwdPoly} bkwdPoly={bkwdPoly} n={n}></Table>
        </div>
    )
}
