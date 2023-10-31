import Button from '@mui/joy/Button';
import Cookies from 'js-cookie';

function LogoutButton() {
    const startLogout = async () => {
        // remove userinfo from session storage
        sessionStorage.clear();
        // redirect to oidc logout endpoint
        window.location.href = `/auth/logout?session_hint=${Cookies.get('session_hint')}`
    }

    return (
        <Button color='neutral' onClick={startLogout}>Logout</Button>
    );
}

export default LogoutButton;