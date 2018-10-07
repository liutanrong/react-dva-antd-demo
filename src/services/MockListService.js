import { stringify } from 'qs';
import request from '../utils/request';

export async function getMockList(params) {
  return request(`/api/mockList/getMockList?${stringify(params)}`);
}
