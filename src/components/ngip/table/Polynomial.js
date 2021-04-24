import React,{useState} from 'react'
import Polynomial from 'polynomial/polynomial.js'

export default function NGPolynomial({n=5,bkwdPoly,h}) {
    const[poly] = useState();
    const constructPoly = ()=>{
        const a = new Array(n).fill(0);
        const p = [];
        const q = [];
        a.forEach((elem,ind)=>{
            if (ind>0){
                p.push([p.length,1])
            }
            else p.push([ind+1])
        })
        a.forEach((elem,ind)=>{
            if (ind>0){
                q.push([-q.length,1])
            }
            else q.push([ind+1])
        })
        console.log(bkwdPoly)
        const res = p.map((elem,ind)=>{
            let r1 = Polynomial(bkwdPoly[ind]);
            for (let i=0;i<=ind;i++){
                r1 = r1.mul(p[i]);
            }
            return r1;
        })
        
        console.log(res.toString())
          
    }

    
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
