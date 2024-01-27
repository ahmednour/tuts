import { useState } from "react";
import axios from "axios";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [accept, setAccept] = useState(false);
  // sent api adata
  const [flage, setFlage] = useState(false);
  console.log(flage);
  // submit function form
  function Submit(e) {
    e.preventDefault();
    setAccept(true);
    if (name === "" || password.length < 8 || repeat !== password) {
      setFlage(false);
    } else setFlage(true);
    if (flage) {
      let res = axios
        .post("http://127.0.0.1:8000/api/register", {
          name: name,
          email: email,
          password: password,
          confirm: repeat,
        })
        .then((res) => console.log(res));
    }
  }

  return (
    <div className="form">
      <form onSubmit={Submit}>
        {/* user name */}
        <label htmlFor="name">Username</label>
        <input
          type="text"
          id="name"
          name="username"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* password */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          autoComplete="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password.length < 8 && accept && (
          <p className="error-message">
            Password must be more than 8 character
          </p>
        )}
        {/* repeat password */}
        <label htmlFor="repeatPassword">Repeat Password</label>
        <input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          placeholder="Repeat Password"
          autoComplete="repeatpassword"
          value={repeat}
          onChange={(e) => setRepeat(e.target.value)}
        />
        {repeat !== password && accept && (
          <p className="error-message">password dose not match </p>
        )}
        {/* submit */}
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
