/*
 * @Author: your name
 * @Date: 2020-07-30 15:09:31
 * @LastEditTime: 2020-11-30 14:44:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SubTestReact\src\routes\index.js
 */
import AsyncLoadable from '@/utils/AsyncLoadable.jsx';

// 首页
const Index = AsyncLoadable(() =>
  import(/* webpackChunkName: 'index' */ '../views/StartPage/index')
);

const FreqInputDemo = AsyncLoadable(() =>
  import(
    /* webpackChunkName: 'index' */ '../views/Demos/FrequencyInput/freqInput'
  )
);

const EnumSelectorDemo = AsyncLoadable(() =>
  import(
    /* webpackChunkName: 'index' */ '../views/Demos/EnumSelector/enumSelectorDemo'
  )
);

const routes = [
  {
    path: '/index',
    exact: true,
    name: 'StartPage',
    component: Index,
    auth: [1],
  },
  {
    path: '/freqInputDemo',
    exact: true,
    name: 'freqInputDemo',
    component: FreqInputDemo,
    auth: [2],
  },
  {
    path: '/enumSelectorDemo',
    exact: true,
    name: 'enumSelectorDemo',
    component: EnumSelectorDemo,
    auth: [3],
  },
];

export default routes;
