import { Phone, Mail, MapPinned } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-[#0C134F] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400">BookStar</h3>
            <p className="text-gray-300 text-sm">
              Your favorite online bookstore since 2020. We provide the best
              books with affordable prices.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <i className="bx bxl-facebook text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <i className="bx bxl-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <i className="bx bxl-twitter text-xl"></i>
              </a>
            </div>
          </div>

          {/* Opening Hours  */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Store Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-300">Mon - Fri</span>
                <span className="text-yellow-400">9 AM - 8 PM</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-300">Saturday</span>
                <span className="text-yellow-400">10 AM - 6 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span className="text-yellow-400">11 AM - 5 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="bx bx-phone text-yellow-400" size={20} />
                <span className="text-gray-300">+62 21 5471 8435</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="bx bx-envelope text-yellow-400" size={20} />
                <span className="text-gray-300">book.star@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinned className="bx bx-map text-yellow-400" size={20} />
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
