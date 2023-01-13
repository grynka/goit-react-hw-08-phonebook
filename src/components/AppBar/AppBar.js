import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu"
import { AuthNav } from "components/AuthNav/AuthNav"
import { useAuth } from "hooks/useAuth"
import AppBarr from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MdMenuBook } from 'react-icons/md';


export const AppBar = () => {
const { isLoggedIn } = useAuth();

return (
    <AppBarr position="static"
    sx={{

              textDecoration: 'none'}}>
      <Toolbar>
         <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none',
            }}
          ><MdMenuBook />
        Phonebook
        </Typography>
        <Box sx={{ flexGrow: 24,
        fontWeight: 700,
        textDecoration: 'none'
         }}>
           <Navigation />
          </Box>
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBarr>
  )
}