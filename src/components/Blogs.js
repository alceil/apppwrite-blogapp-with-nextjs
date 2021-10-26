import {useEffect, useState } from "react";
import api from "../api/api";
import { Server } from "../utils/config";
const Blogs=()=>{
    const [documents, setDocuments] = useState([]);
    //Get all documents
    const getDocuments = async () => {
      const res = await api.listDocuments(Server.collectionID);
      console.log(res);
      setDocuments(res.documents);
    };
  
    useEffect(() => {
      getDocuments();
    }, [documents]);
    return(
        <div>
     {
        documents && documents.map((document,index)=>{
          return(
<div key={index}>
  <h1>{document.blog_title}</h1>
  <p>{document.blog_body}</p>
  <h3>{document.author_name}</h3>
</div>
          );
        })
      }
        </div>
    );
}
export default Blogs;