/**
 * Created by xutao on 2017/10/28.
 */
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
    todolist: state.todolist
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actionsTodoList: bindActionCreators(actionsTodoList, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
