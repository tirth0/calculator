import React,{useState} from 'react';


export default function Table({n,dataX,dataY}) {
    //state
    const [grid,setGrid] = useState([]);

    const constructTable = ()=>{
        const tbl = []
        for (let i=0;i<=n;i++){
            if (i==0) {tbl[i] = dataX.reverse();continue;}
            if (i==1) {tbl[i] = dataY.reverse();continue}
            else tbl[i] = []
            for (let j=0;j<n-i+1;j++){
                tbl[i][j] = tbl[i-1][j] - tbl[i-1][j+1]
            }
        }
        console.log(tbl)
        setGrid(tbl);
        console.log(grid)
    }

    return (
        <div>
            <button onClick = {()=>{constructTable()}}>Click</button>
        </div>
    )
}
