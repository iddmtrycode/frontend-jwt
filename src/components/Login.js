import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <section className="hero has-pbackground-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form className="box">
                <div className="field mt-5">
                  <label className="label">Email or Username</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label" value={password} onChange={(e) => setPassword(e.target.value)}>Password</label>
                  <div className="controls">
                    <input type="Password" className="input" placeholder="********" />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
