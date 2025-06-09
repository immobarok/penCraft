import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { blog_data, blogCategories } from "../../assets/assets"
import BlogCard from "../../components/Blog/BlogCard"

const BlogCategory = () => {
  const [menu, setMenu] = useState('All')
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <>
      <div className="flex items-center justify-center gap-4 flex-wrap my-6">
        {
          blogCategories.map((cat) => (
            <div key={cat} className="relative">
              <button onClick={() => setMenu(cat)}
                className={`cursor-pointer ${menu === cat && 'text-white px-4 pt-0.5'}`}
              >
                {cat}
                {
                  menu === cat && (
                    <motion.div
                      layoutId="underline"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className="absolute left-0 right-0 top-0 h-7 -z-1 bg-purple-700 rounded-full"
                    >
                    </motion.div>
                  )
                }
              </button>
            </div>
          ))
        }
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {
          blog_data.filter((blog) => menu === 'All' ? true : blog.category === menu).map((blog) => <BlogCard key={blog._id} blog={blog}></BlogCard>)
        }
      </div>
      <motion.div style={{ scaleX }} className="bg-purple-500 h-1.5 fixed top-0 left-0 w-full origin-left" />
    </>
  )
}

export default BlogCategory
