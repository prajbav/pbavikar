import React from "react";
import { Row, Col } from "antd";
import { Card } from "antd";
import Fade from "react-reveal";
import photo from "../rsc/brooklyn_praji.jpeg";
const { Meta } = Card;

const About = (props) => {
  return (
    <div className="info">
      <Fade>
        <Row>
          <Col span={8}>
            <p>Hello, I am Prajakta Bavikar from New Jersey.</p>
            <p>
              An experienced front end developer who is focuesd on building
              functional and interactive front end components. I like using
              React and Javascript, but I also have experience of back end
              technologies.
            </p>
            <p>
              I keep working on side projects to keep learning new skills. Apart
              from technologies, in my free time I like staying fit, traveling,
              experimenting with cooking and fermenting.
            </p>
          </Col>
          <Col span={8} offset={6}>
            <Card
              hoverable
              style={{ width: 440 }}
              cover={<img alt="example" src={photo} />}
            >
              {/* <Meta title="" /> */}
            </Card>
          </Col>
        </Row>
      </Fade>
    </div>
  );
};
export default About;
