import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Brewstop</h3>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for craft beer discovery and great food.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Beer Finder
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/modo-cata"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Modo Cata
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Monday - Thursday: 4pm - 11pm</li>
              <li>Friday - Saturday: 12pm - 1am</li>
              <li>Sunday: 12pm - 10pm</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>123 Beer Street</li>
              <li>Hopville, BR 12345</li>
              <li>(555) 123-4567</li>
              <li>hello@brewstop.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Brewstop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
