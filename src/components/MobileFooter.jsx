import React, { useEffect, useRef } from "react";
import email from "../assets/social-media-icons/email.svg";
import github from "../assets/social-media-icons/github-logo.svg";
import discord from "../assets/social-media-icons/discord-logo.svg";
import telegram from "../assets/social-media-icons/telegram-logo.svg";
import instagram from "../assets/social-media-icons/instagram-logo.svg";
import { gsap } from "gsap";

function MobileFooter() {
  const menuItemRef0 = useRef();
  const menuItemRef1 = useRef();
  const menuItemRef2 = useRef();
  const menuItemRef3 = useRef();
  const menuItemRef4 = useRef();
  let tl = new gsap.timeline();

  useEffect(() => {
    tl.from(
      [menuItemRef4.current],
      1,
      {
        opacity: 0,
        ease: "bounce.out",
        y: -700,
        duration: 0.6,
      },
      0
    );
    tl.from(
      [menuItemRef3.current],
      1,
      {
        opacity: 0,
        ease: "bounce.out",
        y: -700,
        duration: 0.6,
      },
      0.4
    );
    tl.from(
      [menuItemRef2.current],
      1,
      {
        opacity: 0,
        ease: "bounce.out",
        y: -700,
        duration: 0.6,
      },
      0.8
    );
    tl.from(
      [menuItemRef1.current],
      1,
      {
        opacity: 0,
        ease: "bounce.out",
        y: -700,
        duration: 0.6,
      },
      1.2
    );
    tl.from(
      [menuItemRef0.current],
      1,
      {
        opacity: 0,
        ease: "bounce.out",
        y: -700,
        duration: 0.6,
      },
      1.6
    );
  }, []);

  return (
    <div className="fixed flex flex-row justify-between w-screen p-5 md:hidden bottom-0">
      <a
        href="https://www.instagram.com/matin.martiny"
        target="_blank"
        ref={menuItemRef0}
      >
        <img
          className="dark:rounded-xl dark:bg-[#7F7F7F] w-10 h-10 mb-5 "
          src={instagram}
          alt="Instagram"
        />
      </a>
      <a
        href="https://github.com/KazutoMartin"
        target="_blank"
        ref={menuItemRef1}
      >
        <img
          className="dark:rounded-xl dark:bg-[#7F7F7F] w-10 h-10 mb-5 "
          src={email}
          alt="Email"
        />
      </a>
      <a href="https://t.me/matin_martiny" target="_blank" ref={menuItemRef2}>
        <img
          className="dark:rounded-xl dark:bg-[#7F7F7F] w-10 h-10 mb-5"
          src={telegram}
          alt="Telegram"
        />
      </a>
      <a href="https://t.me/matin_martiny" target="_blank" ref={menuItemRef3}>
        <img
          className="dark:rounded-xl dark:bg-[#7F7F7F] w-10 h-10 mb-5"
          src={discord}
          alt="Discord"
        />
      </a>
      <a
        href="https://github.com/KazutoMartin"
        target="_blank"
        ref={menuItemRef4}
      >
        <img
          className="dark:rounded-xl dark:bg-[#7F7F7F] w-10 h-10 mb-5"
          src={github}
          alt="Github"
        />
      </a>
    </div>
  );
}

export default MobileFooter;
