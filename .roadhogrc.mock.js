import {getEnvList} from './mock/env'

export default {
  // 支持值为 Object 和 Array
  'GET /api/env/getEnvList':{"success":true,"total":88,"data":[{"id":10,"createDateStr":"2018-10-7 12:00:00","creator":"tanrong","name":"环境1","belongProducts":"IOT","ips":"192.168.1.1","description":"来来来"},{"id":11,"createDateStr":"2018-10-7 12:00:00","creator":"tanrong","name":"环境1","belongProducts":"IOT","ips":"192.168.1.1","description":"来来来"},{"id":12,"createDateStr":"2018-10-7 12:00:00","creator":"tanrong","name":"环境1","belongProducts":"IOT","ips":"192.168.1.1","description":"来来来"},{"id":13,"createDateStr":"2018-10-7 12:00:00","creator":"tanrong","name":"环境1","belongProducts":"IOT","ips":"192.168.1.1","description":"来来来"},{"id":14,"createDateStr":"2018-10-7 12:00:00","creator":"tanrong","name":"环境1","belongProducts":"IOT","ips":"192.168.1.1","description":"来来来"},{"id":15,"createDateStr":"2018-10-7 12:00:00","creator":"tanrong","name":"环境1","belongProducts":"IOT","ips":"192.168.1.1","description":"来来来"},{"id":16,"createDateStr":"2018-10-7 12:00:00","creator":"tanrong","name":"环境1","belongProducts":"IOT","ips":"192.168.1.1","description":"来来来"},{"id":17,"createDateStr":"2018-10-7 12:00:00","creator":"tanrong","name":"环境1","belongProducts":"IOT","ips":"192.168.1.1","description":"来来来"},{"id":18,"createDateStr":"2018-10-7 12:00:00","creator":"tanrong","name":"环境1","belongProducts":"IOT","ips":"192.168.1.1","description":"来来来"},{"id":19,"createDateStr":"2018-10-7 12:00:00","creator":"tanrong","name":"环境1","belongProducts":"IOT","ips":"192.168.1.1","description":"来来来"}]},

  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); },
};