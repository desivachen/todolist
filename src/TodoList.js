import React, { Fragment } from "react";
import './TodoList.css';
import Todoitem from './Todoitem';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:'請輸入待辦事項',
            list:[]
        }
    }
    InputChange(event){
        this.setState({
            inputValue:event.target.value
        })
    }

    BtnClick(){
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue:'請輸入待辦事項'
        })
        }
    TextClean(){
        this.setState({
            inputValue:''
        })
    }
    
	render(){
        return(
            <Fragment>
            {/*在jsx寫註解要這樣*/}
                 <div>
                    <label htmlFor="insertArea">輸入內容  </label>
                     <input 
                            id="insertArea"
                            className="input"
                            value={this.state.inputValue}
                            onClick={this.TextClean.bind(this)}
                            onChange={this.InputChange.bind(this)}
                     /> 
                     <button onClick={this.BtnClick.bind(this)}>紀錄</button></div>
            <ul>
               {this.state.list.map((item, index)=>{
                    return(
						<div>
						<Todoitem 
						content={item} 
						index={index} 
						deleteItem={this.ItemDelete.bind(this)}
						/> 
					</div>
                    )})}
            </ul>
            </Fragment>
        )
    }
    ItemDelete(index){
        //immutable
        //state不允許做任何改變。如果要改變就是像下面這樣加入[]，建立一個副本來改變副本，但不動本體。
        const list = [...this.state.list]; //如果寫成const list =...this.state.list 沒有複製
        list.splice(index, 1, '已刪除');
        this.setState({
            list:list
        })
    }
}
export default TodoList;