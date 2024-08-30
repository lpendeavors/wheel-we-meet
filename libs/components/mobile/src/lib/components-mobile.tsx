import styled from 'tailwind';

const StyledComponentsMobile = styled.div`
  color: pink;
`;

export function ComponentsMobile() {
  return (
    <StyledComponentsMobile>
      <h1>Welcome to ComponentsMobile!</h1>
    </StyledComponentsMobile>
  );
}

export default ComponentsMobile;
