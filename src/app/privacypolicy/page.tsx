import Head from 'next/head'
import React from 'react'

const Privacy = () => {
  return (
    <div className="container mx-auto p-6 bg-slate-50 mt-10 rounded-lg">
    <Head>
      <title>Privacy Policy - SaveHub</title>
    </Head>

    <section id="privacy-policy">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4"><strong>Effective Date:</strong> [Insert Date]</p>
      <p className="mb-4">Welcome to SaveHub! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [savehub.com] and use our services.</p>

      <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
      <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2"><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register on the site or use our services.</li>
        <li className="mb-2"><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the site.</li>
        <li className="mb-2"><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the site.</li>
        <li className="mb-2"><strong>Mobile Device Data:</strong> Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the site from a mobile device.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">2. Use of Your Information</h2>
      <p className="mb-4">We use the information we collect from you for various purposes, including to:</p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2"><strong>Provide, operate, and maintain our services:</strong> Deliver the products and services you request, process transactions, and send you related information, including purchase confirmations and invoices.</li>
        <li className="mb-2"><strong>Improve our website:</strong> Analyze trends, usage, and activities to enhance your experience on our website.</li>
        <li className="mb-2"><strong>Communicate with you:</strong> Send you updates, promotional materials, and other information about our services. You can opt-out of receiving marketing emails by following the unsubscribe instructions provided in those emails.</li>
        <li className="mb-2"><strong>Personalize your experience:</strong> Tailor content and offers to you based on your interactions with our site and your preferences.</li>
        <li className="mb-2"><strong>Prevent fraud and ensure security:</strong> Detect, prevent, and address technical issues, fraudulent activities, and security risks.</li>
        <li className="mb-2"><strong>Comply with legal obligations:</strong> Fulfill any legal or regulatory requirements.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
      <p className="mb-4">We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties, except in the following circumstances:</p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2"><strong>Third-party service providers:</strong> We may share information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.</li>
        <li className="mb-2"><strong>Business transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
        <li className="mb-2"><strong>Legal obligations:</strong> We may disclose your information to comply with applicable laws and regulations, respond to legal processes, or protect our rights, property, or safety, and that of others.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">4. Security of Your Information</h2>
      <p className="mb-4">We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

      <h2 className="text-2xl font-semibold mb-2">5. Your Rights and Choices</h2>
      <p className="mb-4">You have certain rights regarding the personal information we hold about you, including:</p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2"><strong>Access and correction:</strong> You may access, update, or correct your personal information by contacting us.</li>
        <li className="mb-2"><strong>Data deletion:</strong> You can request that we delete your personal information, subject to certain legal exceptions.</li>
        <li className="mb-2"><strong>Opt-out of marketing communications:</strong> You can opt-out of receiving marketing emails by following the unsubscribe instructions provided in those emails.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">6. Third-Party Links</h2>
      <p className="mb-4">Our website may contain links to third-party websites. This Privacy Policy does not apply to such third-party websites, and we are not responsible for the content or practices of those websites. We encourage you to review the privacy policies of any third-party websites you visit.</p>

      <h2 className="text-2xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on our website and updating the effective date. You are advised to review this Privacy Policy periodically for any changes.</p>

      <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
      <address className="not-italic">
        <strong>SaveHub</strong><br />
        Email: <a href="https://www.savehubonline.com/contactus" className="text-blue-500 hover:underline">contact@savehub.com</a><br />
       
      </address>
      <p className="mt-4">Thank you for trusting SaveHub with your privacy. We are committed to safeguarding your information and providing you with the best possible service.</p>
    </section>
  </div>
  )
}

export default Privacy