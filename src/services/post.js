import api from './api';
import jwt from 'jsonwebtoken';
import { getToken } from './auth';

export function getProducts(category, callback, errorcallback){
  api.post(`/shop/products?q=${category}`)
  .then(res => {
    if(callback != null){
       callback(res);
    }
  })
  .catch(err => {
    if(errorcallback != null){
       errorcallback(err);
    }
  })
}
export function getStatus(callback, errorcallback){
  api.post(`/shop/status`)
  .then(res => {
    if(callback != null){
       callback(res);
    }
  })
  .catch(err => {
    if(errorcallback != null){
       errorcallback(err);
    }
  })
}

export function getDashboardStatus(callback, errorcallback){
  const data = jwt.decode(localStorage.getItem('@redyydev'));
  const id = data.id
  api.post(`/dashboard/get_products/` + id)
  .then(res => {
    if(callback != null){
       callback(res);
    }
  })
  .catch(err => {
    if(errorcallback != null){
       errorcallback(err);
    }
  })
}

export function getUsers(callback, errorcallback){
  api.post(`/auth/users`)
  .then(res => {
    if(callback != null){
       callback(res);
    }
  })
  .catch(err => {
    if(errorcallback != null){
       errorcallback(err);
    }
  })
}

export function getAdmin(callback, errorcallback){
  const id = '5f028038ada3721c7c8a0648'
  api.post(`/auth/admin/`+ id)
  .then(res => {
    if(callback != null){
      if (res.data.admin){
        callback(true);
      } else {
        callback(false);
      }
    }
  })
  .catch(err => {
    if(errorcallback != null){
       errorcallback(err);
    }
  })
}

export function isValido(callback, errorcallback){
  const token = getToken();
  api.post(`/dashboard`, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
  })
  .then(res => {
    console.log(res)
    if(callback != null){
        callback(res.data);
    }
  })
  .catch(err => {
    if(errorcallback != null){
       errorcallback(err);
    }
  })
}