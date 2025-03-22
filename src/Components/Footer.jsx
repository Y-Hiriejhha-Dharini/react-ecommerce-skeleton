import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 w-full">
      <div className="container mx-auto px-4">

        {/* Bottom Section: Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
          </div>

          {/* Copyright */}
          <p className="text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
