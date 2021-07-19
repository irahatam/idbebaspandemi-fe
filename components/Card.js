import Button from './Button';

export default function Card({ item }) {
    return (
        <div
            className="flex flex-col flex-1 flex-grow-0 h-64 mb-8 border-gray-300 border-2 rounded-lg p-6 justify-between"
            style={{ flexBasis: '31%' }}>
            <p className="text-lg font-bold text-theme-cactus-green">
                {item.name}
            </p>
            <p className="text-sm text-gray-800">{item.phone}</p>
            <p className="text-sm text-gray-800">{item.address}</p>
            <p className="text-sm text-gray-800">{item.price}</p>
            <p className="text-sm text-gray-800">{item.website}</p>
            <p className="text-sm text-gray-800">{item.other}</p>
            <div className="flex flex-row w-full mt-4">
                <Button>{item.location.city}</Button>
            </div>
        </div>
    );
}
