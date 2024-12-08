import { useEffect, useState } from "react";

export enum DeviceType {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
}

const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>(getDeviceType());

  useEffect(() => {
    const updateWindowSize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;

const getDeviceType = (): DeviceType => {
  const width: number = window.innerWidth;
  if (width < 768) {
    return DeviceType.MOBILE;
  }
  if (width > 768 && width < 1024) {
    return DeviceType.TABLET;
  } else {
    return DeviceType.DESKTOP;
  }
};
