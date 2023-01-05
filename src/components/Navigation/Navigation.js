import { useAuth } from "hooks/useAuth"
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import { Navigate } from "./Navigation.styled";


export const Navigation = () => {
const { isLoggedIn } = useAuth();
   return (<Navigate>
    <NavLink to="/"><Button sx={{ color: '#fff' }}>Home</Button></NavLink>
    {isLoggedIn && (<NavLink to="/contacts"><Button sx={{ color: '#fff' }}>Contacts</Button></NavLink>)}
   </Navigate>) 
}