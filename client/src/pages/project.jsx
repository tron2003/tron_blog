import React from "react";
import CallToAction from "../components/calltoaction";

export default function project() {
  return (
    <div>
      <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-5">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-md  text-emerald-700">
         Welcome to My Projects
        </p>
        <CallToAction />
      </div>
    </div>
  );
}
