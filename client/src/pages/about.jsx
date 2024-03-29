import React from "react";

export default function about() {
  return (
    <div className="min-h-screen flex items-center  justify-center">
      <div className="max-w-2xl    mx-auto p-3 text-center">
        <div>
          <h1 className="text-5xl text-slate-700 mt-10 font-semibold text-center my-7">
            About TronBlog
          </h1>
          <div className="text-md  text-emerald-700  flex flex-col gap-6">
            <p>
              I’m Kanish, a BTech Computer Science student at PEC Chandigarh.
              I’m passionate about web development and open-source
              contributions. My goal is to excel in web development, using my
              skills in HTML, CSS, JavaScript, and other related technologies.
              I’m self-motivated to learn new concepts and technologies at PEC
              Chandigarh to make meaningful contributions to the world of web
              development, including open-source projects.
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
