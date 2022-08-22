import { Input, Button } from "antd";
import { useCallback, useState } from "react";

import "./TextInputUI.css";

export function TextInputUI(props) {
  const { propsValue } = props;
  const [inputValue, setInputValue] = useState(propsValue);
  const [isVisibleButton, setIsVisibleButton] = useState(false);

  const onChangeTextArea = useCallback(
    (e) => {
      setInputValue(e.target.value);

      if (propsValue !== e.target.value && e.target.value !== "") {
        setIsVisibleButton(true);
      } else {
        setIsVisibleButton(false);
      }
    },
    [propsValue]
  );

  return (
    <div className="text_box">
      <div className="input-default-div">
        <Input
          value={inputValue}
          onChange={onChangeTextArea}
          placeholder="초기값이 있을수도 있습니다."
          suffix={`${inputValue ? 500 - inputValue.length : 0} / 500`}
        ></Input>
        {isVisibleButton && <Button>Save</Button>}
      </div>

      <div className="input-default-div">
        <Input disabled value={"비활성화상태"}></Input>
      </div>

      <div className="input-default-div">
        <Input readOnly value={"읽기전용"}></Input>
      </div>
    </div>
  );
}
