import React, { Component } from "react";
import 'bootswatch/dist/lux/bootstrap.css'

export default class Login extends Component {
    render() {

        return (

            <form>
                <h3>Zaloguj się</h3>

                <div className="form-group">
                    <label>Adres e-mail</label>
                    <input type="email" className="form-control" placeholder="Wprowadź adres e-mail" />
                </div>

                <div className="form-group">
                    <label>Hasło</label>
                    <input type="password" className="form-control" placeholder="Wprowadź hasło" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Zapamiętaj mnie</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Zatwierdź</button>
                <p className="forgot-password text-center">
                    <a href="#">Nie pamiętasz hasła?</a>
                </p>
                <p className="not-registered-yet text-center">
                    <a href="../signup">Nie posiadasz konta? Zarejestruj się!</a>
                    </p>
            </form>
        );
    }
}
