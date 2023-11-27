import React from "react";
// import { Link } from "react-router-dom";
import banner_img from "../img/blog.jpg";
function Blogs() {
  return (
    <>
      <section className="blogs">
        <div className="container">
      <div className="title">
        <h1>Blogs</h1>

        </div>
        <div className="banner">
            <div className="right_img">
              <img src={banner_img} alt="img" />
            </div>
            <div className="left_text">
              <div className="subtitle">
                <h3>Blog Articles</h3>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                praesentium dolor omnis ipsam labore eius recusandae, fugiat
                rerum quaerat repellendus, ullam possimus corrupti quos debitis
                maiores, nemo fuga aliquam consequuntur!
              </p>
            </div>
          </div>
          </div>
      </section>
    </>
  );
}
export default Blogs;
