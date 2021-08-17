//layout
import SideLeft from "@ly/SideLeft";
import Container from "@ly/Container";

const Main = ({ children }) => {

  return (
    <div className="content">
      <SideLeft />
      <Container>{children}</Container>
    </div>
  );
};

export default Main;