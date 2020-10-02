import Axios from 'axios';

export const getUsers = () => {
  return Axios.get('http://192.168.0.4:9000/');
};

export const getUserSearch = (username) => {
  return Axios.get(`http://192.168.0.4:9000/?username=${username}&page=1&limit=6`);
};

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
  return Axios.patch('http://192.168.0.4:9000/auth/update', data, config);
};

export const transactionTransfer = (data) => {
  return Axios.post(`http://192.168.0.4:9000/transaction/send`, data);
}