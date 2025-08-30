"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-indigo-950 to-black text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">Edustax</h3>
          <p className="text-purple-200">
            Empowering education through technology.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Integrations
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-purple-300 text-sm">
        © {new Date().getFullYear()} Edustax. All rights reserved.
      </div>
    </footer>
  );
}
