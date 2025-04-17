import { useState, useRef } from "react";

export const profilePic = () => {
  const inputImageRef = useRef(null);
  const [tempFile, setTempFile] = useState({});
  const [previewLink, setPreviewLink] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const openBrowse = () => {
    inputImageRef.current?.click();
  };

  const handleChange = (event) => {
    const file = Array.from(event.target.files)[0];

    if (file) {
      setTempFile(file);
      setPreviewLink(URL.createObjectURL(file));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = Array.from(event.dataTransfer.files)[0];
    setPreviewLink(URL.createObjectURL(file));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const deleteImage = () => {
    setPreviewLink("");
    setTempFile({});
    inputImageRef.current.value = "";
  };

  return {
    handleDrop,
    openBrowse,
    deleteImage,
    handleChange,
    handleDragOver,
    handleDragLeave,
    isDragging,
    previewLink,
    inputImageRef,
  };
};
