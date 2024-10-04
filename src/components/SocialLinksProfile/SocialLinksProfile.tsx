import { Container, Img, ImgContainer, LinkContainer, SocialLink, UserDescription, UserLocation, UserName } from "./SocialLinksProfile.styled"

export const SocialLinkProfile = () => {
    return (
        <Container>
            <ImgContainer>
                <Img src={`${process.env.PUBLIC_URL}/assets/images/avatar-jessica.jpeg`} alt="User image" />
            </ImgContainer>

            <UserName>Jessica Randall</UserName>
            <UserLocation>London, United Kingdom</UserLocation>
            <UserDescription>"Front-end developer and avid reader."</UserDescription>

            <LinkContainer>
                <SocialLink href="#" >GitHub</SocialLink>
                <SocialLink href="#" >Frontend Mentor</SocialLink>
                <SocialLink href="#" >LinkedIn</SocialLink>
                <SocialLink href="#" >Twitter</SocialLink>
                <SocialLink href="#" >Instagram</SocialLink>
            </LinkContainer>
        </Container>
    )
}