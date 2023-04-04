import styled, { css } from 'styled-components';

export const Article = styled.article`
  ${({ theme: { radiis } }) => css`
    display: flex;
    width: 100%;
    height: fit-content;
    position: relative;
    flex-direction: column;
    border-radius: ${radiis.default};
    border: var(--uxu-border-default);
  `}
`;


export const BoxImg = styled.div`
  ${({ theme: { motions, alphas } }) => css`
    width: 100%;
    height: 18rem;
    opacity: 1;
    display: block;
    position: relative;
    transition: opacity ${motions.default};


    &:hover {
      opacity: ${alphas.default};
    }
  `}
`;

export const BoxContent = styled.div`
  ${({ theme: { spaces, fontSizes, breakpoints } }) => css`
    width: 100%;
    padding: ${spaces.default};
    align-items: center;
    position: relative;
    border-top: var(--uxu-border-default);


    a {
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-weight: bold;
      font-size: ${fontSizes.default};
      overflow: hidden;
      white-space: unset;
      text-overflow: ellipsis;
    }

    @media all and (min-width: ${breakpoints.s}px) {
      a {
        font-size: ${fontSizes.h4};
      }
    }

  `}
`;
