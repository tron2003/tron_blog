import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500 ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/home"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Tron
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-7 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://tron-estate.onrender.com/"
                  target="_blank"
                  rel="noopener noreference"
                >
                  TronEstate
                </Footer.Link>
              </Footer.LinkGroup>

              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://email-classifier-yepv.onrender.com/"
                  target="_blank"
                  rel="noopener noreference"
                >
                  Email Classifier
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Connect With Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.linkedin.com/in/kanish-mahato-26a445223/"
                  target="_blank"
                  rel="noopener noreference"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>

              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/tron2003"
                  target="_blank"
                  rel="noopener noreference"
                >
                  Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="" target="_blank" rel="noopener noreference">
                  Copyright
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between gap-4">
          <Footer.Copyright
            href="#"
            by="Tron blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6  sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              className="text-gray-800"
              href="https://leetcode.com/Tron2003/"
              icon={SiLeetcode}
            />
            <Footer.Icon
              className="text-gray-800"
              href="https://www.linkedin.com/in/kanish-mahato-26a445223/"
              icon={FaLinkedinIn}
            />
            <Footer.Icon
              className="text-gray-800"
              href="https://github.com/tron2003"
              icon={FaGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
