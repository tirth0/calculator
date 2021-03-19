import React from 'react'
import {Table as Tbl} from 'react-bootstrap';
export default function Table({grid,fwdPoly,bkwdPoly}) {
    
    const table = grid.map((row,i,g)=>{
        return <tr key={i}>
            {
            row.map((num,j,r)=>{
                return <td key={j}>{num}</td>
            })
            }
        </tr>
    });
    return (
        <div>
            Hulloa
            <Tbl striped bordered hover size="sm">
                <tbody>
                {table}
                </tbody>
            </Tbl>
        </div>
    )
}
