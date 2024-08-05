import {Flex, Input} from "antd";
import axios from 'axios'
import { useEffect, useState } from "react";

// 参数：keyWord为查询关键词
// 状态码200返回结果分2种情况如下：
// 正常返回结果为：{
//         Response:{
//               Data:[]{UserName:string;UserAge:number}
//          }
// }，  UserName具有唯一性
// 异常返回结果为：{
//    Response:{
//       Code:'错误码',
//       Message: '错误信息'
//     }
// }

const data = [
  {
    UserName:'lili',
    UserAge:20
  },
  {
    UserName:'ecjack',
    UserAge:20
  },
  {
    UserName:'eajohn',
    UserAge:20
  },
  {
    UserName:'lisa',
    UserAge:20
  },
  {
    UserName:'zeni',
    UserAge:20
  },
  {
    UserName:'john',
    UserAge:20
  }
]
function UseSelector({label,placeholder}){
  const [useList,setUserList] = useState([])
  const queryUser = (e)=>{
    const val = e.target.value
    const rel = data.filter(item=>item.UserName.includes(val))
    setUserList(rel)
  }
  return (
    <div style={{display:Flex,flexDirection:'column', alignItems:"start"}}>
      <div>
        <label>{label}</label>
        <Input placeholder={placeholder} style={{width:300,marginLeft:20}}  type="search" onChange={(e)=>{queryUser(e)}}/>
      </div>
      <div>
        {
          useList.length>0 && useList.map(item=>{
            return (
              <div style={{textAlign:"center",padding:10,}}>{item.UserName}</div>
            )
          })
        }
      </div>
    </div>
  )
}

export default UseSelector