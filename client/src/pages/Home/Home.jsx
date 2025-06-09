import Hero from "../../components/Hero/Hero"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import BlogCategory from "./BlogCategory"

const Home = () => {
  return (
    <div>
      <Hero />
      <BlogCategory />
      <NewsLetter />
    </div>
  )
}

export default Home