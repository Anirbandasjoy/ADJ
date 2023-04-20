import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 pt-16 p-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h4 className="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase">
                                    Shop
                                </h4>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            Products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            Collections
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            About us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            Contact us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase">
                                    Support
                                </h4>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            FAQ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            Returns
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            Shipping
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                                            Privacy policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h4 className="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase">
                                    Subscribe
                                </h4>
                                <p className="mt-4 text-base leading-6 text-gray-300">
                                    Sign up for our newsletter and stay up to date with the latest trends and promotions.
                                </p>
                                <form className="mt-4 flex">
                                    <input
                                        aria-label="Email address"
                                        type="email"
                                        required
                                        className="appearance-none w-full py-2 px-4 bg-gray-900 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:max-w-xs"
                                      
                                    /> <br />
                                    <button className='bg-red-500 text-yellow-100 p-1  ml-3 w-34 h-10 text-sm px-5 rounded-full' type='submit'>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>)
}

export default Footer