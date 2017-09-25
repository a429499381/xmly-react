import React, {Component} from 'react';

import * as AV from 'leancloud-storage/dist/av'



class Play extends Component {
   constructor(props) {
     super(props)
     this.state = {
       userName: '',
       password: '',
       name: ''
     }
   }
    render() {
        return (
            <div>
              <h1>登陆{this.state.name}</h1>
              <form ref="SingUp">
                <input type="text" name="userName" onChange={this.changeUser.bind(this)} placeholder="用户名" value={this.state.userName}/>
                <input type="password" name="password" onChange={this.changePasword.bind(this)} placeholder="密码" value={this.state.password}/>
              </form>

              <button type="submit" name="submit" placeholder="注册" onClick={this.SingUpHandle.bind(this)}>注册</button>

            </div>
        )
    }
  SingUpHandle() {
     let user = new AV.User()
    if(!user.current()) {
      let APP_ID = '3X9jTyLPjORGtQIdFneYartA-gzGzoHsz';
      let APP_KEY = '9XKG8fPj4NlLgIWf71AWrQeD';

      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    }

    // var user= new AV.User();
    console.log('user',user)
    user.setUsername(this.state.userName)
    user.setPassword(this.state.password)
    user.signUp().then(success => {
      let name = user.current().username
      this.setState({
        name: name
      })
    })
  }

  changeUser(e) {
     this.setState({
       userName: e.target.value
     })
  }
  changePasword(e) {
    this.setState({
      password: e.target.value
    })
  }
}

export  default Play