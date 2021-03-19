import React,{useState} from 'react'
import Polynomial from 'polynomial/polynomial.js'

export default function NGPolynomial({n=5,fwdPoly,bkwdPoly,h}) {
    const[poly,setPoly] = useState([]);
    const constructFactorial = ()=>{

    }
    const constructPoly = ()=>{
        const a = new Array(n).fill(0);
        const p = [];
        a.forEach((elem,ind)=>{
            if (ind>0){
                p.push([...p[ind-1],ind+1])
            }
            else p.push([ind+1])
        })
        console.log(p)
        console.log(Number.MAX_SAFE_INTEGER);
    }
    const[q,setQ] = useState()
    const p2 = Polynomial([0,1]);
    const p3=p2.mul(poly)
    console.log(p3)
    constructPoly()
    return (
        <div>
            {}
        </div>
    )
}
