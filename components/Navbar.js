import Image from 'next/image';

export default function Navbar(props) {
    const MENU_LINKS = [
        {
            name: 'Basis Data',
            link: '#database'
        },
        {
            name: 'Informasi',
            link: '#information'
        }
    ];

    return (
        <>
            <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <ul className="flex flex-col lg:flex-row list-none mr-auto">
                        <li className="flex flex-row items-center font-bold text-lg">
                            <div className="mr-3 mt-2">
                                <Image
                                    src="/assets/main_logo.svg"
                                    alt="Main Logo"
                                    width={32}
                                    height={24}
                                />
                            </div>
                            Bebas Pandemi
                        </li>
                    </ul>
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        {MENU_LINKS.map((item) => {
                            return (
                                <a
                                    href={item.link}
                                    className="flex items-center ml-4">
                                    {item.name}
                                </a>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </>
    );
}
