import React from 'react';
import styled from 'styled-components';
import {Text, View} from 'react-native';

interface ListItemProps {
  title1: string;
  title2: string;
  icon?: string;
}

const ListItem = (props: ListItemProps) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          {props.title1} {props.title2}
        </CardTitle>
      </CardBody>
      <CardIcon>
        <Icon>{props.icon}</Icon>
      </CardIcon>
    </Card>
  );
};

export default ListItem;

const Card = styled(View)`
  flex: 1
  flex-direction: row
  align-items: center
  background-color: white
  borderRadius: 8px
  margin: 6px 0px
  padding: 10px 20px 10px 20px
  elevation: 1
  min-height: 70px
  shadow-color: gray
  shadow-offset: 2px 2px
  shadow-opacity: 0.2
  shadow-radius: 4px
  border-width: 1px
  border-color: #0C113B`;

const CardBody = styled(View)`
  flex-direction: row
  align-items: center
  flex: 0.95;
`;
const CardIcon = styled(View)`
  flex: 0.05;
`;
const CardTitle = styled(Text)`
  font-size: 20px;
`;

const Icon = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: #2b53b2;
`;

