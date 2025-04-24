import React, { useState } from 'react';
import contactus from '../assets/contactus.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    const { fullName, email, phoneNumber, message } = formData;
    if (!fullName || !email || !phoneNumber || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // console.log("Environment Variable:", process.env.REACT_APP_FORM_URL);

    const formDataEncoded = new URLSearchParams();
    formDataEncoded.append(process.env.REACT_APP_FullNameId, fullName);
    formDataEncoded.append(process.env.REACT_APP_EmailId, email);
    formDataEncoded.append(process.env.REACT_APP_PhoneNumberId, phoneNumber);
    formDataEncoded.append(process.env.REACT_APP_MessageId, message);

    try {
      await fetch(
        process.env.REACT_APP_FORM_URL,
        {
          method: "POST",
          body: formDataEncoded,
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      alert("Form submitted successfully! ✅");
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 flex-1 h-full flex flex-col justify-center py-12 md:py-0">
      <div className="grid md:grid-cols-2 gap-[0vw] items-center md:gap-[12vw]">
        <div className='flex flex-col justify-center items-center text-center'>
          <h1 className="text-4xl font-bold mb-2">Get in touch</h1>
          <div className="relative w-full max-w-md">
            <div className='flex justify-center hidden md:block'>
              <img
                src={contactus}
                alt="Contact illustration"
                className="w-[90%]"
              />
            </div>
          </div>

          <p className="text-lg  mb-8 font-poppins">
            Reach out to us for support, information, or collaboration opportunities.
          </p>

        </div>

        <div className="bg-white rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Id
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-400 text-white px-7 py-2 rounded-3xl hover:bg-orange-500 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;