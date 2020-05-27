/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, select, takeLatest
} from 'redux-saga/effects';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/Home/selectors';

export default function* githubData() {
  
}
