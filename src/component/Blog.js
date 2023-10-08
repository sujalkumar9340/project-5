import { Component } from "react";
import Blogitems from "./Blogitems";
import img1 from "../LCMimage.png";

export default class Blog extends Component {
  bloglist = [
    {
      title: "blog1",
      description: "reactjs",
      image: img1,
      url: "https://legacy.reactjs.org",
    },
    {
      title: "blog2",
      description: "reactjs",
      image: img1,
      url: "https://legacy.reactjs.org",
    },
    {
      title: "blog3",
      description: "reactjs",
      image:  img1 ,
      url: "https://legacy.reactjs.org",
    },
  ];
  constructor() {
    super();
    this.state = {
      bloglist: this.bloglist,
    };
  }
  render() {
    return (
      <>
        <div className="container my-5">
          <div className="row">
            {this.state.bloglist.map((bloglist) => {
              return (
                <div className="col-lg-4" key={bloglist.title}>
                  <Blogitems
                    title={bloglist.title}
                    description={bloglist.description}
                    image={bloglist.image}
                    // link={bloglist.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
