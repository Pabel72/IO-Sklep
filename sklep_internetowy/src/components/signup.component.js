import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Zarejestruj się</h3>

                <div className="form-group">
                    <label>Imię</label>
                    <input type="text" className="form-control" placeholder="Wprowadź imię" />
                </div>

                <div className="form-group">
                    <label>Nazwisko</label>
                    <input type="text" className="form-control" placeholder="Wprowadź nazwisko" />
                </div>

                <div className="form-group">
                    <label>Adres e-mail</label>
                    <input type="email" className="form-control" placeholder="Wprowadź adres e-mail" />
                </div>

                <div className="form-group">
                    <label>Hasło</label>
                    <input type="password" className="form-control" placeholder="Wprowadź hasło" />
                </div>

                <button type="Zatwierdź" className="btn btn-primary btn-block">Zarejestruj się</button>
                <p className="forgot-password text-right">
                  <a href="../login">Posiadasz już konto?</a>
                </p>
            </form>
        );
    }
}