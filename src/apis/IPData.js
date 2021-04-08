import React from 'react';
import IPData from 'ipdata';

const IPInformation = () => {
    const ipdata = new IPData(`${process.env.REACT_APP_IPDATA_KEY}`);
    console.log('before');
    const ip = ipdata.lookup()
  .then(function(info) {
    // info.ip === '<hostcomputerip>'
    // ...
  });
  console.log('after');
  console.log(ip);

    return(
        <div>
            This is the IP information: 
        </div>

    );

}
export default IPInformation;