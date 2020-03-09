import React, {Component} from 'react'
import config from './config.json'
import style from './main.less'

class App extends Component{
    render(){
        return (
            <div>
              <p className={style.demo}>{config[0].text}</p>
            </div>
        )
    }
}
export default App;