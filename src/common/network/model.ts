export interface Athletes {
  athletes: Athlete[];
}
export interface Athlete {
  first_name: string;
  last_name: string;
  id: number;
  image: AthleteImage;
  username: string;
  squad_ids: number[];
}

interface AthleteImage {
  url: string;
}
export interface Squads {
  squads: Squad[];
}
export interface Squad {
  created_at: string;
  id: number;
  name: string;
  organisation_id: number;
  updated_at: string;
}
