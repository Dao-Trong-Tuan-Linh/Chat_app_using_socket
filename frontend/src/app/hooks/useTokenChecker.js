"use client";
import { useEffect } from "react";
import { decodeToken, deleteToken, deleteUser, getUser } from "../util/localstorage";
import { useRouter } from "next/navigation";

const useTokenChecker = () => {
  const router = useRouter();

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (decodeToken()) {
        const { exp } = decodeToken();

        // Check if token has expired
        if (exp < new Date().getTime() / 1000) {
          // Token expired, delete token and user info
          deleteToken();
          deleteUser();
          // Redirect to login page
          router.push("/dang-nhap");
        }
      } else {
        router.push("/dang-nhap");
        if(getUser) {
            deleteUser()
        }
      }
    };

    // Run the checkTokenExpiration function every second
    const interval = setInterval(checkTokenExpiration, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);
};

export default useTokenChecker;
