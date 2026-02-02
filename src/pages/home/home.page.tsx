// Dependencies
import { FunctionComponent } from "react";

// Components
import { Home } from "../../components/pages/home-page";
import { Text } from "../../components/elements/text";
import { Icon } from "../../components/elements/icon";
import { Badge } from "../../components/elements/badge";
import { Button } from "../../components/elements/button";
import { ButtonIcon } from "../../components/elements/button-icon";
import { InputText } from "../../components/elements/input";

// Assets
import Trash from "../../assets/icons/trash-regular.svg?react";
import Plus from "../../assets/icons/plus-regular.svg?react";
import { InputCheckbox } from "../../components/elements/input-checkbox";
import { Card } from "../../components/compositions/card";

export const HomePage: FunctionComponent = () => {
  return (
    <Home
      pageContent={
        <div className="flex flex-col gap-10">
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

          <div className="flex gap-1">
            <ButtonIcon iconCompositions={Trash} />
            <ButtonIcon variant="secondary" iconCompositions={Trash} />
            <ButtonIcon variant="tertiary" iconCompositions={Trash} />
          </div>

          <div>
            <InputText />
          </div>

          <div>
            <InputCheckbox />
          </div>

          <div>
            <Card size="md" content="Olá, mundo!" />
          </div>
        </div>
      }
    />
  );
};
