import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { PageSharedAttributes, SettingsI18nAttributes } from "lib/api/api";
import { getOtherLocaleDetails } from "lib/i18n";
import { capitalize, classNames } from "lib/style/styles";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Manifesto", path: "/", current: true },
  { name: "Bio", path: "/bio", current: false },
];
interface HeaderDefaultProps {
  page: PageSharedAttributes;
  locales?: Array<SettingsI18nAttributes>;
}

export default function HeaderDefault({ page, locales }: HeaderDefaultProps) {
  const router = useRouter();
  return (
    <header className="min-h-full">
      <div className="bg-gray-900">
        <Disclosure as="nav" className="bg-gray-900">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="border-b-2 border-gray-700">
                  <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-white">
                          Qtor<span className="blink">_</span>
                        </span>
                      </div>
                      <div className="hidden md:block">
                        <div className="flex items-baseline ml-10 space-x-4">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              href={{pathname: item.path, query: item.path === '/' ? { play: false} : null }}
                              locale={page.locale}
                            >
                              <a
                                className={classNames(
                                  router.pathname === item.path
                                    ? "bg-gray-800 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                  "px-3 py-2 rounded-md text-sm font-medium"
                                )}
                                aria-current={
                                  router.pathname === item.path
                                    ? "page"
                                    : undefined
                                }
                              >
                                {item.name}
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-center ml-4 md:ml-6">
                        <Link
                          href={page.slug ? { href: router.pathname, query: { slug: page.localizations.data[0].attributes.slug } } : { href: router.pathname }}
                          locale={getOtherLocaleDetails(page.locale).shortCode}
                        >
                          <a className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                            {capitalize(getOtherLocaleDetails(page.locale).localizedLabel)}
                          </a>
                        </Link>

                        {/* <button
                            type="button"
                            className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="w-6 h-6" aria-hidden="true" />
                          </button> */}

                        {/* Profile dropdown */}
                        {/* <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src={user.imageUrl} alt="" />
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
                              <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? 'bg-gray-100' : '',
                                          'block px-4 py-2 text-sm text-gray-700'
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu> */}
                      </div>
                    </div>
                    <div className="flex -mr-2 md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block w-6 h-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block w-6 h-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                <div className="px-2 py-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={{pathname: item.path, query: item.path === '/' ? { play: false} : null }}
                      locale={page.locale}
                      passHref
                    >
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        className={classNames(
                          router.pathname === item.path
                            ? "bg-gray-800 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium block"
                        )}
                        aria-current={
                          router.pathname === item.path ? "page" : undefined
                        }
                      >
                        {item.name}
                      </Disclosure.Button>
                    </Link>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  {/* <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img className="w-10 h-10 rounded-full" src={user.imageUrl} alt="" />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">{user.name}</div>
                        <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                      </div>
                      <button
                        type="button"
                        className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div> */}
                  <div className="px-2 mt-3 space-y-1">
                    <Link
                      href={page.slug ? { href: router.pathname, query: { slug: page.localizations.data[0].attributes.slug } } : { href: router.pathname }}
                      locale={getOtherLocaleDetails(page.locale).shortCode}
                      passHref
                    >
                      <Disclosure.Button
                        as="a"
                        className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                      >
                        {capitalize(getOtherLocaleDetails(page.locale).localizedLabel)}
                      </Disclosure.Button>
                    </Link>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </header>
  );
}
