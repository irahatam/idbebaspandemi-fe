import Image from 'next/image';

export default function Footer(props) {
    return (
        <footer
            className={
                'bg-theme-sea-foam h-36 flex flex-row items-center px-8'
            }>
            <Image
                src="/assets/footer_icon.svg"
                alt="Main Logo"
                width={48}
                height={48}
            />
            <li className="flex flex-row items-center font-bold text-lg ml-4">
                Bebas Pandemi
            </li>
        </footer>
    );
}
