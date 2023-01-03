const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIUsername = state => state.auth.user.name;

const authSelectors = {
    getIsLoggedIn,
    getIUsername,
};
export default authSelectors;