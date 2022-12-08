import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:8000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accesToken) {
            localStorage.setItem("accesToken", data.accesToken);
            setToken(data.accesToken);
          }
        });
    }
  }, [email]);

  return [token];
};

export default useToken;
