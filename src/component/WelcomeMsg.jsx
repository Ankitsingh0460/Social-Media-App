
const WelcomeMsg = ({ onclickhandle }) => {


  return <center className="welcomemsg">
    <h1>There is no Post</h1>
    <button onClick={onclickhandle} type="button" className="btn btn-primary">Get Post From Server</button>


  </center>
}


export default WelcomeMsg;