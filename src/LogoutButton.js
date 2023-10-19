import Button from '@mui/joy/Button';

function LogoutButton() {
    const startLogout = async () => {
        // remove tokens from session storage
        sessionStorage.clear();
        // redirect to oidc logout endpoint
        window.location.href = "/auth/logout"
    }

    return (
        <Button color='neutral' onClick={startLogout}>Logout</Button>
    );
}

export default LogoutButton;