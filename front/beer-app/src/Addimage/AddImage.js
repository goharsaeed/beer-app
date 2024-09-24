import React, { useState } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 25%;
  margin: 16px;

  box-shadow: 5px 5px 15px rgba(10, 10, 20, 0.5);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWidth = styled.div`
  width: 30%;
`;

const ButtonWidth = styled.button`
  width: 10%;
`;

function AddImage() {
  const imageUrl = "https://images.pexels.com/photos/1269031/pexels-photo-1269031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const image1Url = "https://4.bp.blogspot.com/_5xkDx_-kv3I/TQpR40B-_tI/AAAAAAAAAyI/b3GPcZ1KyBA/s1600/hard+drinks.jpg";

  const [drinkId, setDrinkId] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Drink ID:', drinkId);
    if (imageFile) {
      console.log('Selected Image:', imageFile.name);
    }
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <>
      <h2 className="text-center mt-3">Beer Gallery</h2>
      <div className='d-flex justify-content-center m-4 flex-wrap'>
        <Image src={imageUrl} alt="A scenic view of nature" />
        <Image src={image1Url} alt="Beer stickers" />
        <Image src={imageUrl} alt="A scenic view of nature" />
      </div>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <h1 className='mb-3'>Wanna Add Drink?</h1>
          <InputWidth className="mb-3">
            <label htmlFor="drinkId" className="form-label">Drink ID:</label>
            <input
              type="text"
              id="drinkId"
              value={drinkId}
              onChange={(e) => setDrinkId(e.target.value)}
              className="form-control"
              required
            />
          </InputWidth>
          <InputWidth className="mb-3">
            <label htmlFor="imageFile" className="form-label">Upload Image:</label>
            <input
              type="file"
              id="imageFile"
              accept="image/*"
              onChange={handleFileChange}
              className="form-control"
              required
            />
          </InputWidth>
          <ButtonWidth type="submit" className="btn btn-primary col-2">Submit</ButtonWidth>
        </FormContainer>
      </form>
      
    </>
  );
}

export default AddImage;
