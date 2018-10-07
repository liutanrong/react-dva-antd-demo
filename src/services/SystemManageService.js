import { stringify } from 'qs';
import request from '../utils/request';

export async function getSystemList(params) {
  return request(`/api/system/getSystemList?${stringify(params)}`);
}
