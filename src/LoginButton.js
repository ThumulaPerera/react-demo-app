import Button from '@mui/joy/Button';

function LoginButton() {
    return (
        <a href={"/auth/login"}>
            <Button>Login</Button>
        </a>
    );
}

export default LoginButton;