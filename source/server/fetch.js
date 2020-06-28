const axios = require('axios');

export const base_url = 'https://www.georgiaphonecase.com/wp-json/wp/v2/media';

export const wp_url = 'https://www.georgiaphonecase.com/wp-json/wp/v2/';

// let base64 = require(base64);

let userName = 'ck_c52dde1216f4bb02c54ebbcbfe2a909d8af35f1b';
let passsword = 'cs_9cfe48601f5942550bd0e012d5ea6d3a96bb07a4';

const authParam = `consumer_key=${userName}&consumer_secret=${passsword}`;
// const endpoint = 'products/categories?search=featured-products&';

export const base_url2 = 'https://www.georgiaphonecase.com/wp-json/wc/v3/';

let headers = new Headers();

headers.append('Content-Type', 'application/json');
// headers.append('Authorization', 'Basic ' + userName + ':' + passsword);

export const config = {
  headers: headers,
  mode: 'cors',
  method: 'GET',
  credentials: 'include',
  redirect: 'follow',
};

let authConfig = {
  headers: headers,
  mode: 'cors',
  method: 'POST',
  credentials: 'include',
};

export async function login(username, password) {
  console.log(username, password);
  const data = { username, password };
  authConfig.body = JSON.stringify(data);
  console.log(authConfig);
  try {
    const response = await fetch(
      'https://www.georgiaphonecase.com/wp-json/jwt-auth/v1/token',
      authConfig,
    );
    return response;
  } catch (error) {
    console.log(err);
  }
}

export async function signup(data, endpoint) {
  console.log(data);
  authConfig.body = JSON.stringify(data);
  console.log(base_url2 + endpoint + authParam);
  console.log(authConfig);
  try {
    const respose = await fetch(base_url2 + endpoint + authParam, authConfig);
    return respose;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategory(endpoint) {
  console.log(base_url2 + endpoint + authParam);
  try {
    const respones = await fetch(base_url2 + endpoint + authParam, config);
    return respones;
  } catch (error) {
    console.log(error);
  }
}

export async function getBalance(endpoint, token) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'Bearer ' + String(token));
  let config = {
    headers: headers,
    mode: 'cors',
    method: 'GET',
    redirect: 'follow'
  };
  console.log(config);
  console.log(wp_url + endpoint);
  try {
    const respones = await fetch(wp_url + endpoint, config);
    return respones;
  } catch (error) {
    console.log(error);
  }
}

export async function createOrder(endpoint, data) {
  console.log('data', data);
  let config = {
    headers: headers,
    mode: 'cors',
    method: 'POST',
    credentials: 'include',
    redirect: 'follow',
  };
  config.body = JSON.stringify(data);
  console.log('config:', config);
  try {
    const respones = await fetch(base_url2 + endpoint + authParam, config);
    return respones;
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(token) {
  let headers = new Headers();
  headers.append('Authorization', 'Bearer ' + String(token));
  let config = {
    headers: headers,
    mode: 'cors',
    method: 'GET',
    redirect: 'follow',
  };
  console.log('getUser config: ', config);
  try {
    const response = await fetch(
      'https://www.georgiaphonecase.com/wp-json/wp/v2/users/me',
      config,
    );
    return response;
  } catch (error) {
    console.log(error);
  }
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
            // console.log(item.guid.rendered);
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
