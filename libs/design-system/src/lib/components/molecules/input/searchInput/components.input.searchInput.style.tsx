import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  display: block;
  -webkit-appearance: none;
  border: var(--uxu-border-default);
  border-radius: var(--uxu-radii-default);
  color: var(--uxu-color-primary-foreground);
  background: var(--uxu-color-primary-background);
  transition: border-color var(--uxu-motion-default);
  padding: var(--uxu-space-default) 6rem var(--uxu-space-default) var(--uxu-space-default);

  &::placeholder {
    opacity: 1;
    color: var(--uxu-color-primary-accent3);
    transition: opacity var(--uxu-motion-default);
  }

  &:focus {
    outline: none;
    border: var(--uxu-border-active);

    &::placeholder {
      opacity: 0;
    }
  }
`;

export const Label = styled.label`
  width: 100%;
  position: relative;

  button{
    top: 0.6rem;
    right: 0.6rem;
    position: absolute;
  }
`;

export const Sugestions = styled.ul`
  width: 100%;
  display: block;
  list-style: none;
  padding: var(--uxu-space-small) 0;
  margin-top: var(--uxu-space-small);
  border: var(--uxu-border-default);
  border-radius: var(--uxu-radii-default);
`

export const Sugestion = styled.li`
  width: 100%;
  display: flex;
  cursor: pointer;
  padding: var(--uxu-space-small) var(--uxu-space-default);

  &:hover {
    background: var(--uxu-color-primary-accent1);
  }
`

export const ImageBox = styled.div`
  display: flex;
  width: 3.2rem;
  height: 3.2rem;
  align-items: center;
  justify-content: center;
  border-radius: var(--uxu-radii-default);
  background: var(--uxu-color-primary-accent1);

`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: var(--uxu-space-small);
`;

export const Header = styled.strong`
  width: 100%;
`;

export const Excerpt = styled.p`
  font-size: var(--uxu-font-size-fs7);
  color: var(--uxu-color-primary-accent3);
`
