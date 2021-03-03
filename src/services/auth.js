import api from './api';
import { useHistory } from 'react-router';
import { store } from 'react-notifications-component';
//
export const TOKEN_KEY = "@newsoul";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export default async function Verify(token) {
  let history = useHistory()
  await api.post('/dashboard', {
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  }).catch(function (){
    history.push('/login')
    logout()
    store.addNotification({
      title: "ERRRO",
      message: "Token Invalido, por favor volta a fazer login.",
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2500,
        onScreen: true
      }
    });
  })
}