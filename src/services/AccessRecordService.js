import { stringify } from 'qs';
import request from '../utils/request';

export async function getAccessList(params) {
  return request(`/api/access/getAccessList?${stringify(params)}`);
}
