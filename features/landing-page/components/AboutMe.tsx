// Dependencies
import React from 'react';

// MUI Components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Hooks / Helpers
import useIsMobileWidth from 'hooks/useIsMobileWidth';

export type AboutMeProps = {
};

const AboutMe: React.FC = () => {
  const mobile = useIsMobileWidth();
  return (
    <Box sx={{
      height: '100vh',
    }}>
      <Grid
        container
        sx={{
          maxWidth: 1200,
          margin: 'auto',
          height: '100vh',
          display: 'flex',
          paddingTop: '10%'
        }}>
        <Grid item xs={12} md={6} sx={
          mobile && {
            textAlign: 'center',
          }
        }>
          <Box
            component="img"
            sx={{
              height: 300,
              width: 300,
              objectFit: 'cover',
              objectPosition: 'top',
              borderRadius: '50%',
            }}
            alt="Photo of me"
            src="/static/me.jpg"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2">
            About me
          </Typography>
          <Typography color="text.secondary" variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
      </Grid >
    </Box >
  )
}

export default AboutMe;