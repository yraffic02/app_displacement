'use client'
import NavigationIcon from '@mui/icons-material/Navigation';
import { Button } from "@mui/material";

export default function Header() {
  return (
    <header className="flex justify-between items-center absolute top-0 z-50 w-screen p-4 bg-slate-200">
      <h1>Desloque-se <NavigationIcon /></h1>
      <div className="flex gap-2 ">
        <Button color="primary" variant="text">Fazer login</Button>
        <Button variant="outlined">Cadastre-se</Button>
      </div>
    </header>
  );
}