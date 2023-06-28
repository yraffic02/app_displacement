'use client'
import { useGlobalContext } from '@/app/Context/store';
import { Avatar, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { MyButton } from '../Button/MyButton';
import { Logo } from '../Logo/Logo';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  const names = name.split(' ');
  let children = '';

  if (names.length > 0) {
    children = names[0][0];

    if (names.length > 1) {
      children += names[1][0];
    }
  }

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children,
  };
}
export default function ButtonAppBar() {
  const { toggleModal, userName } = useGlobalContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const logout = () =>{
    localStorage.clear()
    handleClose()
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', aligngItems: 'center' }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'whitesmoke',
        }}
      >
        <Toolbar sx={{ gap: '1rem' }}>
          <Logo />
          {
            localStorage.getItem('isLogged') ?
                <Avatar
                  {...stringAvatar(userName)}
                  onClick={handleClick}
                />
              :
              <MyButton type='primary' name='Fazer login' onClick={toggleModal} />
          }
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Conta</MenuItem>
            <MenuItem onClick={logout}>sair</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}