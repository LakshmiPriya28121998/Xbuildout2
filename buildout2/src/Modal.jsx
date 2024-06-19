import React, { useState } from 'react';

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');


  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    // Reset form state and errors when closing modal
    setUsername('');
    setEmail('');
    setPhone('');
    setDob('');
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!username || !email || !phone || !dob) {
    //   alert('Please fill in all fields.');
    //   return;
    // }

    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    } 

    if (!/^\d{10}$/.test(phone)) {
      alert('Invalid phone number');
      return;
    }

    const currentDate = new Date();
    const selectedDate = new Date(dob);
    if (selectedDate >= currentDate) {
      alert('Invalid date of birth');
      return;
    } 

    closeModal();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleOutsideModalClick = () => {
    if (isOpen) {
      closeModal();
    }
  };

  return (
    <div className="application" onClick={handleOutsideModalClick}>
        <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
                <h1>Fill Details</h1>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
