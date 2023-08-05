// 'use client'
// import React from 'react'
// const axios = require('axios');

// function Calls() {

//     const apiKey = '908410k743453a4d810523ea117b79a6080b89e';
//     const url = 'https://api.rocketreach.co/api/v2/person/lookup';
//     const linkedinUrl = 'https://www.linkedin.com/in/cjtufano';

//     const headers = {
//         'Api-Key': apiKey,
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`,
//         'Cookie': 'sessionid-20191028=n7pkcj6s76kbo8q8k54i3bppd6rphmca',
//     };

//     axios.get(url, {
//         params: {
//             linkedin_url: linkedinUrl,
//         },
//         headers: headers,
//     })
//         .then((response: any): any => {
//             // Handle the API response here
//             console.log('API Response:', response.data);
//         })
//         .catch((error: any): any => {
//             // Handle errors here
//             console.error('Error:', error);
//         });
//     return (
//         <div>Calls</div>
//     )
// }

// export default Calls

import React from 'react'

function Page() {
  return (
    <div>Page</div>
  )
}

export default Page