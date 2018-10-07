import dva from 'dva';
import './index.css';
import 'antd/dist/antd.css';

import EnvManageModle  from './models/EnvManageModle'
import LayoutModle  from './models/LayoutModle'

const models=[EnvManageModle,LayoutModle];

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/EnvManage').default);

models.forEach(m=>app.model(m).default)
// 4. Router
app.router(require('./router.js').default);

// 5. Start
app.start('#root');
