import styled from 'tailwind';

const StyledAdminDashboard = styled.div`
  color: pink;
`;

export function AdminDashboard() {
  return (
    <StyledAdminDashboard>
      <h1>Welcome to AdminDashboard!</h1>
    </StyledAdminDashboard>
  );
}

export default AdminDashboard;
