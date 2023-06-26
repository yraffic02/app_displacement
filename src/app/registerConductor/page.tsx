'use client'

import { MyButton } from "@/components/Button/MyButton"
import { IConductor, IVehicle } from "@/types/types"
import { TextField } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"

export default function RegisterConductor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IConductor & IVehicle>()

  const onSubmit: SubmitHandler<IConductor & IVehicle> = (data) => console.log(data)

  return (
    <main className="flex flex-col items-center justify-center">
      <form
        className="flex flex-col gap-2 p-4 w-4/5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Preencha seus dados</h1>
        <TextField variant="outlined" label="Nome" {...register("name", { required: true })} />
        {
          errors.name &&
          <span className='text-red-600'>Digite seu nome completo!</span>
        }
        <TextField variant="outlined" label="Numero da Habilitação" {...register("numberQual", { required: true })}/>
        {
          errors.numberQual &&
          <span className='text-red-600'>numero da sua habilitação</span>
        }
        <TextField variant="outlined" label="Categoria da sua Habilitação" {...register("categoryQual", { required: true })}/>
        {
          errors.categoryQual &&
          <span className='text-red-600'>é necessario informar a categoria</span>
        }
        <TextField variant="outlined" label="Venc. da Habilitação" {...register("maturityQual", { required: true })}/>
        {
          errors.maturityQual &&
          <span className='text-red-600'>vencimento da sua habilitação</span>
        }
        <h1>Seu Veiculo</h1>
        <TextField variant="outlined" label="Placa" {...register("plate", { required: true })}/>
        {
          errors.plate &&
          <span className='text-red-600'>placa do seu veículo!</span>
        }
        <TextField variant="outlined" label="Marca/Modelo" {...register("brandModel", { required: true })}/>
        {
          errors.brandModel &&
          <span className='text-red-600'>ditgite o modelo e marca do seu veículo!</span>
        }
        <TextField variant="outlined" label="Ano" type="number" {...register("yearManufacture", { required: true })}/>
        {
          errors.yearManufacture &&
          <span className='text-red-600'>ano de fabricção do seu veículo!</span>
        }
        <TextField variant="outlined" label="Km Atual" type="number" {...register("currentKm", { required: true })}/>
        {
          errors.currentKm &&
          <span className='text-red-600'>quilometragem atual do seu veículo!</span>
        }
        <MyButton type="secondary" name="Cadastrar" submitButton="submit" />
      </form>
    </main>
  )
}