import React from 'react'
import { APIResponseProps } from '@/types/APIResponsePropType';
import { ReactElement } from 'react';
import { FaCity, FaArchway, FaBaby, FaHandsHelping, FaHands } from 'react-icons/fa';
import Link from 'next/link';

const Tile: React.FC<APIResponseProps> = ({code, title, description}) => {

    const [color, setColor] = React.useState("red");
    const [icon, setIcon] = React.useState<ReactElement<any, any>>(<FaCity size={150} />);
    const iconSize = 150;
    React.useEffect(() => {
        const colorArray = ["maroon", "green", "blue", "magenta", "indigo", "violet"];
        const iconArray: ReactElement<any, any>[] = [<FaCity key={0} size={iconSize} />, <FaArchway key={1} size={iconSize} />, <FaBaby key={2} size={iconSize} />, <FaHandsHelping key={3} size={iconSize} />, <FaHands key={4} size={iconSize} />];
        setColor(colorArray[code % colorArray.length]);
        setIcon(iconArray[code % iconArray.length]);
    }, [code])

    return (
        <Link href={{ pathname: "/goals/" + code, query: { description } }} className='w-full'>
            <div className='w-[70%] h-96 mx-auto p-5 flex flex-col items-center rounded-3xl' style={{ backgroundColor: color }}>
                <h2 className='flex flex-row justify-between gap-x-4 w-full'>
                    <p className='text-7xl text-white'>{code}</p>
                    <p className='text-2xl text-white'>{title}</p>
            </h2>

                <p className='text-white '>{icon}</p>
        </div>
        </Link>

  )
}

export default Tile