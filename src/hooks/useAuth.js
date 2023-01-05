import { useSelector } from "react-redux";
import { selectUsername, selectIsLoggedIn, selectIsRefreshing } from "redux/auth/selectors";

export const useAuth = () => {
    return {
        isLoggedIn: useSelector(selectIsLoggedIn),
        username: useSelector(selectUsername),
        isRefreshing: useSelector(selectIsRefreshing),
    }
}