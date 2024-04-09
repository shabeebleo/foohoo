import React from "react";
import { footerLogo } from "../assets/images";
import { copyrightSign, facebook, instagram, twitter } from "../assets/icons";
import { footerLinks } from "../constants";

function Footer() {
  return (
    <footer className="max-container">
      <div className=" flex justify-between max-lg:flex-col items-start">
        <div className="flex-col items-start">
          <div>
            <div className="sm:max-w-[50%]">
              <img src={footerLogo} alt="footerLogo" width={150} height={46} />
              <p className="mt-3">
                Nike shoes are available at numerous retail stores globally,
                with locations spanning major cities and shopping districts
                worldwide. From flagship stores to authorized retailers.
              </p>
              <div className="flex gap-2 mt-3">
                <div className="rounded-full w-6 p-1 bg-white">
                  <img src={facebook} alt="facebook" />
                </div>
                <div className="rounded-full w-6 p-1 bg-white">
                  <img src={twitter} alt="twitter" />
                </div>
                <div className="rounded-full w-6 p-1 bg-white">
                  <img src={instagram} alt="instagram" />
                </div>
              </div>
            </div>
            <div
              className="max-sm:flex-col  max-sm:mt-2 mt-4 flex items-center
               justify-between"
            >
              {footerLinks.map((category) => (
                <div className="flex-col mt-3" key={category.title}>
                  <h2 className="mt-3 font-bold mb-2">{category.title}</h2>
                  <ul>
                    {category.links.map((link) => (
                      <li key={link.name}>
                        <a href={link.link}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="flex justify-between max-sm:flex-col max-sm:items-center mt-2">
        <div className="flex gap-1 mt-4">
          <img src={copyrightSign} alt="" />
          <p>Copyright All rights reservered</p>
        </div>
        <div>Terms and Conditions</div>
      </div>
    </footer>
  );
}

export default Footer;
