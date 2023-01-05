import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operatons';

export const UserMenu = () => {
    const { username } = useAuth();
    const dispatch = useDispatch();

    const handleOut = () => {
        dispatch(logout());
    }

return (<>
    <p>Welcome, {username}</p>
    <button type='button' onClick={handleOut}>Log out</button>
    </>
)
}