import React , {useState} from 'react';
import axios from 'axios';
import IPData from 'ipdata';

/* const IPInformation = () => {
    const IPAddress = '';

    const ipdata = new IPData(`${process.env.REACT_APP_IPDATA_KEY}`);
    console.log('before lookup');
    const ip = '1.1.1.1';
    ipdata.lookup(ip)
      .then((info) => {
    // info.ip === '<hostcomputerip>'
    // ...
    IPAddress = info.ip;
    console.log(info);

  });
  console.log('after');
  console.log(IPAddress);

  return IPAddress;
}

export default IPInformation;
 */
/*
$.get("https://api.ipdata.co?api-key=test", function(response) {
    console.log(response.ip);
}, "jsonp");
*/

/* const search = async () => {
  await axios.get(`https://api.ipdata.co?api-key=${process.env.REACT_APP_IPDATA_KEY}`, {});

  setResults(data.query.search);
}; */

const IPInformation = () => {
  console.log("IM RIGHTE HRERE1");
  var IPAddress = '';
  const response =  axios.get(`https://api.ipdata.co?api-key=${process.env.REACT_APP_IPDATA_KEY}`, function(response) {
      console.log("inside")
      IPAddress = response.ip;

    }, "jsonp");
    console.log("IM RIGHTE HRERE2");
    console.log(response.ip);
    console.log("IM RIGHTE HRERE3");

  
  return response.ip;

/* console.log('after');
console.log(IPAddress); */


}

export default IPInformation;