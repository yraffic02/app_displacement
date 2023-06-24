import { MyButton } from '@/components/Button/MyButton';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { inputSx, style } from '../style';
import { IClient } from '@/types/types';
import { SubmitHandler, useForm } from 'react-hook-form';

export const Register = () => {
    const [open, setOpen] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IClient>()

    const onSubmit: SubmitHandler<IClient> = (data) => console.log(data)

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
                            {...register("numberDocument", { required: true })}
                        />
                        {
                            errors.numberDocument &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <TextField
                            id="standard-basic"
                            label="Tipo do documento"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("typeDocument", { required: true })}
                        />
                        {
                            errors.typeDocument &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <TextField
                            id="standard-basic"
                            label="Seu nome completo"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("name", { required: true })}
                        />
                        {
                            errors.name &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <TextField
                            id="standard-basic"
                            label="Logradouro"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("publicPlace", { required: true })}
                        />
                        {
                            errors.publicPlace &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <TextField
                            id="standard-basic"
                            label="Numero"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("number", { required: true })}
                        />
                        {
                            errors.number &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <TextField
                            id="standard-basic"
                            label="Bairro"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("district", { required: true })}
                        />
                        {
                            errors.district &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <TextField
                            id="standard-basic"
                            label="Cidade"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("city", { required: true })}
                        />
                        {
                            errors.city &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <TextField
                            id="standard-basic"
                            label="Uf"
                            variant="outlined"
                            sx={{ ...inputSx }}
                            {...register("state", { required: true })}
                        />
                        {
                            errors.state &&
                            <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
                        }
                        <MyButton type='secondary' name='Cadastrar' submitButton='submit'/>
                    </form>
                </Box>
            </Modal>
        </React.Fragment>
    )
}