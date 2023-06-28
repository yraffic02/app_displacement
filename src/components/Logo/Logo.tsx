import { Box, IconButton, Typography } from "@mui/material"
import NavigationIcon from '@mui/icons-material/Navigation';
import Link from "next/link";

export const Logo = () => {
    return (
        <>
            <Link href="/">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="home"
                    sx={{ mr: 2 }}
                >
                    <NavigationIcon sx={{
                        color: 'black'
                    }} />
                </IconButton>
            </Link>
            <Typography
                variant="h6"
                component="div"
                sx={{
                    flexGrow: 1,
                    color: 'black'
                }}
            >
                Desloque-se
            </Typography>
        </>
    )
}