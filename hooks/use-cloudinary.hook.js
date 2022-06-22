import { useCallback } from "react";

const useCloudinary = ({ filename, mode, effect, width, height }) => {
  const loader = useCallback(() => {
    return `https://res.cloudinary.com/axiearmy-club/image/upload/${mode},${effect},${width},${height}/v1645482088/web/${filename}`;
  }, []);

  return loader;
};

export default useCloudinary;
