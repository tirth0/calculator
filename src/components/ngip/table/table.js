import React,{useState} from 'react';


export default function Table({n,dataX,dataY}) {
    //state
    const [grid,setGrid] = useState([]);

    const constructTable = ()=>{
        const tbl = []
        for (let i=0;i<=n;i++){
            if (i==0) {tbl[i] = [0,0.25,0.50,0.75,1.00].reverse();continue;}
            if (i==1) {tbl[i] = [1,1.5314,2.1281,2.7984,3.5597].reverse();continue}
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
