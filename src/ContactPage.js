import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './ContactPage.css';

function ContactPage() {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <div className="contact-page">
      <h1>Get In Touch</h1>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">Send</button>
      </form>
      <LoadScript
        googleMapsApiKey="YOUR_API_KEY"
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={9}
          center={defaultCenter}
        />
      </LoadScript>
    </div>
  );
}

export default ContactPage;