import React, { useState, useReducer, useRef } from "react";
import app from "../img/app.svg";
import lamp from "../img/lamp.png";

// const ACTIONS = {
//   INPUT :"Will Add",
//   OUTPUT : "Will Remove"

// }

// function reducer(state,action){
//   switch(action.type){
//     case (ACTIONS.INPUT) :
//       return {
//         inputText: "Form__label",
//         inputLabel: "",
//       } ;
//     case (ACTIONS.OUTPUT) :
//       return {
//         inputText: "Form__label",
//         inputLabel: "",
//       }
//   }
// }

// const currentState = {
//   inputText: "Form__label",
//   inputLabel: "",
// }
function Contact() {
  // const [state,dispatch] = useReducer(reducer, currentState)
  const refContainer = useRef(null);
  const inputContainer = useRef(null);
  const formContainer = useRef(null);

  function cancelInput() {
    refContainer.current.style.color = "";
    inputContainer.current.style.color = "";
    formContainer.current.style.color = "";
  }
  function handleInput(e) {
    e.stopPropagation();
    refContainer.current.style.color = " rgb(204, 176, 15)";
    inputContainer.current.style.color = "";
    formContainer.current.style.color = "";
  }
  function editInput(e) {
    e.stopPropagation();
    refContainer.current.style.color = "";
    inputContainer.current.style.color = "rgb(204, 176, 15)";
    formContainer.current.style.color = "";
  }
  function formInput(e) {
    e.stopPropagation();
    refContainer.current.style.color = "";
    inputContainer.current.style.color = "";
    formContainer.current.style.color = "rgb(204, 176, 15)";
  }

  return (
    <section className="Contact" id="contact">
      <div className="Contact__div1">
        <img src={lamp} alt="" className="Contact__lamp" />
        <div className="btn-button  ">
          <a href="#" className="btn ">
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
            </svg>
            Download the App
          </a>
        </div>
        <div>
          <img src={app} alt="" className="Contact__app" />
        </div>
      </div>
      <div className="Contact__div2">
        <form onClick={cancelInput} action="#" className="Form">
          <p className="Form__title">Contact Us</p>
          <div className="Form__group">
            <label
              className="Form__label"
              htmlFor="name"
              check={true}
              ref={refContainer}
            >
              Enter Name
            </label>
            <input
              onClick={handleInput}
              className="Form__input"
              type="text"
              id="name"
            />
          </div>
          <div className="Form__group">
            <label
              className="Form__label"
              htmlFor="mail"
              check={false}
              ref={inputContainer}
            >
              Enter Mail
            </label>
            <input
              onClick={editInput}
              className="Form__input"
              type="email"
              id="mail"
            />
          </div>
          <div className="Form__group">
            <textarea
              onClick={formInput}
              className="Form__message"
              placeholder="Enter Message"
            />
            <label
              ref={formContainer}
              className="Form--label"
              htmlFor="message"
            >
              Enter Message
            </label>
          </div>
          <div className="btn-button btn-sign">
            <a href="#" className="btn ">
              sign up
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
