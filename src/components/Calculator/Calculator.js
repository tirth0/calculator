import React,{useState} from 'react';
import Button from './Button';

export default function Calculator() {
    const functions = useState([
        {
            name : 'sqrt',
            proto : Math.sqrt
        },
        {
            name : 'sin',
            proto : Math.sin
        },
        {
            name : 'cos',
            proto : Math.cos
        },
        {
            name : 'ln',
            proto : Math.log
        },
        {
            name : 'log',
            proto : Math.log10
        },
        {
            name : 'tan',
            proto : Math.tan
        },
        {
            name : 'atan',
            proto : Math.atan
        },
        {
            name : 'asin',
            proto : Math.asin
        },
        {
            name : 'acos',
            proto : Math.acos
        },
        
    ]);
    const Numbers  = useState([
        {
            key : '0',
            value : 0
        },
        {
            key : '1',
            value : 1
        },
        {
            key : '2',
            value : 2
        },
        {
            key : '3',
            value : 3
        },
        {
            key : '4',
            value : 4
        },
        {
            key : '5',
            value : 5
        },
        {
            key : '6',
            value : 6
        },
        {
            key : '7',
            value : 7
        },
        {
            key : '8',
            value : 8
        },
        {
            key : '9',
            value : 9
        },
    ]);

    const operations = useState([
        '+','-','*','/','=','C','D'
    ]);

    return (
        <div>
            
        </div>
    )
}
