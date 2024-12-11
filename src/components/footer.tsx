import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-lg font-semibold leading-6">
            Subscribe to our newsletter
          </h1>
          <p className="text-sm font-normal leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
<div className="flex flex-col items-start space-y-2">
  <div className="flex items-center space-x-2">
    <input
      type="email"
      placeholder="Enter your email"
      className="px-3 py-2 border border-black rounded-md"
    />
    <button className="px-4 py-2 text-sm font-medium text-black border border-black rounded-md hover:bg-gray-100">
      Subscribe
    </button>
  </div>
  <div>
    <p className="text-xs text-black">
      By subscribing, you agree to our{" "}
      <a href="#" className="underline hover:text-gray-800">
        Privacy Policy
      </a>.
    </p>
  </div>
</div>

      </div>

      <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4">
        <div>
        <Image
      src="/images/Ddsgnr Library.png"
      alt="Company logos"
      width={250}
      height={40}
      className="w-full lg:w-auto"
    />
    </div>
    <div>
        <h2 className="font-bold mb-2">Courses</h2>
          <ul>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Business
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Development
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Technology
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Design
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Programming
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2">Resources</h2>
          <ul>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Career
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
              Resume
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Learning
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Interview Preparation
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Job
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2">About Us</h2>
          <ul>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Help/Support
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
               Partners
              </a>
            </li>
          </ul>
        </div>
      </div>
  
      <div className="flex flex-col lg:flex-row justify-between items-center text-xs text-black border-t border-black pt-4">
  <div className="text-center lg:text-left flex justify-center lg:justify-start space-x-4 mt-2">
    <p>© 2023 Ddsgnr. All rights reserved.</p>
    <a href="#" className="hover:underline">
      Privacy Policy
    </a>
    <a href="#" className="hover:underline">
      Terms of Service
    </a>
    <a href="#" className="hover:underline">
      Cookies Settings
    </a>
  </div>

  <div className="mt-4 lg:mt-0">
    <Image
      src="/images/Ddsgnr Library.png"
      alt="Company logos"
      width={132}
      height={24}
      className="w-full lg:w-auto"
    />
  </div>
</div>

    </footer>
  );
};

export default Footer;