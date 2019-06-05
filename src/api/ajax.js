/*
ajax 请求函数模块
返回值 promise对象(异步返回的数据是response.data)
 */
import axios from 'axios'
export default function ajax(url='',data={},type='get') {
  return new Promise(function (resolve,reject) {
    //执行异步ajax请求
    let promise
    if(type==='get'){
      //准备url  query参数数据
      let dataStr='' //数据拼接字符串
      Object.keys(data).forEach(key=>{
        dataStr+=key+"="+data[key]+"&"
      })
      if(dataStr!==''){
        dataStr= dataStr.substring(0,dataStr.lastIndexOf('&'))
        url=url+'?'+dataStr
      }
      //发送get请求
      promise=axios.get(url)
    }else{
      promise=axios.get(url,data)
    }
    //成功调用resolve
    promise.then(function (response) {
        resolve(response.data)
    }).catch(function (error) {
          reject(error)
      })
    //失败调用reject

  })

}
