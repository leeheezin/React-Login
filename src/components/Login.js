import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");

  const userId = (id) => {
    const checkId = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    if (!checkId.test(id)) {
      setIdError("이메일 형식이 아닙니다.");
      return false;
    }
    setIdError("");
    return true;
  };

  const userPw = (pw) => {
    const checkPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]*[a-zA-Z][a-zA-Z\d]*$/;
    if (!checkPw.test(pw)) {
      setPwError("비밀번호는 영자로 시작하고, 소문자, 대문자, 숫자를 최소 1자 이상 포함하여야 합니다.");
      return false;
    }
    setPwError("");
    return true;
  };

  const navigate = useNavigate();
  const login = (e) => {
    if (!userId(id) || !userPw(pw)) {
      return;
    }
    localStorage.setItem("userInfo", JSON.stringify({ id, pw }));
    navigate("/main");
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      setId(userInfo.id);
      setPw(userInfo.pw);
    }
  }, []);
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={style}>
      <h1>Login</h1>
      <form action="">
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="email" /><br />
        {idError && <span>{idError}</span>}<br />
        <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="password" /><br />
        {pwError && <span>{pwError}</span>}<br />
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
}

export default Login;
