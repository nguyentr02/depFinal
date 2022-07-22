import React from 'react'
import './blogs.css'

const blogs = () => {
    return (
        <div className='blogs'>
            <div className='imgField'>
                <img id='fImg' src={require('../assets/img/blog-img1.jpg')} alt='img' />
                
            </div>
        </div>
    )
}


export default blogs;