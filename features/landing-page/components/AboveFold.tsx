import React from 'react';

import Header from 'components/Header';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';

export type AboveFoldProps = {
};

const AboveFold: React.FC = () => {
  return (
    <Box sx={{
      height: '100vh',
    }}>
      <Header />
      <Box sx={{
        width: 'calc(100vw - 100px)',
        margin: 'auto',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        pb: '200px',
        justifyContent: 'center',
      }}>
        <Typography color="text.primary" variant="h1">Landon Marshall</Typography>
        <Typography color="text.secondary" variant="h6">Software Engineer // Victoria, BC </Typography>
        <Container disableGutters sx={{
          ml: 0,
        }}>
          <IconButton
            href="https://github.com/LandonMarshall"
            target="_blank"
            sx={{ color: 'white' }}
            aria-label="Github"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/landon-marshall-52210a176/"
            target="_blank"
            sx={{ color: 'white' }}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <Button href="/resume.pdf" download="resume" variant="text" sx={{color: 'white'}} startIcon={<DownloadIcon />}>
            Resume
          </Button>
        </Container>
      </Box >
    </Box>
  )
}

export default AboveFold;