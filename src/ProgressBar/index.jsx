import styled from "styled-components";
import React from "react";

const progressStrips = [
  {
    name: "Customer Info",
    children: [
      {
        name: "Aadhar Number",
      },
      {
        name: "Driving License",
      },
    ],
  },
  {
    name: "Shipping Info",
    children: [
      {
        name: "Shipping Address",
      },
      {
        name: "Billing Address",
      },
      {
        name: "GSTIN",
      },
    ],
  },
  {
    name: "Chekout Info",
    children: [
      {
        name: "Shipping Address",
      },
      {
        name: "Billing Address",
      },
      {
        name: "GSTIN",
      },
    ],
  },
  {
    name: "Checkout",
  },
];

export default function Progress() {
  const isLastItem = progressStrips[progressStrips.length - 1];
  return (
    <Container>
      <ProgressStrip progressStrips={progressStrips} isLastItem={isLastItem} />
    </Container>
  );
}

function ProgressStrip({ progressStrips, isLastItem }) {
  return progressStrips.map((item, i) => {
    const isSubStepOrLast = item?.children || isLastItem?.name === item?.name;

    return (
      <ProgressStripWithChild>
        {/* A single strip */}
        <SingleProgressAndStrip>
          <CircleAndStrip>
            <Circle isMiddle={isSubStepOrLast}></Circle>
            {!item.children && isLastItem?.name === item?.name ? null : (
              <Strip />
            )}
          </CircleAndStrip>
          <Label isMiddle={isSubStepOrLast}>{item.name}</Label>
        </SingleProgressAndStrip>

        {item?.children && <ProgressStrip progressStrips={item?.children} />}
      </ProgressStripWithChild>
    );
  });
}

const Circle = styled.div`
  border: 1px solid #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isMiddle }) => (isMiddle ? 24 : 12)}px;
  height: ${({ isMiddle }) => (isMiddle ? 24 : 12)}px;
  border-radius: 50%;
  background-color: ${({ color }) => (color ? color : "#efefef")};
`;

const ProgressHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
`;

const Label = styled.div`
  font-size: ${(props) => (props.isMiddle ? "16px" : "10px")};
  margin-left: 12px;
  margin-top: ${(props) => (props.isMiddle ? "2px" : 0)};
`;

const ProgressStripWithChild = styled.div`
    display: flex;
    flex-direction: column;
`;

const CircleAndStrip = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 40px;
`;

const SingleProgressAndStrip = styled.div`
  display: flex;
  flex-direction: row;
`;

const Strip = styled.div`
  min-height: 16px;
  width: 1px;
  background: red;
`;

const Container = styled.div`
  padding: 12px;
`;
