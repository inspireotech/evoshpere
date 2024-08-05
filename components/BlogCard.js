import React from "react"
import { Card2 } from "./common/Card2"
import { blogdata } from "@/assets/data/dummydata"

const BlogCard = () => {
  return (
    <>
      <div className='container blog-card grid-2 py'>
        {blogdata.map((item) => (
          <Card2 data={item} key={item.id} path='blogs' />
        ))}
      </div>
    </>
  )
}

export default BlogCard
