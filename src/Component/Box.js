import { CardComponent } from "./Card";
import "./Box.css";

export function Box() {
  return (
    <div className="box-component">
      <CardComponent />
      <CardComponent isVisibleCardEtc={false} />
      <CardComponent isVisibleCardInfo={false} />
      <CardComponent layout="horizontal" />
    </div>
  );
}
