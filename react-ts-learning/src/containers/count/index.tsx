//react-redux7.1改用hook替代connect
import CountUI from '../../pages/cal/index'
import { connect } from "react-redux";
import { AppState } from "../../store";
//a函数返回对象中的key作为传递给UI组件props的key，value就作为传递给UI组件props的value——状态
function mapStateToProps(state:AppState){
    return {count:state}
}

//b函数返回对象中的key作为传递给UI组件props的key，value就作为传递给UI组件props的value——操作状态的方法
function mapDispatchToProps(){
    return {jia:()=>{}}
}

//使用connect创建count容器组件
export{
    mapStateToProps
}