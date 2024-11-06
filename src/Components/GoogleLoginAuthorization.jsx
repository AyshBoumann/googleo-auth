import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function GoogleLoginAuto({setName, setEmail, setImage, setIsLoggedIn}) {
    return (
        <>
        <GoogleLogin
        onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse?.credential);
            console.log(decoded);

            const {name, email, picture} = decoded
            setName(name)
            setEmail(email)
            setImage(picture)
            setIsLoggedIn(true)
        }}
        onError={() => {
            console.log("Login Failed");
        }}
        />
        </>
    );
}

export default GoogleLoginAuto;