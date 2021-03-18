import React,{useState} from 'react';


export default function Table({n,dataX,dataY}) {
    //state
    const [grid,setGrid] = useState(new Array(n+1).fill(new Array(n).fill(0)));

    const constructTable = ()=>{
        let tbl = grid;
        tbl[0] = dataX;
        tbl[1] = dataY;
        for (let i=1;i<n;i++){
            for (let j=0;j<n+1-i;i++){
                try{
                    tbl[i+1][j] = tbl[i][j]-tbl[i][j+1];
                }
                catch(err){
                    console.log(i+"ERROR"+j)
                }
            }
        }
        console.log(tbl)
        setGrid(tbl);
    }

    return (
        <div>
            <button onClick = {()=>{constructTable()}}>Click</button>
        </div>
    )
}
