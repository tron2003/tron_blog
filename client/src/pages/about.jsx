import React from "react";

export default function about() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl  mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About TronBlog
          </h1>
          <div className="text-md  text-teal-300 flex flex-col gap-6">
            <p>
              I’m Kanish, a BTech Computer Science student at PEC Chandigarh.
              I’m passionate about Data Science and open-source contributions.
              My goal is to excel in Data Science, using my skills in Advanced
              Math and Python. I’m self-motivated to learn new concepts and
              technologies at PEC Chandigarh to make meaningful contributions to
              technology, including open-source projects
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
