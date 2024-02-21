import React from 'react';

const Privacy = () => {
  return (
    <div className=" mx-auto px-4 py-8 bg-gray-100 text-pink-900">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-pink-900">Privacy Policy</h3>
        <div className="">
          <p className="mb-6">
            <strong>Sierra Marine Services</strong> respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us through our website and other communication channels.
          </p>
          <ol className="list-decimal pl-6 mb-8">
            <li className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Information We Collect</h4>
              <p>
                We may collect personal information from you when you interact with us through our website, email, phone calls, or other communication channels. The types of personal information we may collect include:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Name</li>
                <li>Contact information (such as email address, phone number, and address)</li>
                <li>Any other information you provide to us voluntarily</li>
              </ul>
            </li>
            <li className="mb-6">
              <h4 className="text-xl font-semibold mb-2">How We Use Your Information</h4>
              <p>
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>To respond to your inquiries and provide the services you request</li>
                <li>To communicate with you about our products, services, and promotions</li>
                <li>To improve our website and services</li>
                <li>To comply with legal and regulatory requirements</li>
              </ul>
            </li>
            <li className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Protection of Your Information</h4>
              <p>
                We take appropriate measures to safeguard your personal information from unauthorized access, disclosure, alteration, or destruction. We restrict access to your personal information to authorized employees only who need to know that information in order to operate, develop, or improve our services.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
              <p>
                If you have any questions or concerns about our Privacy Policy or our practices regarding your personal information, please contact us at <a href="mailto:info@sierramarineservices.com" className="text-pink-900 underline">info@sierramarineservices.com</a>.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
