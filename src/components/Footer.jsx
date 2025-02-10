import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  const footerLinks = {
    'About': ['About Xfinity', 'Careers', 'Press Room', 'Corporate', 'Accessibility'],
    'Support': ['Help & Support', 'Contact Us', 'Find a Store', 'Service Status'],
    'Shop': ['Internet', 'TV', 'Mobile', 'Home Security', 'Deals'],
    'My Account': ['Sign In', 'Pay Bill', 'Manage Services', 'Move Services']
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FiFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FiTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FiInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FiYoutube className="h-6 w-6" />
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 Xfinity.
          </div>
        </div>
      </div>
    </footer>
  );
}