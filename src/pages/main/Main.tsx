import { Note } from "../../components/note/Note";
import { Container } from "../../layout/container/Container";
import { Header } from "../../layout/header/Header";

export const MainPage = () => {
  return (
    <div className="page__main">
      <Header />
      <Container>
        <Note />
      </Container>
    </div>
  );
}
