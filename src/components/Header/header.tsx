'use client'
import { useGlobalContext } from '@/app/Context/store';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { MyButton } from '../Button/MyButton';
import { Logo } from '../Logo/Logo';
import { Avatar } from '@mui/material';

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
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function ButtonAppBar() {
  const { toggleModal, userName } = useGlobalContext()

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
            <Avatar {...stringAvatar(userName)} />
            :
            <MyButton type='primary' name='Fazer login' onClick={toggleModal} />
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}