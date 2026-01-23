// Components
import { Text } from "./components/text";

export default function App() {
  return (
    <div className="flex flex-col gap-2">
      <Text
        className="text-pink-dark"
        content="Hello, World!"
        elementType="p"
        variant="body-sm-bold"
      />

      <Text
        className="text-green-base"
        content="Hello, World!"
        elementType="p"
        variant="body-md-bold"
      />

      <Text content="Hello, World!" elementType="p" />
    </div>
  );
}
