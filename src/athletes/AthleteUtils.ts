import {Squad} from '../common/network/model';

export function getSquadsForAthlete(
  athleteSquadIds: Number[],
  squads: Squad[],
): Squad[] {
  return squads.filter((squad) => {
    return athleteSquadIds.includes(squad.id);
  });
}
