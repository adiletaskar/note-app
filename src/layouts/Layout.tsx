import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <Container className="my-4">
      <Outlet />
    </Container>
  );
};

export default Layout;
