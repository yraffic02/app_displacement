'use client'

import { MyButton } from "@/components/Button/MyButton"
import { TextField } from "@mui/material"

export default function RegisterConductor() {
  
  return (
    <main className="flex flex-col items-center justify-center">
        <form 
          className="flex flex-col gap-2 p-4"
        >
        <h1>Preencha seus dados</h1>
          <TextField variant="outlined" label="Nome"/>
          <TextField variant="outlined" label="Numero da Habilitação"/>
          <TextField variant="outlined" label="Categoria da sua Habilitação"/>
          <TextField variant="outlined" label="Venc. da Habilitação"/>
        <h1>Seu Veiculo</h1>
        <TextField variant="outlined" label="Placa"/>
          <TextField variant="outlined" label="Marca/Modelo"/>
          <TextField variant="outlined" label="Ano"/>
          <TextField variant="outlined" label="Km Atual"/>
          <MyButton type="secondary" name="Cadastrar" submitButton="submit"/>
        </form>
    </main>
  )
}