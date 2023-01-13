import './App.css';
import ResponsiveAppBar from './component/nav';
import { Outlet } from 'react-router-dom';
import Footer from './component/footer';
import { React } from 'react';
import 'katex/dist/katex.min.css';
import { Container, Box, Paper, Stack, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

function App() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
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
