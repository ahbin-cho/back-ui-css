import styled from "styled-components";
import "./Card.css";

const CardLabel = styled.label`
  color: #ccc;
`;

const CardTitle = styled.h3`
  padding-bottom: 15px;
`;

export function Card() {
  return (
    <div className="card-component">
      <CardLabel>Card Label</CardLabel>
      <CardTitle>Card Title</CardTitle>
      <div className="card-description">
        Hightlight <span className="cross-line">Cross out</span>
      </div>
    </div>
  );
}
