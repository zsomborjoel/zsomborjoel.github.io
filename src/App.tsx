import React, { useState } from 'react';
import { BsFillMoonStarsFill, BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

import logo from './images/developer.png';

export default function App(): JSX.Element {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? 'dark' : ''}>
            <head>
                <title>Zsombor Joel Gyurkovics page</title>
            </head>

            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
                <section className="min-h-screen">
                    <nav className=" mb-12 flex justify-between py-10 dark:text-white">
                        <h1 className="font-serif text-xl uppercase">Fullstacklife</h1>
                        <ul className="ml-8 flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="cursor-pointer text-2xl"
                                />
                            </li>
                            <li>
                                <a
                                    className="ml-8 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white"
                                    href="https://www.linkedin.com/in/zsombor-joel-gyurkovics/"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="p-10 text-center">
                        <h2 className="py-2 text-5xl font-medium text-teal-600 dark:text-teal-400">
                            Zsombor Joel Gyurkovics
                        </h2>
                        <h3 className="py-2 text-2xl dark:text-white">Software developer</h3>
                        <p className="mx-auto max-w-lg py-5 text-lg leading-8 text-gray-800 dark:text-gray-200 md:text-xl">
                            Tech enthusiast who is continuously working on his skill set. My passions are scaleable
                            Backends, user friendly UI design and maintanable Cloud computing. Having sectoral knowledge
                            in Banking, Aviation, Wholesale and Transportation. Always using best practices to perfect
                            my code on both security and performance level. Code and Test quality is top priority for
                            me. As a developer always focus on the task at hand with a creative mindset to solve the
                            problem in an agile manner. Team player or one man army based on the requirements.
                        </p>
                    </div>
                    <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600 dark:text-gray-400">
                        <a href="https://www.linkedin.com/in/zsombor-joel-gyurkovics/">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://github.com/zsomborjoel">
                            <BsGithub />
                        </a>
                    </div>
                    <div className="relative mx-auto mt-20 h-80 w-80 rounded-full bg-gradient-to-b from-teal-500">
                        <img src={logo} alt="test" />
                    </div>
                </section>
            </main>
        </div>
    );
}
