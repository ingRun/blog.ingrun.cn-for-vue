import axios from 'axios'
import store from './store/index.js'


// 请求拦截（配置发送请求的信息）
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    config.headers.Authorization = "Bearer " + store.state.token
    return config;
},(error) =>{
    return Promise.reject(error);
});


//返回状态判断(添加响应拦截器)   判断登录失效
// axios.interceptors.response.use((res) =>{
//     //对响应数据做些事
//     if(!res.data.success){
//         return Promise.resolve(res);
//     }
//     return res;
// }, (error) => {
//     console.log('网络异常')
//     return Promise.reject(error);
// });


export default axios