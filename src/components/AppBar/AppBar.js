import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu"
import { AuthNav } from "components/AuthNav/AuthNav"
import { useAuth } from "hooks/useAuth"
import AppBarr from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const AppBar = () => {
const { isLoggedIn } = useAuth();

return (
    <AppBarr position="static">
      <Toolbar>
         <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
        Phonebook
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           <Navigation />
          </Box>
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBarr>
  )
}