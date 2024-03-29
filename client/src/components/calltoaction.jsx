import { Button } from "flowbite-react";
import React from "react";

export default function calltoaction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to see my website</h2>
        <p className="text-gray-500 my-3">checkout my real estate website</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none "
        >
          <a
            href="https://tron-estate.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TronEstate
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://imageio.forbes.com/specials-images/imageserve/657b29edf09ae8354c4debba/Real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is/960x0.jpg?height=474&width=711&fit=bounds" />
      </div>
    </div>
  );
}
