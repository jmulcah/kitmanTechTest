import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styled from 'styled-components';
import {getSquads} from '../common/network/apis';
import {Squad} from '../common/network/model';
import {getSquadsForAthlete} from './AthleteUtils';
import Collapsible from 'react-native-collapsible';
import ListItem from '../components/ListItem';

interface squadBoxProps {
  squads: Squad[];
}

const AthleteDetailScreen = () => {
  const route = useRoute();
  // @ts-ignore
  const {athlete} = route.params;
  const [squads, setSquads] = useState<Squad[]>([]);
  const [collapsed, setCollapsed] = useState<boolean>(true);

  useEffect(() => {
    squadsResponse().then();
  }, []);

  const squadsResponse = async () => {
    const response = await getSquads();
    console.log(response.squads);
    setSquads(response.squads);
  };
  return (
    <ScrollView>
      <Container>
        <ProfileHeader
          source={{
            uri: athlete.image.url,
          }}
        />
        <Title>
          {athlete.first_name} {athlete.last_name}
        </Title>
        <RosterContainer onPress={() => setCollapsed(!collapsed)}>
          <SubTitle>Click to show Rostered Squads</SubTitle>

          <Collapsible collapsed={collapsed}>
            <Container>
              <SquadBox
                squads={getSquadsForAthlete(athlete.squad_ids, squads)}
              />
            </Container>
          </Collapsible>
        </RosterContainer>
      </Container>
    </ScrollView>
  );
};

const SquadBox = (props: squadBoxProps) => {
  const squadList = props.squads.map((squad) => {
    return <ListItem key={squad.id} title1="Squad Name:" title2={squad.name} />;
  });
  return <>{squadList}</>;
};

export default AthleteDetailScreen;

const Container = styled(View)`
 flex:1
 align-items: center
`;
const RosterContainer = styled(TouchableOpacity)`
  margin-top: 20px
  margin-bottom: 20px
  padding: 20px
  border-width: 1px
  border-color: #0C113B
  border-radius: 10px
  background-color: white
`;
const ProfileHeader = styled(Image)`
 width: 200px
 height: 200px
 border-radius: 100px
 margin-bottom: 20px
 margin-top: 20px
`;

const Title = styled(Text)`
  font-size: 30px;
`;

const SubTitle = styled(Text)`
  font-size: 22px;
  padding-bottom: 10px;
`;
