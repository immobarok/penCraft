import { Link } from "react-router"

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog
  return (
    <Link to={`/blog/${_id}`} className="w-full rounded-lg overflow-hidden shadow hover:scale-103 hover:shadow-purple-600/40 transition-all duration-300 cursor-pointer">
      <img src={image} alt="blog-image" className='aspect-video' />
      <span className='ml-5 mt-4 px-3 py-1 inline-block bg-purple-600/20 rounded-full text-purple-900/60 text-xs font-normal'>{category}</span>
      <div className="p-5">
        <h5 className="mb-2 font-medium text-gray-800">{title}</h5>
        <p className="mb-3 text-xs text-gray-500" dangerouslySetInnerHTML={{ '__html': description.slice(0, 80) }} ></p>
      </div>
    </Link>
  )
}

export default BlogCard