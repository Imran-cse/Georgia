const axios = require('axios');

export const base_url = 'https://www.georgiaphonecase.com/wp-json/wp/v2/media';

// let base64 = require(base64);

let userName = 'ck_c52dde1216f4bb02c54ebbcbfe2a909d8af35f1b';
let passsword = 'cs_9cfe48601f5942550bd0e012d5ea6d3a96bb07a4';

const authParam = `consumer_key=${userName}&consumer_secret=${passsword}`;
// const endpoint = 'products/categories?search=featured-products&';

export const base_url2 = 'https://www.georgiaphonecase.com/wp-json/wc/v3/';

let headers = new Headers();

headers.append('Content-Type', 'application/json');
// headers.append('Authorization', 'Basic ' + userName + ':' + passsword);

// export async function request() {
//   try {
//     let response = await fetch(base_url, {
//       headers: headers,
//       mode: 'cors',
//       method: 'GET',
//       credentials: 'include',
//       redirect: 'follow'
//     });
//     let json = response.json();
//     console.log('res:', JSON.stringify(json));
//     return JSON.stringify(json);
//   } catch (error) {
//     console.log(error);
//   }
// }

export const config = {
  headers: headers,
  mode: 'cors',
  method: 'GET',
  credentials: 'include',
  redirect: 'follow',
};

export async function getCategory(endpoint) {
  return await fetch(base_url2 + endpoint + authParam, config)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
}

export async function request() {
  let response = await fetch(base_url, {
    headers: headers,
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
    redirect: 'follow',
  })
    .then(res => res.json())
    .then(
      data => {
        // let media = JSON.stringify(data);
        // console.log('media', media);
        // console.log(data[0])
        data.map((item, index) => {
          if (item.slug.includes('banner')) {
            console.log(item.guid.rendered);
            return item.guid.rendered;
          }
        });
        return data;
      },
      // return JSON.stringify(data);
    )
    .catch(err => console.log(err));
}

// export async function request({ method = 'get', endpoint = null, data }) {
//   try {
//     const token = await getToken();
//     const headers = {};
//     headers['Content-Type'] = 'application/json';
//     // headers['Authorization'] = 'Basic ' + userName + ':' + passsword;
//     const config = {
//       method,
//       url: base_url,
//       auth: { usernam: userName, passsword: passsword },
//     };
//     config.headers = headers;
//     console.log(config);
//     const req = await axios(config);
//     console.log(req);
//     // return {
//     //   err: null,
//     //   data: req.data,
//     // };
//   } catch (err) {
//     // handle err
//     console.log(err);
//     // return {
//     //   err,
//     //   data: null,
//     // };
//   }
// }
