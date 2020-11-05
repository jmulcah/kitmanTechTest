import {Athletes, Squads} from './model';

const axios = require('axios');

const baseURL = 'https://kml-tech-test.glitch.me';

export const getAthletes = (): Athletes => {
  return axios
    .get(`${baseURL}/athletes`, {})
    .then((result: any) => {
      return result.data;
    })
    .catch(function (error: any) {
      console.log(error);
    });
};
export const getSquads = (): Squads => {
  return axios
    .get(`${baseURL}/squads`, {})
    .then((result: any) => {
      return result.data;
    })
    .catch(function (error: any) {
      console.log(error);
    });
};

export const postLogin = (username: string, password: string) => {
  return axios
    .post(`${baseURL}/session`, {
      username,
      password,
    })
    .then(function (response: any) {
      return response;
    })
    .catch(function (error: any) {
      console.log(error);
    });
};
