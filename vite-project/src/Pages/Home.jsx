import React from 'react'
import About from '../Components/HomeComponent/About/About'
import Blog from '../Components/HomeComponent/Blog/Blog'
import Carosal from '../Components/HomeComponent/Carosal/Carosal'
import Contact from '../Components/HomeComponent/Contact/Contact'
import Qualification from '../Components/HomeComponent/Qualification.jsx/Qualification'
import Slide from '../Components/HomeComponent/Slide/Slide'
import Testimonial from '../Components/HomeComponent/Testimonial/Testimonial'
import Why from '../Components/HomeComponent/Why/Why'


export default function Home() {
    return (
        <div>
            <Slide />
            <About />
            <Why />
            <Qualification />
            <Carosal />
            <Contact />
            <Testimonial />
            <Blog />

        </div>
    )
}
