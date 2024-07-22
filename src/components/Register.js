import axios from "axios";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  // const navigate = useNavigate();

  const Register = async (e) => {
    e.prevent.default();

    try {
      await axios.post(
        "http://localhost:5000/users",
        {
          name: name,
          email: email,
          password: password,
          confPassword: confPassword
        });
    } catch (error) {
      if(error) {
      console.log(error.response);
      }
    }

    // await axios.post('http://localhost:5000/users', {
    //   name: name,
    //   email: email,
    //   password: password,
    //   confPassword: confPassword
    // })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch(error => console.log(error))
    //   .finally(console.log("finally run ..."));
  };
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={Register} className="box">
                <div className="field mt-5">
                  <label className="label">Name</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Email or Username</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="Username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label
                    className="label"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  >
                    Password
                  </label>
                  <div className="controls">
                    <input
                      type="Password"
                      className="input"
                      placeholder="********"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label
                    className="label"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                  >
                    Confirm Password
                  </label>
                  <div className="controls">
                    <input
                      type="Password"
                      className="input"
                      placeholder="********"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
