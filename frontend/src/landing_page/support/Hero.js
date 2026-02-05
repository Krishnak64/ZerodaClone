import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid mt-4" id="supportHero">

            <div className="p-5 mt-3" id="supportWrapper">
                <h4 >Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>
            <div className="row p-5 m-3 " >
                <div className="col-6 p-5" >
                    <h1 className='fs-3 mb-4'>Search for an answer or browser help topics to create a ticket</h1>
                    <input placeholder='Eg. how  do I activate F&O, why is my order getting rejected..' className='mb-3'/><br/>
                    <a href=''>Trck account opening</a>
                    <a href=''>Track activation</a>
                    <a href=''>Intraday margin</a>
                    <a href=''>Kite user manual</a>
                </div>
                <div className="col-6 p-5 " >
                    <h1 className='fs-3'>Features</h1> 
                    <ol className='mt-2'>
                        <li className='mt-2'><a href='' >Current Takeoverss and Delisting - January 2024</a></li>
                        <li className='mt-2'><a href='' >Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
      </section>
     );
}

export default Hero;