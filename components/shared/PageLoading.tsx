"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PageLoading = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    timeline
      .fromTo(
        "#black-dot",
        {
          width: 8,
          ease: "power1.inOut",
          duration: 0.5,
        },
        {
          width: 24,
          ease: "power1.inOut",
          duration: 0.5,
        }
      )
      .fromTo(
        "#black-dot",
        {
          width: 24,
          ease: "power1.inOut",
          duration: 0.5,
        },
        {
          x: 16,
          width: 8,
          ease: "power1.inOut",
          duration: 0.5,
        }
      )
      .fromTo(
        "#black-dot",
        {
          width: 8,
          ease: "power1.inOut",
          duration: 0.5,
        },
        {
          width: 24,
          ease: "power1.inOut",
          duration: 0.5,
        }
      )
      .fromTo(
        "#black-dot",
        {
          width: 24,
          ease: "power1.inOut",
          duration: 0.5,
        },
        {
          x: 32,
          width: 8,
          ease: "power1.inOut",
          duration: 0.5,
        }
      )
      .fromTo(
        "#black-dot",
        {
          width: 8,
          ease: "power1.inOut",
          duration: 0.5,
        },
        {
          width: 24,
          ease: "power1.inOut",
          duration: 0.5,
        }
      )
      .fromTo(
        "#black-dot",
        {
          width: 24,
          ease: "power1.inOut",
          duration: 0.5,
        },
        {
          x: 48,
          width: 8,
          ease: "power1.inOut",
          duration: 0.5,
        }
      )
      .fromTo(
        "#black-dot",
        {
          width: 8,
          ease: "power1.inOut",
          duration: 0.5,
        },
        {
          width: 24,
          ease: "power1.inOut",
          duration: 0.5,
        }
      )
      .fromTo(
        "#black-dot",
        {
          width: 24,
          ease: "power1.inOut",
          duration: 0.5,
        },
        {
          x: 64,
          width: 8,
          ease: "power1.inOut",
          duration: 0.5,
        }
      );
  }, []);

  return (
    <div className={`grid place-content-center w-full flex-1`}>
      <div className={`relative h-full flex items-center gap-x-2`}>
        <span className={`w-2 h-2 bg-vv-darkGray rounded-full`} />
        <span className={`w-2 h-2 bg-vv-darkGray rounded-full`} />
        <span className={`w-2 h-2 bg-vv-darkGray rounded-full`} />
        <span className={`w-2 h-2 bg-vv-darkGray rounded-full`} />
        <span className={`w-2 h-2 bg-vv-darkGray rounded-full`} />

        <span
          id={`black-dot`}
          className={`absolute left-0 w-2 h-2 bg-vv-black rounded-full`}
        />
      </div>
    </div>
  );
};

export default PageLoading;
