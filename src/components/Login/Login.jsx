import { Container, Content, BgImage, CTA, CTALogoOne, SignUp, Description, CTALogoTwo } from "./Login.styled";

import {cta_logo_one, cta_logo_two} from "../../assets";

const Login = () => {
    return (
        <Container>
            <Content>
            <CTA>
                <CTALogoOne src={cta_logo_one} alt="" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src={cta_logo_two} alt="" />
            </CTA>
                <BgImage />
            </Content>
        </Container>
    )
};

export default Login;
