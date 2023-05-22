import { Link, useNavigate } from "react-router-dom"

function Main () {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const id = userInfo ? userInfo.id : "";
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate("/")
    }
    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    };
    return(
        <div style={style}>
            <span>{id}님 환영합니다.</span>
            <button onClick={()=>{logout()}}>Logout</button>
            <h1>Home</h1>
            <Link to="/">login page</Link>
        </div>
    )
}

export default Main