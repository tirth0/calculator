import React,{useState,useEffect} from 'react'
import Table from './table/tableUtil'

export default function Ngip() {
    //state variables
    const n = 5;
    const dataX = [0,0.25,0.50,0.75,1.00]
    const dataY = [1,1.5314,2.1281,2.7984,3.5597]
    return (
        <div>
            <Table n={n} dataX={dataX} dataY={dataY}/>
        </div>
    )
}
