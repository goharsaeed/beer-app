import React, { useState, useEffect } from 'react';

function AddItem() {
  const [formData, setFormData] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/drinks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
      

      if (response.ok) {
        alert('Successfully Added');
        setFormData({ name: '', description: '' });
      } else {
        alert('Failed to add item');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while adding item');
    }
  };

  useEffect(() => {
    console.log('Current form data:', formData);
  }, [formData]);

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 text-black">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow w-25">
        <h2 className="text-center mb-4">Add Item</h2>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            id="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="text-center mb-4">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
 