import axios from 'axios'
// function to log the user in.
const Login = async ({ user, password }) => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    return await axios.post('/api/login', { username: user, password: password })
        .then(resolve => {
            return resolve
        })
        .catch(err => {
            return err
        });
}
export default Login