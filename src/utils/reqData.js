import Axios from 'axios';

export const getUsers = () => {
  return Axios.get('http://192.168.0.5:9000/user/');
};

export const getUserSearch = (username) => {
  return Axios.get(`http://192.168.0.5:9000/user/?username=${username}&page=1&limit=6`);
};

export const authLogin = (data) => {
  return Axios.post(`http://192.168.0.5:9000/auth/login`, data);
}

export const authRegister = (data) => {
  return Axios.post(`http://192.168.0.5:9000/auth/register`, data);
}
// export const authPinConf = (data) => {
//   return Axios.post(`http://192.168.0.5:9000/auth/getpin`, data);
// }

export const updateUser = (username, password, pin, image, email) => {
  let data = new FormData();
  if (username !== null) {
    data.append('username', username);
  } else if (password !== null) {
    data.append('password', password);
  }
  else if (image !== null) {
    data.append('avatar', {
      uri: `file://${image.path}`,
      type: image.type,
      name: image.fileName,
      size: image.fileSize,
    });
  }
  data.append('email', email);
  data.append('pin', pin);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },

  };
  return Axios.patch('http://192.168.0.5:9000/auth/update', data, config);
};

export const transactionTransfer = (data) => {
  return Axios.post(`http://192.168.0.5:9000/transaction/send`, data);
}

export const getEmail = (data) => {
  return Axios.post('http://192.168.0.5:9000/auth/getEmail', data)
}

export const resetPassword = (data) => {
  return Axios.patch('http://192.168.0.5:9000/auth/resetPassword', data)
}

export const history = (id) => {
  return Axios.get(`http://192.168.0.5:9000/transaction/history/${id}`)
}

export const getBalance = (id) => {
  return Axios.get(`http://192.168.0.5:9000/auth/getBalance/${id}`)
}

export const getQuickAccess = (id) => {
  return Axios.get(`http://192.168.0.5:9000/user/quickAccess/?id=${id}`)
}

export const changePassword = (id, data) => {
  return Axios.patch(`http://192.168.0.5:9000/auth/changepwd/?id=${id}`, data)
}

export const changePin = (id, data) => {
  return Axios.patch(`http://192.168.0.5:9000/auth/changepin/?id=${id}`, data)
}