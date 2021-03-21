import React from 'react'
import {Table as Tbl} from 'react-bootstrap';
export default function Table({grid,fwdPoly,bkwdPoly,n}) {
    const table = grid.map((row,i,g)=>{
        return <tr key={i}>
            {
            row.map((num,j,r)=>{
               
                return <td key={j}>{num}</td>
            })
            }
        </tr>
    });
    const h = Array(n+2).fill(0);
    const head = h.map((elem,i)=>{
        if (i===0) return <th key={i}>x</th>
        if (i===1) return <th key={i}>y</th>
        else{
            return <th key={i}>&Delta;{(i-2)===0?'':<sup>{i-1}</sup>}y</th>
        }
    })
    return (
        <div>
            
            <Tbl striped bordered hover size="sm">
                <thead>
                    <tr>
                        {head}
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </Tbl>
        </div>
    )
}
