import React from 'react';


function Brokerage() {
    return ( 
        <div className="container">

      <div className="row p-5 mt-5 text-center border-top" >    
            <div className="col-8 p-4">
                <a href="" style={{textDecoration: "none"}}><h3 className='fs-5'>Brokerage Calculator</h3></a>

                <ul style={{textAlign: "left", lineHeight: "2.5", fontSize: "13px"}} className='text-muted'>
                    <li>Call & Trade and RMS auto-squareoff:Additional charges of Rs.50 + GST per order.</li>
                    <li>Digital contract nootes will be sent via e-mail.</li>
                    <li>Physical copies of contracy notes, if required, shall be chaged Rs.20 per contract note. Courier changed apply.</li>
                    <li>For NRI account
                    (non-PIS), 0.5% or Rs.200 per executed order</li>
                    <li>for equity (whichever is lower).</li>
                    <li>If the account is in debit balanced, any order placed will be charged Rs. 40 per order instead of Rs. 20 per executed order.</li>
                </ul>
            </div>
            <div className="col-4 p-4">
                 <a href="" style={{textDecoration: "none"}}><h3 className='fs-5'>List of charges</h3></a>
            </div>
           
      </div>

    </div>
     );
}

export default Brokerage;