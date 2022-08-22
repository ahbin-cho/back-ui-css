import styled from "styled-components";
import "./Box.css";
import { Card } from "./Card";

const BoxCard = styled.div`
  background-color: ${(props) => props.color};
  text-align: center;
  display: flex;
  flex-direction: ${(props) => props.direction};
  height: fit-content;
`;

const BoxDescription = styled.div`
  text-align: left;
  background-color: #f4f4f4;
  flex: 6;
`;

export function Box() {
  return (
    <div className="box-component">
      <BoxCard color="black" direction="column">
        <img src="/logo192.png" alt="default" className="logo-img" />
        <BoxDescription>
          <Card></Card>
          <div className="card-info">
            <div className="score active"></div>
            <div className="score active"></div>
            <div className="score active"></div>
            <div className="score "></div>
            <div className="score "></div>
            <div className="card-etc">Lorem Ipsum is simply dummy text ...</div>
          </div>
        </BoxDescription>
      </BoxCard>
      <BoxCard color="orange" direction="column">
        <img src="/logo192.png" alt="default" className="logo-img" />
        <BoxDescription>
          <Card></Card>
          <div className="card-info">
            <div className="score active"></div>
            <div className="score active"></div>
            <div className="score active"></div>
            <div className="score "></div>
            <div className="score "></div>
          </div>
        </BoxDescription>
      </BoxCard>
      <BoxCard color="purple" direction="column">
        <img src="/logo192.png" alt="default" className="logo-img" />
        <BoxDescription>
          <Card></Card>
        </BoxDescription>
      </BoxCard>
      <BoxCard color="" direction="row">
        <img src="/logo192.png" alt="default" className="logo-img" />
        <BoxDescription>
          <Card></Card>
          <div className="card-info">
            <div className="score active"></div>
            <div className="score active"></div>
            <div className="score active"></div>
            <div className="score "></div>
            <div className="score "></div>
            <div className="card-etc">Lorem Ipsum is simply dummy text ...</div>
          </div>
        </BoxDescription>
      </BoxCard>
    </div>
  );
}
