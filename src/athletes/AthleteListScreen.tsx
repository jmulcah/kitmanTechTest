import React, {useState, useEffect} from 'react';
import {ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import {getAthletes} from '../common/network/apis';
import styled from 'styled-components';
import {Athlete} from '../common/network/model';
import ListItem from '../components/ListItem';
import {useNavigation} from '@react-navigation/native';

export interface AthleteBoxProps {
  athleteList: Athlete[];
}

const AthleteListScreen = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    athletesResponse().then();
  }, []);

  const athletesResponse = async () => {
    const response = await getAthletes();
    setAthletes(response.athletes);
    setLoading(false);
  };
  return (
    <ScrollContainer>
      {loading && <ActivityIndicator size="large" color="#2B53B2" />}
      {<AthleteBox athleteList={athletes} />}
    </ScrollContainer>
  );
};

const AthleteBox = (props: AthleteBoxProps) => {
  const navigation = useNavigation();
  const athleteList = props.athleteList.map((athlete) => {
    return (
      <TouchableOpacity
        key={athlete.id}
        onPress={() => navigation.navigate('Athlete Details', {athlete})}>
        <ListItem
          title1={athlete.first_name}
          title2={athlete.last_name}
          icon={'>'}
        />
      </TouchableOpacity>
    );
  });
  return <>{athleteList}</>;
};

export default AthleteListScreen;

const ScrollContainer = styled(ScrollView)`
  flex: 1;
  padding: 20px;
  padding-bottom: 180px;
`;
