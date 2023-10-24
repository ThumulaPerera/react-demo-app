import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import { myconfig } from './public/myconfig'

const appName = myconfig.appName;
const appDescription = myconfig.appDescription;

function LandingPage({ userInfo }) {
  let username = userInfo ? userInfo.email : "anonymous user";

  return (
    <div className="App">
      <Typography level='h3'>{appName}</Typography>
      <Typography level='body1'>{appDescription}</Typography>
      <Divider />
      <br />
      <Typography level='body1'>Welcome, {username} !</Typography>
    </div>
  );
}

export default LandingPage;