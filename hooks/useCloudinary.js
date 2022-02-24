import { useState, useEffect, useCallback } from "react";

const useCloudinary = ({ filename, mode, effect, width, height }) => {
  const loader = useCallback(() => {
    return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${mode},${effect},${width},${height}/v1645482088/web/${filename}`;
  }, []);

  return loader;
};

export default useCloudinary;
