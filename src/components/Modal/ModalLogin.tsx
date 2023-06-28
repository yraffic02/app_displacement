import { useGlobalContext } from '@/app/Context/store';
import { ILoginInput } from '@/types/types';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { SubmitHandler, useForm } from "react-hook-form";
import { MyButton } from '../Button/MyButton';
import { Logo } from '../Logo/Logo';
import { Register } from './ModalRegister/Register';
import { inputSx, style } from './style';
import { api } from '@/services/api';
import { AxiosResponse } from 'axios';


function ChildModal() {

  return (
    <Register />
  );
}

export default function NestedModal() {
  const { isOpen, toggleModal, setUserName } = useGlobalContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>()

  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {
    try {
      const {numeroDocumento} = data

      const res = await api.get('/api/v1/Cliente', numeroDocumento)

      if(res.status === 200){
        localStorage.setItem('isLogged', 'true')
        setUserName(res.data[0].nome)
        toggleModal()
      } else {
        alert('o seu cpf pode não está cadastrado ou pode estar errado!')
      }

    } catch (error) {
      alert('erro no servidor')
    }
  }

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
              label="Seu CPF"
              variant="outlined"
              sx={{ ...inputSx }}
              {...register("numeroDocumento", { required: true })}
            />
            {
              errors.numeroDocumento &&
              <span className='text-red-600'>Para fazer login deve informar seu cpf!</span>
            }
            <MyButton type='secondary' name='Login' submitButton='submit' />
          </form>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}