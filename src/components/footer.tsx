export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-neutral-950 mt-32">
      <div className="text-white body-font container text-center px-5 py-16 mx-auto flex items-center sm:flex-row flex-col space-x-2">
        <div className="sm:text-left">
          <h3 className="uppercase text-2xl font-bold py-4">Logan Dhillon</h3>
          <p>A full stack developer who works in a bundle of languages.</p>
        </div>
        <div className="flex-grow"></div>
        <div className="sm:text-right mt-8 sm:mt-0">
          <h3 className="uppercase text-xl sm:text-2xl font-bold py-4">
            Connect With Me
          </h3>
          <div className="text-xl space-x-4">
            <a href="mailto:logandhi64@gmail.com">
              <i className="fas fa-envelope transition-transform hover:scale-150"></i>
            </a>
            <a href="https://github.com/logandhillon/">
              <i className="fab fa-github transition-transform hover:scale-150"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="container mx-auto p-8 border-t border-gray-700">
          <p className="text-xs text-neutral-50">
            © {new Date().getFullYear()} Logan Dhillon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
