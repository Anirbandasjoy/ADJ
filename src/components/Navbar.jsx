import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 shadow-lg z-10 fixed top-0 left-0 w-full">
            <div className="mx-auto px-4 py-2 max-w-7xl sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <div className="flex-shrink-0">
                        <img
                            className="h-8 w-8"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow"
                        />
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <a
                            href="/"
                            className="px-3 py-2 rounded-md text-sm font-medium text-white  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            Home
                        </a>

                        <a
                            href="/products"
                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            Products
                        </a>

                        <a
                            href="/contact"
                            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            Contact Us
                        </a>
                        <a
                    href="/login"
                    className="block ml-5 px-3 p-2 w-16 text-center bg-blue-900 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                    LogIn
                </a>
                    </div>
                    <div className="sm:hidden flex items-center">
                        <button
                            type="button"
                            onClick={handleToggle}
                            className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`${isOpen ? "" : "hidden"
                    } sm:hidden bg-gray-700 px-2 pt-2 pb-3 space-y-1`}
            >
                
                <a
                    href="/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                    Home
                </a>

                <a
                    href="/products"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                    Products
                </a>

                <a
                    href="/contact"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                    Contact Us
                </a>
                <a
                    href="/login"
                    className="block absolute right-2 top-36 px-3 p-2 w-16 text-center bg-blue-900 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                    LogIn
                </a>
            </div>
        </nav>)
}

export default Navbar;
