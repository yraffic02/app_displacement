import { MyButton } from '@/components/Button/MyButton';
import { IClient } from '@/types/types';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { inputSx, style } from '../style';
import { api } from '@/services/api';

export const Register = () => {
    const [open, setOpen] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IClient>()

    const onSubmit: SubmitHandler<IClient> = async (data) => {
        try {
          const res = await api.post('/api/v1/Cliente', data) 

          if(res.status === 200){
            alert('usuario cadastrado!')
            handleClose()
          }
        
        } catch (error) {
            alert('error serve 500!')
        }
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <MyButton type='primary' name='Faca seu cadastro!' onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style }}>
                    <h1>Cadastro</h1>
                    <form
                        className='flex flex-col items-center justify-center w-full gap-2'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextField
                            id="standard-basic"
                            label="Numero do documento"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("numeroDocumento", { required: true })}
                        />
                        {
                            errors.numeroDocumento &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <TextField
                            id="standard-basic"
                            label="Tipo do documento"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("tipoDocumento", { required: true })}
                        />
                        {
                            errors.tipoDocumento &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <TextField
                            id="standard-basic"
                            label="Seu nome completo"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("nome", { required: true })}
                        />
                        {
                            errors.nome &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <TextField
                            id="standard-basic"
                            label="Logradouro"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("logradouro", { required: true })}
                        />
                        {
                            errors.logradouro &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <TextField
                            id="standard-basic"
                            label="Numero"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("numero", { required: true })}
                        />
                        {
                            errors.numero &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <TextField
                            id="standard-basic"
                            label="Bairro"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("bairro", { required: true })}
                        />
                        {
                            errors.bairro &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <TextField
                            id="standard-basic"
                            label="Cidade"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("cidade", { required: true })}
                        />
                        {
                            errors.cidade &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <TextField
                            id="standard-basic"
                            label="Uf"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("uf", { required: true })}
                        />
                        {
                            errors.uf &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <MyButton type='secondary' name='Cadastrar' submitButton='submit'/>
                    </form>
                </Box>
            </Modal>
        </React.Fragment>
    )
}