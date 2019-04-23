import React from "react";
import Sidebar from "../_shared/components/Sidebar";
import SearchBar from "../_shared/components/SearchBar";
import "./styles/Home.css";
import { MyConsumer } from "../_shared/context.js";
import usualImage from "../Home/avatar1.jpg";
class Home extends React.Component {
  render() {
    return (
      <MyConsumer>
        {value => {
          return (
            <React.Fragment>
              <div
                id="Home"
                className={value.active ? "d-flex toggled active" : "d-flex"}
              >
                <Sidebar />
                <div className="page-content">
                  <SearchBar toggleSidebar={value.toggleSidebar} />
                  <div className="content-wrapper">
                    <div>
                      <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                      />
                    </div>
                    <div className="text-center">
                      <h2 className="Header-1">Home</h2>
                    </div>

                    <div className="container-fluid col-md-10">
                      <div>
                        <img
                          src={usualImage}
                          className="img-fluid image1"
                          alt="Responsive image"
                        />
                      </div>
                      <div>
                        <img
                          src={usualImage}
                          className="img-fluid image2"
                          alt="Responsive image"
                        />
                      </div>

                      <div className="row-md-2 container-fluid">
                        <div className=" col-xs-12 col-md">
                          <Link to="categories" className="display-8 ">
                            Add Category
                          </Link>
                        </div>
                        <div className="col-xs-12  col-md">
                          <Link to="users" className=" display-8">
                            Add User
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </MyConsumer>
    );
  }
}

export default Home;
