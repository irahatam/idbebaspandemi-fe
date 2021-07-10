export default function Button({ href, className, ...props }) {
    return (
        <button
            className={
                'bg-theme-cactus-green text-white py-2 px-6 rounded-lg text-sm h-10 flex items-center justify-center w-full hover:bg-green-600 ' +
                className
            }
            href={href}>
            {props.children}
        </button>
    );
}
