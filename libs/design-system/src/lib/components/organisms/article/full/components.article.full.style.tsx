import styled, { css } from 'styled-components';


export const Article = styled.article`
  ${({ theme: { radiis, shadows } }) => css`
    width: 100%;
    height: fit-content;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: ${radiis.default};
    border: var(--uxu-border-default);
    background-color: var(--uxu-color-primary-background);

    html[data-theme="light"] & {
      box-shadow: ${shadows.default};
    }
  `}
`;


export const BoxImg = styled.div`
  ${({ theme: { motions, alphas, breakpoints } }) => css`
    width: 100%;
    height: 18rem;
    display: block;
    position: relative;

    @media all and (min-width: ${breakpoints.s}px) {
      height: 30rem;
    }


    a {
      opacity: 1;
      transition: opacity ${motions.default};

      &:hover {
        opacity: ${alphas.default};
      }
    }

  `}
`;

export const BoxContent = styled.div`
  ${({ theme: { spaces } }) => css`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding: ${spaces.default};
    border-top: var(--uxu-border-default);
  `}
`;


export const BoxAuthor = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;


export const BoxAuthorData = styled.div`
  ${({ theme: { spaces, fontSizes } }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: ${spaces.default};

    span {
      width: 100%;
      display: block;

      &:first-of-type {
        font-weight: bold;
        margin-bottom: ${spaces.small};
      }

      &:last-of-type {
        font-size: ${fontSizes.small};
        color: var(--uxu-color-primary-accent5);
      }
    }
  `}
`;
export const Header = styled.h1`
  ${({ theme: { spaces, fontSizes, breakpoints } }) => css`
    width: 100%;
    position: relative;
    font-size: ${fontSizes.large};
    margin: ${spaces.default} 0 ${spaces.default} calc(4.2rem + ${spaces.default});

    @media all and (min-width: ${breakpoints.s}px) {
      font-size: ${fontSizes.h1};
    }

  `}
`;
export const Tags = styled.ul`
  ${({ theme: { spaces } }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 0 ${spaces.default} calc(4.2rem + ${spaces.default});
  `}
`;

export const Tag = styled.li`
  ${({ theme: { spaces } }) => css`
    a {
      padding: ${spaces.default};

      &:first-of-type {
        padding-left: 0;
      }

      &:before {
        content: "#";
        color: var(--uxu-color-primary-accent5);
      }
    }
  `}
`;


export const BoxText = styled.div`
  ${({ theme: { spaces, fontSizes, breakpoints } }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 0 ${spaces.default} calc(4.2rem + ${spaces.default});

    @media all and (min-width: ${breakpoints.s}px) {
      .lead {
        font-size: ${fontSizes.large};
      }
    }

    p, q, .img, .lead {
      display: block;
      position: relative;
      margin-bottom: ${spaces.default};
    }

    p, q {
      width: 100%;
      position: relative;
    }

    q {
      width: 100%;
      max-width: 600px;
      display: flex;
      position: relative;
      align-items: center;
      border-radius: 0.6rem;
      justify-content: center;
      padding: ${spaces.large};
      margin: ${spaces.default} auto;
      border: var(--uxu-border-default);
      background-color: var(--uxu-color-body-background);

      &::before,
      &::after {
        line-height: 0;
        font-size: 6rem;
        font-weight: bold;
        position: absolute;
      }

      &::before {
        bottom: 4rem;
        content: ",,";
        left: ${spaces.small};
      }

      &::after {
        top: 3rem;
        content: '"';
        right: ${spaces.small};
      }
    }

    .img {
      max-width: 100%;
      width: 30rem;
      height: 20rem;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      display: block;

      @media all and (min-width: ${breakpoints.s}px) {
        width: 60rem;
        height: 40rem;
      }
    }

  `}
`;