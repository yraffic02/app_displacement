'use client'
import { Button, Fab } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';

export default function Header() {
  return (
    <header className="flex justify-center items-center absolute top-0 z-50 w-screen p-4">
      <Button variant="contained">Contained</Button>
      <Fab variant="extended">
        <NavigationIcon />
      </Fab>
    </header>
  );
}