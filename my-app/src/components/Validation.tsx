import React, { useState, MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


const eye = <FontAwesomeIcon icon={faEye} />;

const Validation: React.FC = () => {
  const [passwords, setPasswords] = useState({
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState("");
  const [strength, setStrength] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showRepPass, setShowRepPass] = useState(false);

  const regexWeak = new RegExp("(?=.*[a-z])|(?=.*[0-9]){6,}");
  const regexStrong = new RegExp("(?=.*[a-z])(?=.*[A-Z])|(?=.*[0-9])(?=.{6,})");
  const regexVeryStrong = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
  );

  const validate = (event: MouseEvent) => {
    event.preventDefault();

    if (
      passwords["password"].length > 0 &&
      passwords["repeatPassword"].length > 0
    ) {
      if (passwords["password"] !== passwords["repeatPassword"]) {
        setErrors("Пароли не совпадают");
      } else {
        setPasswords({ password: "", repeatPassword: "" });
        setErrors("");
        setStrength("");
        alert("Form is submitted");
      }
    } else {
      alert("Enter password");
    }
  };

  const setPass = (event: React.ChangeEvent<HTMLInputElement>) => {
    let x = event.target.name;
    if (x === "password") {
      setPasswords({ ...passwords, password: event.target.value });
      if (regexVeryStrong.test(event.target.value)) {
        setStrength("");
        setStrength("Надежный пароль");
      } else if (regexStrong.test(event.target.value)) {
        setStrength("");
        setStrength(
          "средний пароль, пароль должен содержать как минимум 1 большую букву, 1 символ и одну цифру"
        );
      } else if (regexWeak.test(event.target.value)) {
        setStrength("");
        setStrength(
          "слабый пароль, пароль должен содержать как минимум 1 большую букву, 1 символ и одну цифру"
        );
      } else if (event.target.value.length < 6) {
        setStrength("минимальная длина 6");
      } else {
        setStrength("");
      }
    } else {
      setPasswords({ ...passwords, repeatPassword: event.target.value });
    }
    setErrors("");
  };

  return (
    <div>
      <form>
        <div className="form-group col-sm-2 col-form-label">
          <label htmlFor="password">Пароль: </label>
          <input
            type={showPass ? "text" : "password"}
            className="form-control-lg"
            id="password"
            value={passwords["password"]}
            onChange={setPass}
            name="password"
          />
          <i
            onClick={() => {
              setShowPass(!showPass);
            }}
            style={{
              position: "absolute",
              right: "-115px",
              top: "50px",
              cursor: "pointer",
            }}
          >
            {eye}
          </i>
          <div className="text-danger">{strength}</div>
        </div>

        <div className="form-group col-sm-2 col-form-label">
          <label htmlFor="repeatPassword">Повторите пароль: </label>
          <input
            type={showRepPass ? "text" : "password"}
            className="form-control-lg"
            id="repeatPassword"
            value={passwords["repeatPassword"]}
            onChange={setPass}
            name="repeatPassword"
          />
          <i
            onClick={() => {
              setShowRepPass(!showRepPass);
            }}
            style={{
              position: "absolute",
              right: "-115px",
              top: "50px",
              cursor: "pointer",
            }}
          >
            {eye}
          </i>
          <div className="text-danger">{errors}</div>
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-primary" onClick={validate}>
            Продолжить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Validation;
