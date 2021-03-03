import api from './api';

export function queryProduct(callback, errorcallback, name){
  api.post(`/shop/product?q=${name}`)
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
