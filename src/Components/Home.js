import React from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal";
import Typewriter from "typewriter-effect";
import { Card } from "antd";

const styles = {
  nameStyle: {
    fontSize: "5em",
    color: "aliceblue",
  },
  inlineChild: {
    display: "inline-block",
  },
  mainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "aliceblue",
  },
};
const list = [
  "a front end developer",
  "currently looking for job opportunities",
];
const Home = (props) => {
  return (
    <div className="section-content-container">
      <Container>
        <Fade>
          <div className="patterns">
            <Card
              id="card1"
              bordered={false}
              style={{ width: 300, display: "inline-block", top: "320px" }}
            ></Card>
            <Card
              id="card2"
              bordered={false}
              style={{
                width: 300,
                display: "inline-block",
                left: "45%",
                top: "20px",
                height: 60,
              }}
            ></Card>
            <Card
              id="card3"
              bordered={false}
              style={{
                width: 300,
                display: "inline-block",
                right: "280px",
                top: "220px",
                height: 10,
              }}
            ></Card>

            <Card
              id="card4"
              bordered={false}
              style={{
                width: 300,
                display: "inline-block",
                right: "280px",
                top: "220px",
                height: 10,
              }}
            ></Card>
          </div>
          <div className="about-section" style={styles.mainContainer}>
            <h1 style={styles.nameStyle}>Prajakta Bavikar</h1>
            {/* <div className="role" style={{ flexDirection: "row" }}>
              <h1>
                <span>Front</span>
                <span>End</span>
                <span>Developer</span>
              </h1>
            </div> */}
            {/* <h2 className="role" style={styles.inlineChild}>
                Front end developer
              </h2> */}
            {/* <Typewriter
                options={{
                  loop: false,
                  autoStart: true,
                  strings: list,
                  pauseFor: 10,
                }}
              /> */}

            {/* <Social /> */}
          </div>
        </Fade>
      </Container>
    </div>
  );
};
export default Home;
