import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
// import "../components/Navbar.css";
import "./Landing.css";

export default function Landing() {
  return (
    <>
      <main>
        <div
          className="relative  pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover img"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1607944024060-0450380ddd33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container  relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Welcome to Spark Bank
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Spark Foundation Web Development Task 1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="pb-20 relative block bg-gray-900">
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Details of the website
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Youo can find the source code of this website in my GitHub
                  repo you can also watch the video on youtube for an overview
                  of the complete project.
                </p>
                <ButtonGroup>
                  <Button
                    tag="a"
                    variant="contained"
                    color="primary"
                    wideMobile
                    href="https://github.com/NarayanBavisetti/banking-system"
                  >
                    View on Github
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
