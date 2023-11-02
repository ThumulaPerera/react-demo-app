import Typography from '@mui/joy/Typography';

import LoginButton from './LoginButton';
import LogoutButton from "./LogoutButton";

const appName = window?.config?.appName ? window?.config?.appName : 'Managed Authentication';

const Navbar = ({ isLoggedIn }) => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", marginTop: "20px" }}>
            <div style={{ paddingLeft: "1em" }}>
                <Typography level='h4'>{appName}</Typography>
            </div>
            <div style={{ marginLeft: "auto", paddingRight: "1em" }}>
                {isLoggedIn ?
                    <LogoutButton />
                    :
                    <LoginButton />
                }
            </div>
        </nav>
    );
};
export default Navbar;