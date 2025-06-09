const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Blog!</h1>
      <p className="md:text-lg text-gray-500/70 pb-6">
        Subscribe to get the latest blog, news tech, and exclusive news
      </p>
      <form className="flex items-center justify-between max-w-xl w-full md:h-13 h-12">
        <input
          className="border border-purple-600/20 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-5 text-purple-700 text-base"
          type="text"
          placeholder="john@gmail.com"
          required
        />
        <button type="submit" className="md:px-12 px-8 h-full text-white bg-gradient-to-l to-[#eb3af3] from-[#794ffb] hover:from-blue-600/90 transition-all cursor-pointer rounded-md rounded-l-none text-base font-medium">
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetter