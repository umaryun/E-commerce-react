import { MessageCircle, ThumbsUp } from "lucide-react"

const PopularBlogs = () => {

    const blogs = [
        {
            title: "my first blog title 1",
            author: "john",
            likes: 142,
            comments: 44
        },
        {
            title: "my second blog title 2",
            author: "phelps",
            likes: 123,
            comments: 53
        },
        {
            title: "my third blog title 3",
            author: "chris",
            likes: 676,
            comments: 35
        },
        {
            title: "my forth blog title 4",
            author: "mich",
            likes: 132,
            comments: 34
        }
    ]


    return(
        <div className="bg-white p-5 w-[25rem] mt-4 border ml-5 rounded">
            <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>

            <ul>
                {blogs.map((blog, index) => (
                    <li key={index} className="mb-4">
                        <div className="flex justify-between items-center">
                            <span className="font-bold mb-2">{ blog.title}</span>
                        </div>
                        <span className="text-gray-600">Published by: {blog.author}</span>
                        <div className="flex items-center mt-2">
                            <MessageCircle size={16} />
                            <span className="text-gray-500 mr-5 ml-1">{blog.comments}</span>

                            <ThumbsUp size={16} />
                            <span className="text-gray-500 mx-2">{blog.likes}</span>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PopularBlogs