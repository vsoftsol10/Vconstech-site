import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";
import welcomeImg from "../assets/welcome.png";

emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

const BookDemo = () => {
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    message: "",
  });

  const handleDemoFormChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setDemoForm({ ...demoForm, [name]: value });
  };

  const validateDemoForm = () => {
    let newErrors = {};

    if (!demoForm.name) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(demoForm.email))
      newErrors.email = "Enter a valid email address";
    if (demoForm.phone.length !== 10)
      newErrors.phone = "Phone number must be exactly 10 digits";
    if (!demoForm.profession)
      newErrors.profession = "Profession is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    if (!validateDemoForm()) return;

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.DEMO_TEMPLATE_ID,
        {
          customer_name: demoForm.name,
          customer_email: demoForm.email,
          customer_phone: demoForm.phone,
          customer_profession: demoForm.profession,
          customer_message: demoForm.message || "No additional message",
          demo_request_date: new Date().toLocaleDateString(),
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setDemoForm({
        name: "",
        email: "",
        phone: "",
        profession: "",
        message: "",
      });

      setShowSuccessModal(true);
    } catch (error) {
      alert("Failed to submit demo request. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">
          Book a Demo
        </h2>

        <form onSubmit={handleDemoSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              name="name"
              value={demoForm.name}
              onChange={handleDemoFormChange}
              className="w-full px-4 py-3 border rounded-md"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={demoForm.email}
              onChange={handleDemoFormChange}
              className="w-full px-4 py-3 border rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            
            <label className="block text-sm font-medium mb-2">
              Phone Number (India)*
            </label>
      
                
            <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-black bg-gray-50 text-gray-700 text-sm">
                    +91
                  </span>

                  <div className="flex flex-col">

            <input
              name="phone"
              value={demoForm.phone}
              onChange={handleDemoFormChange}
              className="w-84 px-4 py-3 border rounded-md"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
            </div>
          </div>
          </div>

          {/* Profession */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Profession *
            </label>
            <select
              name="profession"
              value={demoForm.profession}
              onChange={handleDemoFormChange}
              className="w-full px-4 py-3 border rounded-md"
            >
              <option value="">Select profession</option>
              <option value="interior-designer">Interior Designer</option>
              <option value="building-developer">Building Developer</option>
              <option value="contractor">Contractor</option>
              <option value="architect">Architect</option>
              <option value="project-manager">Project Manager</option>
              <option value="other">Other</option>
            </select>
            {errors.profession && (
              <p className="text-red-500 text-sm">{errors.profession}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Message (Optional)
            </label>
            <textarea
              name="message"
              rows={3}
              value={demoForm.message}
              onChange={handleDemoFormChange}
              className="w-full px-4 py-3 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ffbe01] py-3 rounded-md font-semibold hover:bg-yellow-400"
          >
            Request Demo
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 text-center max-w-sm">
            <img src={welcomeImg} className="w-24 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-4">
              We will reach out to you soon.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-[#ffbe01] px-6 py-2 rounded-md font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDemo;
