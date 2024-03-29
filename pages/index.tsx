import type { NextPage } from "next";
import Head from "next/head";
import Landing from "components/landing";
import { gsap } from "gsap";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Layout from "common/layout";
const Wrapper = styled.div`
  .overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    display: flex;
  }
  .bar {
    width: 10vw;
    height: 100vh;
    background: #1a1a1e;
  }
  .counter {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: 10000;
    color: #00ffd0;
    padding: 0.2rem 0.4rem;
    font-size: 20vw;
  }
`;
const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);
  const counterElement = useRef<HTMLHeadingElement | null>(null);
  let currentValue = 0;
  useEffect(() => {
    const updateCounter = () => {
      if (currentValue === 100) {
        return;
      }
      currentValue += Math.floor(Math.random() * 10) + 1;
      if (currentValue > 100) {
        currentValue = 100;
      }
      if (counterElement.current) {
        counterElement.current.textContent = currentValue.toString();
      }
      setCounter(currentValue); // Update the state
      const delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    };
    updateCounter();

    gsap.to(counterElement.current, 0.25, {
      delay: 3.5,
      opacity: 0,
      display: "none",
    });

    // gsap.to(".overlay", 5.5, {
    //   display: "block",
    //   background: "#000000",
    //   onComplete: () => {
    //     const overlay = document.querySelector(".overlay") as HTMLElement;
    //     overlay.style.display = "none";
    //   },
    // });
    gsap.to(".bar", 1.5, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });

    gsap.from(".container", 1.5, {
      delay: 4,
      y: 700,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
  }, []);
  return (
    <Wrapper>
      <Head>
        <title>Praise&apos;s Portfolio</title>
      </Head>

      <div>
        <h1 className="counter" ref={counterElement}>
          {counter}
        </h1>
        <div className="overlay">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="bar"></div>
          ))}
        </div>
      </div>
      <div className="main-container">
        <Layout>
          <Landing />
        </Layout>
      </div>
    </Wrapper>
  );
};

export default Home;
