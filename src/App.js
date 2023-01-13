import './App.css';
import ResponsiveAppBar from './component/nav';
import { Outlet } from 'react-router-dom';
import Footer from './component/footer';
import { React } from 'react';
import 'katex/dist/katex.min.css';
import { Container, Box, Stack, styled } from '@mui/material';
import ControlledOpenSpeedDial from './component/dial';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5),
}));

function App() {
  return (
    <Box sx={{ width: '100%' }}>
      <ControlledOpenSpeedDial />
      <Stack spacing={1}>
        <Item><ResponsiveAppBar /></Item>
        <Item>
          <Container maxWidth="md">
            <Outlet />
          </Container>
        </Item>
        <Item>
          <Footer />
        </Item>
      </Stack>
    </Box>
  );
}

export default App;
