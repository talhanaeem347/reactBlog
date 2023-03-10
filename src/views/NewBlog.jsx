import { useState } from "react"
import { formValidation } from '../js/formValidation'
import InputFile from '../components/InputFile'
export default () => {
    const [author, setAuthor] = useState("")
    const [blog, setBlog] = useState("")
    const [image, setImage] = useState("")
    const postBlog = async (blog) => {
        await fetch('http://localhost:3000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
    }
    const createBlog = async (blog) => {
        const form = document.querySelector("form")
        if (formValidation(blog)) {
            postBlog(blog)
            setAuthor("")
            setBlog("")
            form.reset()
        }
        else
            console.log("err");
    }

    return (
        <section className="h-screen">
            <div className=" border border-black h-full">
                <div className="flex relative h-full">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://img.freepik.com/free-photo/spotlights-background_1409-1800.jpg?auto=format&h=200" />
                    <div className="px-8 py-10 relative  w-full  flex  justify-center items-center ">
                        <div className="flex h-screen justify-center items-center flex-col -mt-12">
                            <form className="border  h-/3 bg-gray-400 p-4 flex flex-col rounded-lg" >
                                <h1 className="text-2xl font-bold text-center ">New Blog</h1>
                                <div className="h-2/3  p-2">
                                    <div className="flex flex-col h-16 mb-4 ">
                                        <InputFile setImage={setImage} />
                                    </div>
                                    <div className="flex flex-col ">
                                        <label htmlFor="name" className="px-3 text-xl font-semibold">Author</label>
                                        <input id="name" onChange={(e) => setAuthor(e.target.value)} className="border bg-gray-100 rounded text-xl px-2" placeholder="Name" type="text" />
                                    </div>
                                    <div className="flex flex-col  my-2 h-44">
                                        <label htmlFor="blog" className="px-3 text-xl font-semibold">description</label>
                                        <textarea id="blog" onChange={(e) => setBlog(e.target.value)} className="border bg-gray-100 h-full w-full px-2 text-lg py-1" placeholder="Enter Blog Description" ></textarea>
                                    </div>
                                    <div className="flex justify-center pt-2">
                                        <button onClick={() => createBlog({ author, blog, image })} className="bg-indigo-400 w-2/3 text-xl rounded hover:bg-indigo-600 py-1">Create Blog</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
