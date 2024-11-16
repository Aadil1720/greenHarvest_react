import React, { useState } from 'react';

const Order = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    order: '',
    additionalItems: '',
    quantity: '',
    dateTime: '',
    address: '',
    message: '',
  });

  // State to handle form submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default behavior
    const { name, number, order, quantity, address } = formData;

    // Basic validation
    if (!name || !number || !order || !quantity || !address) {
      alert('Please fill out all required fields.');
      return;
    }

    // Log form data (replace this with API call or further processing)
    console.log('Form submitted:', formData);

    // Clear form and show submission status
    setFormData({
      name: '',
      number: '',
      order: '',
      additionalItems: '',
      quantity: '',
      dateTime: '',
      address: '',
      message: '',
    });
    setSubmitted(true);

    // Reset submission status after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="order" id="order">
      <h1 className="sub-heading">
        <span>Order</span> Products
      </h1>

      {submitted && <p className="success-message">Order placed successfully!</p>}

      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <div className="input">
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <span>Your Number</span>
            <input
              type="text"
              name="number"
              placeholder="Enter your number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <span>Your Order</span>
            <input
              type="text"
              name="order"
              placeholder="Enter your order"
              value={formData.order}
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <span>Additional Items</span>
            <input
              type="text"
              name="additionalItems"
              placeholder="Extra items"
              value={formData.additionalItems}
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <span>How much</span>
            <input
              type="number"
              name="quantity"
              placeholder="How many orders"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <span>Date & Time</span>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <span>Your Address</span>
            <textarea
              name="address"
              placeholder="Enter your address"
              cols="30"
              rows="10"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="input">
            <span>Your Message</span>
            <textarea
              name="message"
              placeholder="Enter your message"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <input type="submit" value="Order Now" className="btn" />
      </form>
    </section>
  );
};

export default Order;
