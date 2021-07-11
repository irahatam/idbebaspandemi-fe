import Image from 'next/image';
import Button from './Button';

export default function HomeSection({
    title = 'Basis Data',
    items = [],
    className,
    ...props
}) {
    return (
        <div
            className={
                'flex flex-col bg-white px-8 max-w-6xl w-full ' + className
            }>
            <div className="flex flex-col w-full h-full">
                <div className="font-bold text-2xl mb-8">{title}</div>

                <div className="flex flex-row">
                    {items.map((item, index) => {
                        return (
                            <div
                                className={
                                    'w-1/2 ' +
                                    (index === items.length - 1 ? null : 'mr-6')
                                }>
                                <img
                                    src={item.img}
                                    className="w-full mb-2"
                                    alt={`${item.title}-logo`}
                                />
                                <div className="text-center flex flex-col items-center mt-6">
                                    <div className="mb-6 font-bold text-lg">
                                        {item.title}
                                    </div>
                                    <div className="mb-4">{item.desc}</div>
                                    <div className="w-32">
                                        <Button>{'Cari'}</Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
