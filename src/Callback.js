import { useEffect } from 'react';
import Cookies from 'js-cookie';

function Callback() {
  useEffect(() => {
    const encodedUserInfo = Cookies.get('userinfo')
    if (encodedUserInfo) {
      sessionStorage.setItem("userInfo", encodedUserInfo);
    }
    Cookies.remove('userinfo');
    window.location.href = "/";
  }, []);
}

export default Callback;