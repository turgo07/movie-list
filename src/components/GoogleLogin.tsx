import React, { useState } from "react";
import { GoogleLogin, googleLogout, CredentialResponse, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

interface User {
  name: string;
}

const GoogleLoginButton: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/auth/google", {
        token: credentialResponse.credential,
      });

      setUser({ name: data.user.name });
      console.log("Usuário autenticado:", data.user);
    } catch (error) {
      console.error("Erro na autenticação:", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId="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">
        <div>
        {user ? (
            <div>
            <p>Bem-vindo, {user.name}!</p>
            <button onClick={() => googleLogout()}>Logout</button>
            </div>
        ) : (
            <GoogleLogin onSuccess={handleGoogleLogin} onError={() => console.error("Erro no login")} />
        )}
        </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
