// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Direct credentials for testing - replace with your actual values
  SERVICE_ID: 'service_lffy5z8',
  DEMO_TEMPLATE_ID: 'template_l7iea6q',      // For demo booking modal
  CONTACT_TEMPLATE_ID: 'template_pg7ogpb',  // For contact page form
  PUBLIC_KEY: 'tpNU42sxp3WhjZDdz'
};

// Alternative: Use environment variables (uncomment below and create .env file)
/*
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};
*/

// EmailJS Template Variables for Demo Requests:
// customer_name: Customer's full name
// customer_email: Customer's email address
// customer_phone: Customer's phone number
// customer_profession: Customer's profession (Interior Designer, Building Developer, etc.)
// customer_message: Additional message from customer
// demo_request_date: Date when demo was requested

// EmailJS Template Variables for Payment Confirmations:
// customer_name: Customer's full name
// customer_email: Customer's email address
// customer_company: Customer's company name
// plan_name: Selected plan name
// plan_price: Plan price
// payment_id: Razorpay payment ID
// purchase_date: Date of purchase