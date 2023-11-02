import Typography from '@mui/joy/Typography';

import ApiResponse from './ApiResponse';


function LandingPage({ userInfo }) {

  if (!userInfo) {
    return (
      <div className="App">
        <Typography level='h6'>Welcome !</Typography>
        <br/>
        <br/>
        <Typography level='body1'>
          This sample demonstrates how to use Choreo Managed Authentication to secure a Single Page Web Application.
        </Typography>
        <Typography level='body1'>
          Click on the Login button on the top right corner to try out a Login flow.
        </Typography>
      </div>
    )
  }

  return (
    <div className="App">
      <Typography level='body1'>Welcome, {userInfo?.email} !</Typography>
      <br />
      <br />
      <Typography level='body1'>
        Voila! You have successfully logged in to the application. You should now be able to see your email along with the welcome message.
      </Typography>
      <ApiResponse />
    </div>
  );
}

export default LandingPage;