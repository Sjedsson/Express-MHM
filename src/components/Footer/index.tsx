import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { FooterSection, Language, Para, ContactLink } from "./styles";

const Footer = ({ t }: { t: TFunction }) => {
  return (
    <FooterSection>
      <Container>
        <Row justify="space-between">
          <Col lg={10} md={10} sm={12} xs={24}>
            <Language>{t("Contact Us")}</Language>
            <Para>
              Email:{" "}
              <ContactLink href="mailto:mjmujtaba5@gmail.com">
                mjmujtaba5@gmail.com
              </ContactLink>
            </Para>
            <Para>
              Phone:{" "}
              <ContactLink href="tel:+61456585796">
                0456 585 796
              </ContactLink>
            </Para>
          </Col>
          <Col lg={10} md={10} sm={12} xs={24}>
            <Language>{t("Address")}</Language>
            <Para>394 Norwell RD</Para>
            <Para>Norwell, QLD, Australia</Para>
          </Col>
        </Row>
      </Container>
    </FooterSection>
  );
};

export default withTranslation()(Footer);
