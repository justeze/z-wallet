import Axios from 'axios';

export const authLogin = (data) => {
  return Axios.post(`http://192.168.0.4:9000/auth/login`, data);
}

export const authRegister = (data) => {
  return Axios.post(`http://192.168.0.4:9000/auth/register`, data);
}

export const updateUser = (username, password, pin, image, email) => {
  let data = new FormData();
  if (username !== null) {
    data.append('username', username);
  } else if (password !== null) {
    data.append('password', password);
  } else if (pin !== null) {
    data.append('pin', pin);
  } else if (image !== null) {
    data.append('avatar', {
      uri: `file://${image.path}`,
      type: image.type,
      name: image.fileName,
      size: image.fileSize,
    });
  }
  data.append('email', email);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };
  // console.log(data)
  const url = 'http://192.168.0.4:9000/auth/update';
  return Axios.patch(url, data, config);
};