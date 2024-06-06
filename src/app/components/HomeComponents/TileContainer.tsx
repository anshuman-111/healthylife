'use client'
import React from 'react'
import Tile from './Tile';
import { APIResponseProps } from '@/types/APIResponsePropType';
import {useFetch} from '@/hooks/useFetch';


const TileContainer = () => {
    const { goals , loading, error } = useFetch("https://unstats.un.org/sdgapi/v1/sdg/Goal/List");
  return (
    <div id="goals" className='w-11/12 h-full grid grid-cols-2 mx-auto gap-9 mt-20'>
            {loading ? <div className='text-white w-20 h-20 mx-auto p-20'>Loading...</div> : goals.map((
                { code, title, description }, index
            ) => <Tile key={index} code={code} title={title} description={description} />)}

        </div>
  )
}

export default TileContainer