import Head from 'next/head';
import 'tailwindcss/tailwind.css';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Card from '../../components/Card';

export default function Database() {
    const router = useRouter();
    const query = router.query;

    const [page, setPage] = useState({
        type: 'oxygen',
        title: 'Tabung Oksigen',
        desc: 'Basis data pembelian, penyewaan, dan pengisian ulang tabung oksigen.',
        img: '/assets/database/oxygen.png'
    });

    useEffect(() => {
        if (!router.isReady) return;

        if (query.find === 'oxygen') {
            setPage(
                DATABASE_TYPE.find((obj) => {
                    return obj.type === 'oxygen';
                })
            );
        } else if (query.find === 'swab') {
            setPage(
                DATABASE_TYPE.find((obj) => {
                    return obj.type === 'swab';
                })
            );
        }

        // if (query.category) {
        //     setTopicToScroll(query.category);
        // }
    }, [router.isReady]);

    const DATABASE_TYPE = [
        {
            type: 'oxygen',
            title: 'Tabung Oksigen',
            desc: 'Basis data pembelian, penyewaan, dan pengisian ulang tabung oksigen.',
            img: '/assets/database/oxygen.png'
        },
        {
            type: 'swab',
            title: 'Tes Swab',
            desc: 'Basis data pembelian, penyewaan, dan pengisian ulang tabung oksigen.',
            img: '/assets/database/swab.png'
        }
    ];

    const DATA = [
        {
            name: 'RS Mayapada',
            address: 'Jl. TB Simatupang',
            phone: '021-23456789',
            price: 'Rp100,000',
            website: 'https://mayapada.co.id',
            other: 'Keterangan Lain',
            location: {
                city: 'Jakarta Selatan',
                lat: '',
                long: ''
            }
        },
        {
            name: 'RS Mayapada',
            address: 'Jl. TB Simatupang',
            phone: '021-23456789',
            price: 'Rp100,000',
            website: 'https://mayapada.co.id',
            other: 'Keterangan Lain',
            location: {
                city: 'Jakarta Selatan',
                lat: '',
                long: ''
            }
        },
        {
            name: 'RS Mayapada',
            address: 'Jl. TB Simatupang',
            phone: '021-23456789',
            price: 'Rp100,000',
            website: 'https://mayapada.co.id',
            other: 'Keterangan Lain',
            location: {
                city: 'Jakarta Selatan',
                lat: '',
                long: ''
            }
        },
        {
            name: 'RS Mayapada',
            address: 'Jl. TB Simatupang',
            phone: '021-23456789',
            price: 'Rp100,000',
            website: 'https://mayapada.co.id',
            other: 'Keterangan Lain',
            location: {
                city: 'Jakarta Selatan',
                lat: '',
                long: ''
            }
        },
        {
            name: 'RS Mayapada',
            address: 'Jl. TB Simatupang',
            phone: '021-23456789',
            price: 'Rp100,000',
            website: 'https://mayapada.co.id',
            other: 'Keterangan Lain',
            location: {
                city: 'Jakarta Selatan',
                lat: '',
                long: ''
            }
        },
        {
            name: 'RS Mayapada',
            address: 'Jl. TB Simatupang',
            phone: '021-23456789',
            price: 'Rp100,000',
            website: 'https://mayapada.co.id',
            other: 'Keterangan Lain',
            location: {
                city: 'Jakarta Selatan',
                lat: '',
                long: ''
            }
        },
        {
            name: 'RS Mayapada',
            address: 'Jl. TB Simatupang',
            phone: '021-23456789',
            price: 'Rp100,000',
            website: 'https://mayapada.co.id',
            other: 'Keterangan Lain',
            location: {
                city: 'Jakarta Selatan',
                lat: '',
                long: ''
            }
        },
        {
            name: 'RS Mayapada',
            address: 'Jl. TB Simatupang',
            phone: '021-23456789',
            price: 'Rp100,000',
            website: 'https://mayapada.co.id',
            other: 'Keterangan Lain',
            location: {
                city: 'Jakarta Selatan',
                lat: '',
                long: ''
            }
        },
        {
            name: 'RS Mayapada',
            address: 'Jl. TB Simatupang',
            phone: '021-23456789',
            price: 'Rp100,000',
            website: 'https://mayapada.co.id',
            other: 'Keterangan Lain',
            location: {
                city: 'Jakarta Selatan',
                lat: '',
                long: ''
            }
        },
        {
            name: 'RS Mayapada',
            address: 'Jl. TB Simatupang',
            phone: '021-23456789',
            price: 'Rp100,000',
            website: 'https://mayapada.co.id',
            other: 'Keterangan Lain',
            location: {
                city: 'Jakarta Selatan',
                lat: '',
                long: ''
            }
        }
    ];

    return (
        <div className="flex-flex-col">
            <Navbar />
            <Head>
                <title>{page.title}</title>
            </Head>

            <div
                className="flex flex-col-reverse sm:flex-row items-center mb-12 w-full justify-center h-screen"
                style={{ height: '48em' }}>
                <div className="flex flex-col justify-center mx-12">
                    <div className="font-bold text-3xl mb-4 text-left">
                        {page.title}
                    </div>
                    <p className="max-w-xl text-lg text-left">{page.desc}</p>
                    <div className="flex flex-row w-36 mt-4">
                        <Button>Kirim Data</Button>
                    </div>
                </div>
                <div className="w-72 h-72 mx-12 mb-16 sm:mb-0">
                    <img
                        src={page.img}
                        className="w-full"
                        alt={`${`csc`}-logo`}
                    />
                </div>
            </div>

            <div className="flex flex-col w-full items-center px-3 sm:px-0">
                <div className="flex max-w-5xl w-full">
                    <div className="flex  w-full border-gray-500 border items-center rounded-lg">
                        <div className="mx-4">🔍</div>
                        <input
                            type="text"
                            className="text-theme-black-65 py-2 w-full placeholder-theme-black-30 input-email hover:opacity-80 transition-opacity ease-in-out border-0 border-b border-solid mr-4"
                            placeholder={'Cari'}
                        />
                    </div>
                </div>

                <div className="flex flex-row flex-wrap w-full max-w-5xl z-10 items-center justify-between mt-8">
                    {DATA.map((item) => {
                        return <Card item={item} />;
                    })}
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}
