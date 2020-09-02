import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://www.googleapis.com',
  headers: {
    Accept: 'application/json',
  },
});

const getHolidayList =
  '/calendar/v3/calendars/en.sa%23holiday%40group.v.calendar.google.com/events';

export {axiosClient, getHolidayList};
