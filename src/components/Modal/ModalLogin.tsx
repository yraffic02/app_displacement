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


function ChildModal() {

  return (
    <Register />
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
              label="Seu CPF"
              variant="outlined"
              sx={{ ...inputSx }}
              {...register("cpf", { required: true })}
            />
            {
              errors.cpf &&
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