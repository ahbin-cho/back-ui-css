import { Card, Divider, Rate, Typography } from "antd";

import "./Card.css";

export function CardComponent(props) {
  const {
    layout = "vertical",
    isVisibleCardInfo = true,
    isVisibleCardEtc = true,
  } = props;
  return (
    <div className="card-component">
      <Card
        bordered
        className={
          layout === "vertical"
            ? "vertical-card-layout"
            : "horizontal-card-layout"
        }
        cover={<img alt="default" src="./logo192.png" />}
      >
        <div className="card-label">Card Label</div>
        <div className="card-title">Card Title</div>
        <div className="hightlight-style">
          Hightlight <span className="cross-line-style">Cross Out</span>
        </div>
        {isVisibleCardInfo && (
          <>
            <Divider></Divider>
            <div>
              <Rate value={3}></Rate>
              {isVisibleCardEtc && (
                <Typography.Paragraph ellipsis>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography.Paragraph>
              )}
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
