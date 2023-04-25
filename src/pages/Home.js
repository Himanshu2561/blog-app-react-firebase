import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
  const [search, setSearch] = useState("");
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    getPosts();
  };

  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, [window.location.pathname]);

  return (
    <div className="homePage">
      {localStorage.getItem("adminAuth") && (
        <div className="filter-box">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search for any user..."
          />
        </div>
      )}
      {postLists
        .filter((post) => {
          return search.toLocaleLowerCase() === ""
            ? post
            : post.author.name.toLowerCase().includes(search);
        })
        .reverse()
        .map((post) => {
          return (
            <div key={post.id} className="post">
              <div className="postHeader">
                <div className="title">
                  <h1> {post.title}</h1>
                </div>
                <div className="deletePost">
                  {isAuth &&
                    (localStorage.getItem("adminAuth") ||
                      post.author.id === auth.currentUser.uid) && (
                      <button
                        onClick={() => {
                          deletePost(post.id);
                        }}
                      >
                        &#128465;
                      </button>
                    )}
                </div>
              </div>
              <div className="postTextContainer"> {post.postText} </div>
              <h3>@{post.author.name}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
