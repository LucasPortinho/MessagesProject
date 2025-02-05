import { AppContext } from '../../contexts/HomeContexts';
import { Container } from '../../components/Container';

export const App = () => {
  return (
      <AppContext>
        <Container />
      </AppContext>
  )
}
