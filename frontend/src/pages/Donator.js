import React, { Component, useState } from "react";

export default function SignUp() {
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [food, setfood] = useState("");
  const [stationary, setstationary] = useState("");
  const [money, setmoney] = useState("");
  const [donateType, setdonateType] = useState("");


  const handleSubmit = (e) => {
    
      console.log( name,address, email,phone,food,stationary,money, donateType);
      fetch("http://localhost:3001/donator", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
        
          name,
          address,
          email,
          phone,food,stationary,money,
          donateType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "donation");
          if (data.status == "ok") {
            alert("Donation Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Like to Donate</h3>
          
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Phone number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>

          <div>
            Like to donate
            <input
              type="checkbox"
              value={stationary}
              onChange={(e) => setstationary(e.target.value)}
            />
            Stationary
            <input
              type="checkbox"
              value={food}
              onChange={(e) => setfood(e.target.value)}
            />
            Dryfood
            <input
              type="checkbox"
              value={money}
              onChange={(e) => setmoney(e.target.value)}
            />
            Money
          </div>
          <div className="d-grid">
          <a href="/dashboard"> 
            <button type="submit" className="btn btn-primary">
            submit Donation
            </button></a>
          </div>
          <p className="forgot-password text-right">
        <a href="/dashboard">Back</a>
          </p>
        </form>
      </div>
    </div>
  );
}