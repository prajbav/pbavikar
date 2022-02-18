import React from "react";
import { Card, Row, Col } from "antd";
import Fade from "react-reveal";

const links = ["abc", "cde", "def"];
const Projects = (props) => {
  return (
    <div className="projects">
      <Fade>
        <Row gutter={30}>
          <Col span={8}>
            <div className="block"> </div>
          </Col>
          <Col span={8}>
            <div className="block"> </div>
          </Col>
          <Col span={8}>
            <div className="block"> </div>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col span={8}>
            <div className="block"> </div>
          </Col>
          <Col span={8}>
            <div className="block"> </div>
          </Col>
          <Col span={8}>
            <div className="block"> </div>
          </Col>
        </Row>
      </Fade>
    </div>
  );
};
export default Projects;
