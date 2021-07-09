export default function Navbar(props) {
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
                  Indonesia Bebas Pandemi
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                Basis Data
              </li>

              <li className="flex items-center">
                Informasi
              </li>

            </ul>
          </div>
      </nav>
    </>
  );
}
