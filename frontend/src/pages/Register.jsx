import Form from "../components/Form"


function Register(){
    return(
        <Form route="/api/user/register/" method="register" />
        
    )
    
}
console.log("Base URL:", import.meta.env.VITE_API_URL);
export default Register