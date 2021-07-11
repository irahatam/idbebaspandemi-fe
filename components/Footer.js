import Image from 'next/image';

export default function Footer(props) {
    return (
        <footer
            className={
                'bg-theme-sea-foam h-40 flex flex-row items-center px-8'
            }>
            <Image
                src="/assets/footer_icon.svg"
                alt="Main Logo"
                width={48}
                height={48}
            />
            <li className="flex flex-row items-center text-lg ml-4">2021</li>
            <a
                href="#"
                className="flex row-reverse items-center text-lg ml-auto">
                Contact Us
            </a>
            <a
                href="https://www.unsplash.com"
                target="_blank"
                className="flex row-reverse items-center text-lg ml-4">
                Photos from Unsplash
            </a>
        </footer>
    );
}
