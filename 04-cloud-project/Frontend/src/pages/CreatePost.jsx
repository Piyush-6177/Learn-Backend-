import axios from 'axios'

const CreatePost = () => {

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const formData = new FormData(e.target)

    axios.post("http://localhost:3000/create-post", formData)
    .then((res)=>{
      console.log(res); 
    })
    .catch((err)=>{
      console.log(err)
      alert("Error creating post")
      
    })
  }

  return (
    <section className="flex flex-col justify-center items-center h-screen w-screen bg-[#6d2ebd]">
        <h1 className="text-5xl font-mono mb-15">Create Post</h1>

        <form 
        onSubmit={handleSubmit}
        className="flex flex-col items-center px-10 py-15 rounded-2xl  bg-white gap-10">

            <input className="bg-[#d1b3e4] border-1 px-4 py-2 rounded-lg " type="file" name="image" accept="image/*" required/>
            <input className="bg-[#d1b3e4] border-1 px-4 py-2 rounded-lg " type="text" name="caption" placeholder="Enter caption" required/>

            <button className="bg-black text-white h-8 w-18 py-1 rounded" type="submit">Submit</button>
        </form>
    </section>
  )
}

export default CreatePost