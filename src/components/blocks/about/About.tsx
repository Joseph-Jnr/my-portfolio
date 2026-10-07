import { useState } from "react";
import { Image, Stack } from "@mantine/core";
import { Memoji, Portrait } from "@/assets/images";
import { Link } from "react-router-dom";
import { IconCode, IconFileText } from "@tabler/icons-react";
import Typewriter from "react-ts-typewriter";

const About = () => {
  const [typewriterEnd, setTypewriterEnd] = useState(false);

  const scrollProjectsToView = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const text =
    "I'm Joseph Nwobodo Jnr, a Senior Frontend Engineer with 6+ years of experience building scalable, high-performance web and mobile applications. I specialize in React, TypeScript, Next.js, React Native, and Angular, with experience across fintech, logistics, real estate, and operational platforms. I care deeply about building products that are not only technically sound, but intuitive, accessible, and visually refined. From secure transaction flows and complex admin systems to customer-facing products, I enjoy turning complex business requirements into simple, reliable experiences. I also bring a strong product design perspective to my engineering work, allowing me to bridge the gap between design, technology, and business.";

  return (
    <section className="about-section relative section--padding">
      <img className="memoji" src={Memoji} width={200} alt="" />

      <div className="text-center tr--container pb-20">
        <h1 className="blink gradient--text mx-auto md:text-5xl">
          Hello there!
        </h1>
        <Stack spacing="lg" className="bio md:px-44 mt-10">
          <p>
            <Typewriter onFinished={() => setTypewriterEnd(true)} text={text} />
          </p>
          {typewriterEnd && (
            <b className="italic" data-aos="zoom-in">
              I'm driven by the challenge of turning complex problems into
              simple, meaningful products.
            </b>
          )}
        </Stack>

        <div className="md:bright--bg md:p-20 mt-20">
          <div className="grid md:grid-cols-2 justify-center gap-28">
            <div className="img-area">
              <div className="profile-image relative">
                <Image maw={288} radius="md" src={Portrait} alt="Joseph Jnr" />
              </div>
            </div>
            <div className="btn-area tr--flex-row-center">
              <Stack spacing="xl">
                <button onClick={scrollProjectsToView}>
                  <IconCode className="mr-2" /> My Work
                </button>
                <Link
                  target="_blank"
                  to="https://drive.google.com/file/d/1k_BpcGpqlN3iZeA2Lumqm5gNNjqJbbwU/view?usp=drive_link"
                >
                  <button>
                    <IconFileText className="mr-2" /> My Resume
                  </button>
                </Link>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
