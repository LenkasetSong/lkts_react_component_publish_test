/*
 * @Author: your name
 * @Date: 2020-07-30 15:09:31
 * @LastEditTime: 2020-10-13 10:08:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SubTestReact\src\routes\index.js
 */
import AsyncLoadable from '@/utils/AsyncLoadable.jsx';

// 首页
const Index = AsyncLoadable(() =>
  import(/* webpackChunkName: 'index' */ '../views/Demo/index')
);

const routes = [
  {
    path: '/index',
    exact: true,
    name: 'Demo',
    component: Index,
    auth: [1],
  },
];

export default routes;
