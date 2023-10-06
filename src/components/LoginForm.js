import "../style/LoginForm.css";

export const LoginForm = (props) => {
  return (
    <div className="LoginForm">
      <p className="text">Login</p>
      <form>
        <label>Email</label>
        <input onChange={(event) => props.setEmail(event.target.value)} />
        <label>Password</label>
        <input
          type="password"
          onChange={(event) => props.setPassword(event.target.value)}
        />
        <button className="submit-btn" onClick={props.handleSubmit}>
          login
        </button>
      </form>
    </div>
  );
};
