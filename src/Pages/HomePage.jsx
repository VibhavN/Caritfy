import React from 'react'
import PromoBanner from '../Components/HomePage/PromoBanner'
import Categories from '../Components/HomePage/Categories'
import Featured from '../Components/HomePage/Featured'
import Recommend from '../Components/HomePage/Recommend'


export const HomePage = () => {

    return (
        <div >
            <PromoBanner />
            <Featured />
            <Categories />
            <Recommend />
        </div>

    )
}

export default HomePage