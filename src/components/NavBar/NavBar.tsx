
const Navbar = () => {
  return (
    <header>
      <nav className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-white text-2xl font-semibold">
                  My Portfolio
              </a>
            </div>
            <div className="flex">
              <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
              </a>
              <a href="/projects" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                  Projects
              </a>
              <a href="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;