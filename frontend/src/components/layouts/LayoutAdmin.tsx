import { Outlet } from "react-router-dom";
import { Logo } from "../icons";

const LayoutAdmin = () => {
  return (
    <div className="grid grid-cols-[300px,auto]">
      <aside>
        <a href="/admin">
          <img src={Logo} width="150px" height="150px" className="mt-2 ml-16" />
        </a>
        <div className="flex">
          <div className="flex h-screen flex-1 flex-col justify-between border-e bg-white">
            <div className="px-4 py-6">
              <ul className="mt-0 space-y-1">
                <li>
                  <a
                    href="/admin/products/add"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Thêm sản phẩm
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Danh sách sản phẩm
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <header className="bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-teal-600" href="#">
            <span className="sr-only">Home</span>
          </a>
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block"></nav>
            <div className="flex items-center gap-4">
              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <main className="w-[1100px]">
          <Outlet />
        </main>
      </header>
    </div>
  );
};

export default LayoutAdmin;
