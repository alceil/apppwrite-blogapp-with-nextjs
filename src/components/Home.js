
import { toast } from "react-toastify";
import api from "../api/api";
import { useState } from "react";
import { Server } from "../utils/config";


const Home=()=>{

    
    const [newBlog, setNewBlog] = useState({
        blog_title: "",
        author_name: "",
        blog_body: "",
      });

      const addNewBlog = async (e) => {
        e.preventDefault();
        console.log(newBlog)
try {
    await api.createPost(Server.collectionID,newBlog);
    
} catch (error) {
    toast.error(`${error.message}`);
}
      };


    return(
<div className="container my-5 border  p-3">
      <h2 className="text-center">Add a New Blog</h2>
      <form >
        <div className="mb-3">
          <label  className="form-label">
            Blog Title
          </label>
          <input
            type="text"
            className="form-control"
            id="food"
            onChange={(e) => {
              setNewBlog({
                ...newBlog,
                blog_title: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label  className="form-label">
            Author Name
          </label>
          <input
            type="text"
            className="form-control"
            id="ingredients"
            onChange={(e) => {
              setNewBlog({
                ...newBlog,
                author_name: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Blog body
          </label>
          <textarea
            className="form-control"
            id="recipe"
            rows="3"
            onChange={(e) => {
              setNewBlog({
                ...newBlog,
                blog_body: e.target.value,
              });
            }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => addNewBlog(e)}
        >
          Add New Blog
        </button>
      </form>
    </div>
    );

}
export default Home;