import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button } from '@mui/material';
import { Tooltip, MenuItem, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const pages = [<Link to="/" style={{textDecoration: 'none', color: 'white', backgroundColor: 'black'}}>Home</Link>, 
<Link to="/courses" style={{textDecoration: 'none', color: 'white', backgroundColor: 'black'}}>Courses</Link>, 
<Link to="/blog" style={{textDecoration: 'none', color: 'white', backgroundColor: 'black'}}>Blog</Link>, 
<a href="https://yorafa.com/" style={{textDecoration: 'none', color: 'white', backgroundColor: 'black'}}>CNBlog</a>];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Paper sx={{ position: 'flex', top: 0, left: 0, right: 0 }} elevation={10}>
    <AppBar position="fixed" style={{
        backgroundColor: 'black',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Click to Home Page">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://yorafa.com/wp-content/uploads/2022/01/cropped-僕～-150x150-1.png" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Paper>
  );
}
export default ResponsiveAppBar;