import styled from "styled-components";

export const Container = styled.main`
    max-width: 400px;
    margin: auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    row-gap: .5rem;
    background-color: #1f1f1f;
`

export const ImgContainer = styled.div`
    border-radius: 50%;
    overflow: hidden;
`

export const Img = styled.img`
    width: 100px;
    height: 100px;
`

export const UserName = styled.h1`
    font-size: 1.6rem;
`

export const UserLocation = styled.span`
    font-size: .9rem;
    font-weight: 700;
    color: #c5f82a;
`

export const UserDescription = styled.p`
    font-size: .8rem;
    margin: 1rem 0;
`

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
`

export const SocialLink = styled.a`
    text-align: center;
    padding: 1rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 700;
    background-color: #333333;

    &:hover {
        background-color: #c5f82a;
        color: #141414;
    }
`