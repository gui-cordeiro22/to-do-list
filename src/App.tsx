// Components
import { Text } from "./components/elements/text";
import { Icon } from "./components/elements/icon";
import { Badge } from "./components/elements/badge";
import { Button } from "./components/elements/button";

// Assets
import Trash from "./assets/icons/trash-regular.svg?react";
import Plus from "./assets/icons/plus-regular.svg?react";

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

      <Icon SvgSource={Trash} className="fill-pink-base" />

      <div>
        <Badge variant="secondary" content="5" />

        <Badge variant="primary" content="2 de 5" />
      </div>

      <div>
        <Button label="Nova tarefa" iconCompositions={Plus} />
      </div>
    </div>
  );
}
