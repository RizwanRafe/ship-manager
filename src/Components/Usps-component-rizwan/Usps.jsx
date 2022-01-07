import React from "react";
import "./Usps.css";

const Usps = () => {
  return (
    <div className="main">
      <h4>USPS</h4>
      <h4>Priority (1-3 Days)</h4>
      <p>Fadded Flat</p>
      <p>Rate Envelope</p>
      <p>Adult Singnature Required</p>
      <p>Base Rate</p>
      <p>Adult Singnature</p><hr />
      <h2>Total</h2>
      <p>Quoted Weight/Type(s)</p>
      1.481 ib/actual
     <p> Estimated Arrival Date</p>
      <h4>Tuesday,8/10/2021 5:00 pm</h4>
      <div className="Box">
      <h4> Did you Mean?</h4>
      <p>89-921 MAIAPOULA PL</p>
      <p>WAIANE,HI</p>
      <p>96792-3912</p>
      <button>USE USPS VERIFIED <br />
      ADDRESS</button>  <br /><br />
      <button>USE USPS VERIFIED <br />
      ADDRESS</button>


      </div>

    </div>
  );
};

export default Usps;
