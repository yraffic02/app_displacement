import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { style, inputSx } from './style';
import { useGlobalContext } from '@/app/Context/store';
import { TextField } from '@mui/material';
import { MyButton } from '../Button/MyButton';
import { Logo } from '../Logo/Logo';
import { useForm, SubmitHandler } from "react-hook-form"
import { ILoginInput } from '@/types/types';


function ChildModal() {
  const [open, setOpen] = React.useState(false);

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
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const { isOpen, toggleModal } = useGlobalContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>()

  const onSubmit: SubmitHandler<ILoginInput> = (data) => console.log(data)

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={toggleModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <Logo />
          <form
            className='flex flex-col items-center justify-center w-full gap-2'
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              id="standard-basic"
              label="Seu login"
              variant="outlined"
              sx={{ ...inputSx }}
              {...register("login", { required: true })}
            />
            {
              errors.login &&
              <span className='text-red-600'>Você deve preencher o login</span>
            }
            <TextField
              id="outlined-password-input"
              label="Senha"
              type="password"
              autoComplete="current-password"
              sx={{ ...inputSx }}
              {...register("password", { required: true })}
            />
            {
              errors.login &&
              <span className='text-red-600'>Você deve preencher sua senha</span>
            }
            <MyButton type='secondary' name='Login' submitButton='submit' />
          </form>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}