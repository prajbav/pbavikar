import React from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal";
import Timeline from "./Timeline";
// import Header from "./Header";
// import endpoints from "../constants/endpoints";
// import FallbackSpinner from "./FallbackSpinner";

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: "column",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    fontSize: "1.2em",
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
};
const Experience = (props) => {
  const { header } = props;
  return (
    <>
      {/* <Header title={header} /> */}
      <div className="section-content-container">
        <Container>
          <Fade>
            <Timeline />
          </Fade>
        </Container>
      </div>
    </>
  );
};
export default Experience;
