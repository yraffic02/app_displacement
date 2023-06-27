import { Box, IconButton, Typography } from "@mui/material"
import NavigationIcon from '@mui/icons-material/Navigation';

export const Logo = () => {
    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="home"
                sx={{ mr: 2 }}
                href="/"
            >
                <NavigationIcon sx={{
                    color: 'black'
                }} />
            </IconButton>
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