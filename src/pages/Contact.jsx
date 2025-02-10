import { useReducer, useRef, useEffect, useState } from "react";
import React from "react";

const initialState = { fullName: "", email: "", message: "" };

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const ContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState({});
  const firstErrorRef = useRef(null);

  useEffect(() => {
    if (firstErrorRef.current) {
      firstErrorRef.current.focus();
    }
  }, [errors]);

  const validate = () => {
    let newErrors = {};
    if (!state.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!state.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!state.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    dispatch({ type: "UPDATE_FIELD", field: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", state);
      dispatch({ type: "RESET" });
      setErrors({});
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 max-w-4xl mx-auto">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-orange-600">Let's Chat!</h2>
        <h3 className="text-xl font-bold mt-2">Tell Us About Your Project!</h3>
        <p className="text-gray-600 mt-4">
          We’re here to help. Reach out and we'll get back to you as soon as possible.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 flex flex-col gap-4 p-6 bg-white shadow-lg rounded-lg w-full"
        noValidate
      >
        <div className="flex gap-4">
          <div className="w-1/2">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={state.fullName}
              onChange={handleChange}
              className="border p-2 w-full rounded-md focus:ring-2 focus:ring-orange-500"
              ref={errors.fullName ? firstErrorRef : null}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>
          <div className="w-1/2">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={state.email}
              onChange={handleChange}
              className="border p-2 w-full rounded-md focus:ring-2 focus:ring-orange-500"
              ref={errors.email ? firstErrorRef : null}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={state.message}
            onChange={handleChange}
            className="border p-2 rounded-md w-full h-32 focus:ring-2 focus:ring-orange-500"
            ref={errors.message ? firstErrorRef : null}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
