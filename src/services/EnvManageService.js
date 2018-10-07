import { stringify } from 'qs';
import request from '../utils/request';

export async function getEnvList(params) {
  return request(`/api/env/getEnvList?${stringify(params)}`);
}
