import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom"
import './navbar.css'
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";


let lang_option="";
function set_lang(){

    //lang_option= languges_selection.slice(languges_selection.indexOf(lang_seleced)+1).join(' ');
    //console.log(lang_option)
}


function Navbar() {
    let lang_seleced:string=JSON.stringify(localStorage.getItem("i18nextLng")).split('"').join('');
    let lang_option ='';

  const { t, i18n } = useTranslation('home');
  const onClickLanguageChange = (
  ) => {
      let storedLanguage = localStorage.getItem("i18nextLng");

      if (storedLanguage == 'ro') {

          i18n.changeLanguage("en");
          //change the language
      } else {

          i18n.changeLanguage("ro"); //change the language
      }
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);

    }
  }, [i18n]);

  const handleChange = (event: { target: { value: any; }; }) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  const pages = [t("navbar.projects"), t("navbar.shop"), t("navbar.about"), t("navbar.contact")];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
      <AppBar id='navbar-color' position="static">
        <Container id='navbar-style' maxWidth="xl">
          <Toolbar id='navbar-height' disableGutters>

            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
            >
              <img src='/images/white_logo.png' height={'20px'}/>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
              >
                <MenuIcon id='nav-meniu-icon'/>
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
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
              >

                  <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center"><Link className='nav-menu-button-large' to="/projects">{t("navbar.projects")}</Link></Typography>
                  </MenuItem><MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link className='nav-menu-button-large' to="/shop">{t("navbar.shop")}</Link></Typography>
              </MenuItem>
                  <MenuItem  onClick={handleCloseNavMenu}>
                      <Typography textAlign="center"><Link className='nav-menu-button-large' to="/about">{t("navbar.about")}</Link></Typography>
                  </MenuItem>
                  <MenuItem  onClick={handleCloseNavMenu}>
                      <Typography textAlign="center"><Link className='nav-menu-button-large' to="/contact">{t("navbar.contact")}</Link></Typography>
                  </MenuItem>


              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'none', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
            >
                <img src='/images/white_logo.png' height={'20px'}/>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                <Button className='nav-menu-button-large'
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link className='nav-menu-button-large' to="/projects">{t("navbar.projects")}</Link>
                </Button>
                <Button className='nav-menu-button-large'
                        sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link className='nav-menu-button-large' to="/store">{t("navbar.shop")}</Link>
                </Button>
                <Button className='nav-menu-button-large'
                        sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link className='nav-menu-button-large' to="/about">{t("navbar.about")}</Link>
                </Button>
                <Button className='nav-menu-button-large'
                        sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link className='nav-menu-button-large' to="/contact">{t("navbar.contact")}</Link>
                </Button>
                <Button
                    style={{
                        fontWeight: 200,
                        padding: 10
                    }}
                    onClick={onClickLanguageChange}

                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <b>{lang_seleced}</b> | {lang_option}

                </Button>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    <img src='/images/white_logo.png' height={'20px'}/>
                </Typography>
            </Box>

            <Box  sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton  onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar id='nav-avatar' alt="A" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}
export default Navbar;
