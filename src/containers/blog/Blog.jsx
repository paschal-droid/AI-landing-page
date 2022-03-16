import React from 'react'
import {Article} from "../../components"
import {blog01, blog02, blog03, blog04, blog05} from "./imports"

import './blog.css'

const Blog = () => {
    return (
        <div className='gpt3_blog section_padding' id='blog'>
             <div className='gpt3_blog-heading'>
                <h1 className='gradient_text'>A lot is happening,we are blogging about it.</h1>
             </div>
             <div className='gpt3_blog-container'>
                 <div className='gpt3_blog-container_groupA'>
                    <Article image={blog01} date='Sept 26,2021' title="GPT-3 and Open AI is the future. Let us explore how it is?" />
                 </div>
                 <div className='gpt3_blog-container_groupB'>
                     <Article image={blog02} date='Sept 26,2021' title="GPT-3 and Open AI is the future. Let us explore how it is?" />
                     <Article image={blog03} date='Sept 26,2021' title="GPT-3 and Open AI is the future. Let us explore how it is?" />
                     <Article image={blog04} date='Sept 26,2021' title="GPT-3 and Open AI is the future. Let us explore how it is?" />
                     <Article image={blog05} date='Sept 26,2021' title="GPT-3 and Open AI is the future. Let us explore how it is?" />
                </div>
             </div>
        </div>
    )
}

export default Blog