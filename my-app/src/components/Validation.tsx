import React, { useState, useEffect } from "react";

const Validation: React.FC = () => {
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  return (
    <div>
      <form>
        <div className="form-group col-sm-2 col-form-label">
          <label htmlFor="password">Пароль: </label>
          <input
            type="password"
            className="form-control-lg "
            id="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="form-group col-sm-2 col-form-label">
          <label htmlFor="repeatPassword">Повторите пароль: </label>
          <input
            type="password"
            className="form-control-lg "
            id="repeatPassword"
            onChange={(event) => setRepPassword(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Продолжить
        </button>
      </form>
      {console.log(password === repPassword)} 
    </div>
  );
};

export default Validation;
