import React from 'react';
import { useNavigate } from 'react-router-dom'

function Universe() {
  const navigate = useNavigate();
    return ( 
      
        <div className='container mt-5'>
           <div className="row text-center">
              <h1>The Zerodha Universe</h1>
              <p className='fs-4 text-muted' style={{marginTop: "40px"}}>Extend your trading and investment experience even further with our partner platforms</p>
              
              <div className='col-4 p-3 mt-5'>
                <img src="media/images/smallcaseLogo.png"/>
                <p className='text-samll text-muted mt-3'>Thematic investing platform </p>
              </div>

              <div className='col-4 p-3 mt-5'>
                <img src="media/images/zerodhaFundhouse.png" style={{width: "50%"}}/>
                <p className='text-samll text-muted mt-3'>asset manager</p>
              </div>

              <div className='col-4 p-3 mt-5'>
                <img src="media/images/streakLogo.png" style={{width: "45%"}}/>
                <p className='text-samll text-muted mt-3'>Algo & strategy platform</p>
              </div>

              <div className='col-4 p-3 mt-5'>
                <img src="media/images/sensibullLogo.svg" style={{width: "45%"}}/>
                <p className='text-samll text-muted mt-3'>Options trading platform</p>
              </div>

              <div className='col-4 p-3 mt-5'>
                <img src="media/images/goldenpiLogo.png" />
                <p className='text-samll text-muted mt-3'>Bond trading platform</p>
              </div>

              <div className='col-4 p-3 mt-5'>
                <img src="media/images/dittoLogo.png" style={{width: "30%"}}/>
                <p className='text-samll text-muted mt-3'>Insurance</p>
              </div>
                <button className="p-2 btn btn-primary fs-5 mb-5" style={{width: "20%", margin: "0 auto", marginTop: "40px"}} onClick={() => {  navigate("/signup") 
                        }}>Signup Now</button>
           </div>
        </div>
     );
}

export default Universe;