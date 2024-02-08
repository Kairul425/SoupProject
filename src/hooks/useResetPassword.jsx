import { useState } from "react";
import axios from "axios";

const useResetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async () => {
    try {
      setLoading(true);

      // ambil data user dari local storage
      const userData = JSON.parse(localStorage.getItem("user"));

      // cek email apakah sama dengan email yang ada di local storage
      if (userData.email === email) {
        const apiUrl =
          import.meta.env.VITE_REACT_APP_USER_API_URL +
          "/ForgetPassword?email=" +
          email;

        const response = await axios.post(apiUrl, { email });

        if (response.status === 200) {
          const data = response.data;
          console.log("Reset password successful:", data);

          setSuccess(true);
          setError(null);
        } else {
          throw new Error("Reset password failed");
        }
      } else {
        throw new Error("Email does not match the stored user email.");
      }
    } catch (error) {
      setError("Reset password failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    loading,
    error,
    success,
    handleChange,
    handleResetPassword,
  };
};

export default useResetPassword;
