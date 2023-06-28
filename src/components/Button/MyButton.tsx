import { IButton } from "@/types/types"
import { Button } from "@mui/material"

export const MyButton = ({type, onClick, name, submitButton }: IButton) => {
    if (type === 'primary') {
        return (
            <Button
            variant="text"
            onClick={onClick}
            sx={{
                color: "white",
                backgroundColor: "black",
                "&:hover": {
                    color: "white",
                    backgroundColor: "black",
                    borderColor: "white"
                }
            }}
            type={submitButton ? 'submit' : 'button'}
        >
           {name}
        </Button>
        )
    } else {
        return (
            <Button
                variant="outlined"
                onClick={onClick}
                sx={{
                    color: "black",
                    borderColor: "black",
                    "&:hover": {
                        color: "white",
                        backgroundColor: "black",
                        borderColor: "white"
                    }
                }}
                type={submitButton ? 'submit' : 'button'}
            >
                {name}
            </Button>
        )
    }
}