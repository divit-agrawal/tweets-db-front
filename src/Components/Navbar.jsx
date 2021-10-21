import React, { useEffect, useState, Fragment } from "react";
import { useHistory } from "react-router";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";

const nav1 = [
  { name: "Discover", to: "/", current: true },
  { name: "Topics", to: "/topics", current: false },
];
const nav2 = [
  { name: "Discover", to: "/", current: false },
  { name: "Topics", to: "/topics", current: true },
];
const nav3 = [
  { name: "Discover", to: "/", current: false },
  { name: "Topics", to: "/topics", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar(props) {
  const location = useLocation();

  const history = useHistory();

  const [navigation, setNavigation] = useState([
    { name: "Discover", to: "/", current: false },
    { name: "Topics", to: "/topics", current: false },
  ]);

  const handleClick = () => {
    localStorage.removeItem("token");
    history.push("/");
    props.setLoggedIn(false);
    window.location.reload();
  };

  useEffect(() => {
    if (location.pathname === "/") setNavigation(nav1);
    else if (location.pathname === "/topics") setNavigation(nav2);
    else if (location.pathname === "/addTweet") setNavigation(nav3);
    else if (location.pathname === "/addCategory") setNavigation(nav3);
  }, [location]);

  // useEffect(() => {}, [props.loggedIn]);

  return (
    <div style={{ position: "fixed", width: "100vw", zIndex: "2" }}>
      <Disclosure as="nav" className="bg-white shadow-lg">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current
                              ? "bg-blue-500 text-white "
                              : "text-black hover:bg-blue-200",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                      {props.loggedIn ? (
                        <>
                          <Link
                            key="addTweet"
                            to="/addTweet"
                            className={classNames(
                              location.pathname === "/addTweet"
                                ? "bg-blue-500 text-white "
                                : "text-black hover:bg-blue-200",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                          >
                            Add Tweet
                          </Link>
                          <Link
                            key="addCategory"
                            to="/addCategory"
                            className={classNames(
                              location.pathname === "/addCategory"
                                ? "bg-blue-500 text-white "
                                : "text-black hover:bg-blue-200",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                          >
                            Add Category
                          </Link>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  {props.loggedIn === true ? (
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-white flex text-sm rounded-full focus:outline-none  ">
                          {/* <Link
                            className={classNames(
                              "bg-blue-500 text-white hover:bg-blue-200 px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            to="/login"
                          >
                            {props.userData.first_name}{" "}{props.userData.last_name}
                          </Link> */}
                          <div
                            className={classNames(
                              "bg-blue-500 text-white hover:bg-blue-200 px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            to="/login"
                          >
                            {/* Hi {props.userData.first_name} */}
                            ADMIN
                          </div>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleClick}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  " w-full block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-white flex text-sm rounded-full focus:outline-none  ">
                          {/* <Link
                            className={classNames(
                              "bg-blue-500 text-white hover:bg-blue-200 px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            to="/login"
                          >
                            {props.userData.first_name}{" "}{props.userData.last_name}
                          </Link> */}
                          <Link
                            className={classNames(
                              "bg-blue-500 text-white hover:bg-blue-200 px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            to="/login"
                          >
                            Login
                          </Link>
                        </Menu.Button>
                      </div>
                      {/* <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition> */}
                    </Menu>
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      item.current
                        ? "bg-blue-500 text-white "
                        : "text-black hover:bg-blue-200",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
                {props.loggedIn ? (
                  <>
                    <Link
                      key="addTweet"
                      to="/addTweet"
                      className={classNames(
                        location.pathname === "/addTweet"
                          ? "bg-blue-500 text-white "
                          : "text-black hover:bg-blue-200",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                    >
                      Add Tweet
                    </Link>
                    <Link
                      key="addCategory"
                      to="/addCategory"
                      className={classNames(
                        location.pathname === "/addCategory"
                          ? "bg-blue-500 text-white "
                          : "text-black hover:bg-blue-200",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                    >
                      Add Category
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
