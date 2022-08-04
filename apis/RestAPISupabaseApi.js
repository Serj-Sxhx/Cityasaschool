import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const addProfileDataPOST = (
  Constants,
  { birthday, email, firstName, gender, lastName, userId, username }
) =>
  fetch(`https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/profiles`, {
    body: JSON.stringify({
      user_id: userId,
      firstName: firstName,
      lastName: lastName,
      username: username,
      birthday: birthday,
      gender: gender,
      email: email,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const loginPOST = (Constants, { signupEmail, signupPassword }) =>
  fetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/auth/v1/token?grant_type=password`,
    {
      body: JSON.stringify({ email: signupEmail, password: signupPassword }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
      method: 'POST',
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const signupPOST = (
  Constants,
  { signupEmail, signupFirstName, signupLastName, signupPassword }
) =>
  fetch(`https://qthvouonhshkvbaugrhc.supabase.co/auth/v1/signup`, {
    body: JSON.stringify({
      firstName: signupFirstName,
      lastName: signupLastName,
      email: signupEmail,
      password: signupPassword,
      email_confirm: true,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const logoutPOST = Constants =>
  fetch(`https://qthvouonhshkvbaugrhc.supabase.co/auth/v1/logout`, {
    body: JSON.stringify({ key: 'value' }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});
