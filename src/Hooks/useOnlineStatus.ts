import { useEffect, useState } from "react";

const useOnlineStatus = (): boolean => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  useEffect(() => {
    const updateStatus = (): void => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return (): void => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);
  return isOnline;
};

export default useOnlineStatus;
