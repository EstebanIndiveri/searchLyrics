import React,{Fragment} from 'react'


const Cancion = ({letra}) => {
    
   if(letra.length===0)return null;

   //console.log(letra);
    return( 
        <Fragment>
        
        <h2>Letra Cación</h2>
            <p className="letra">{letra}</p>
        </Fragment>
     );
    }
 
export default Cancion;