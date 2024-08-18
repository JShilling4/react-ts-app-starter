import { ViewContainer } from '../components/layout/ViewContainer';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Form';

function HomePage() {
  function handleClick() {
    alert('button clicked...');
  }

  return (
    <ViewContainer>
      <h1>Home Page</h1>
      <Button
        onClick={handleClick}
        aria-label="clicky btn"
        className="btn-primary"
      >
        Click Me
      </Button>
      <Input type="text" label="Test Label" id="testInput" />
    </ViewContainer>
  );
}

export default HomePage;
