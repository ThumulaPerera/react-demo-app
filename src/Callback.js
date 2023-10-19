import { useEffect } from 'react';
import Cookies from 'js-cookie';

function Callback() {
  useEffect(() => {
    const encodedUserInfo = Cookies.get('id_token')
    if (encodedUserInfo) {
      sessionStorage.setItem("userInfo", encodedUserInfo);
    }
    window.location.href = "/";
  }, []);
}

export default Callback;