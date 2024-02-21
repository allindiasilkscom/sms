import React from 'react';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 ">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-pink-900">Terms and Conditions</h3>
        <div className="text-lg leading-relaxed text-pink-900">
          <p>
            Welcome to Sierra Marine Services. By accessing our website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms and conditions, please do not use our website.
          </p>
          <ol className="list-decimal pl-6 mt-4">
            <li className="mb-4">
              <h4 className="text-xl font-semibold mb-2">Intellectual Property Rights</h4>
              <p>
                All materials on this website, including but not limited to text, images, graphics, logos, and software, are the property of Sierra Marine Services or its licensors and are protected by copyright and other intellectual property laws.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="text-xl font-semibold mb-2">Use License</h4>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Sierra Marine Services' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Sierra Marine Services' website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </li>
            <li className="mb-4">
              <h4 className="text-xl font-semibold mb-2">Limitations</h4>
              <p>
                In no event shall Sierra Marine Services or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sierra Marine Services' website.
              </p>
            </li>
            {/* Add more terms and conditions */}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Terms;
