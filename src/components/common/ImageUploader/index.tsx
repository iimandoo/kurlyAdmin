import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';

type Props = {
  onUploaded: (uploadedUrl: string) => void;
};

const AdminImageUploader = (props: Props) => {
  const [uploadImage, setUploadImage] = useState<Blob>();
  const [isUploadDone, setIsUploadDone] = useState<boolean>(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const file = (target.files as FileList)[0];
    file && setUploadImage(file);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.SyntheticEvent<HTMLButtonElement, Event>) => {
    e.preventDefault();

    setIsUploadDone(false);

    const formData = new FormData();
    uploadImage && formData.append('file', uploadImage);
    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESEST ?? '');

    fetch(process.env.REACT_APP_CLOUDINARY_URL ?? '', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        props.onUploaded(response.url);
        initUpload();
      })
      .catch((err) => {
        initUpload();
        console.log(err.meessage); //TODO
      });
  };

  const initUpload = () => {
    setIsUploadDone(true);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <form method='post' encType='multipart/form-data' onSubmit={handleSubmit}>
      <input type='file' onChange={handleImageSelected} ref={fileInputRef} disabled={!isUploadDone} />
      <Button variant='contained' size='medium' type='submit' disabled={!fileInputRef.current?.value || !isUploadDone}>
        {isUploadDone ? '업로드' : '업로드중..'}
      </Button>
    </form>
  );
};

export default AdminImageUploader;
