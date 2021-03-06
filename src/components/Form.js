import React, { Component } from "react";
import PropTypes from "prop-types";
//For using awesome fonts directly

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faMeh, faFrown } from "@fortawesome/free-solid-svg-icons";
library.add(faSmile,faMeh, faFrown);


class Form extends Component {
  render() {
    const {
      preventSubmission,
      getWhoCalls,
      errorPerson,
      getRequestedEmployee,
      getName,
      getCompany,
      getPosition,
      getOtherInfo,
      getEmail,
      getPhone,
      getCallAction,
      getMessage,
      errorMessage,
      deselectOption,
      selectPersonRequested,
      redialCheck,
      callBackCheck,
      callAgainClass,
      callBackClass,
      getInputTone,
      tone,
      errorTone, 
    } = this.props;

    return (
      <form
        method="post"
        onSubmit={preventSubmission}
        className="registration__form"
      >
        <fieldset className="form-section addedBy">
          <div className="formUp">
            <div className="main__addedBy">
              <h2 className="main__addedBy--title">
                ¿Quién atendió la llamada?
              </h2>
              <select className="main__employees" onChange={getWhoCalls}>
                <option value="Elige un empleado">Elige un empleado</option>
                <option value="Alex">Alex</option>
                <option value="Bea">Bea</option>
                <option value="Chuck">Chuck</option>
                <option value="Isma">Isma</option>
                <option value="Juan">Juan</option>
                <option value="Lily">Lily</option>
                <option value="Natalia">Natalia</option>
                <option value="Paula">Paula</option>
                <option value="Sera">Sera</option>
              </select>
              <p className={`error-msg-employee ${errorPerson}`}>
                Debes seleccionar un empleado
              </p>
            </div>
            <div className="main__personRequested">
              <h2 className="main__personRequested-title">
                ¿Por quién preguntaban?
              </h2>
              <select
                className="main__employees"
                onChange={getRequestedEmployee}
                onClick={deselectOption}
                ref={selectPersonRequested}
                required
              >
                <option className="option" value="Elige un empleado">
                  Elige un empleado
                </option>
                <option value="Alex">Alex</option>
                <option value="Bea">Bea</option>
                <option value="Chuck">Chuck</option>
                <option value="Isma">Isma</option>
                <option value="Juan">Juan</option>
                <option value="Lily">Lily</option>
                <option value="Natalia">Natalia</option>
                <option value="Paula">Paula</option>
                <option value="Sera">Sera</option>
              </select>
              <p className={`error-msg-employee ${errorPerson}`}>
                Debes seleccionar un empleado
              </p>
            </div>
          </div>
        </fieldset>
        <div className="incoming-data__container">
          <fieldset className="form-section incoming-data">
            <h2 className="incoming-data__title">¿Quién llamó?</h2>
            <div className="incoming-data__fieldsContainer">
              <div className="incoming-data__name">
                <label
                  htmlFor="name"
                  className="incoming-data__name--label label"
                  aria-label="nombre"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  className="incoming-data__name--input incoming-data__input"
                  placeholder="Nombre"
                  onKeyUp={getName}
                />
                <p className={`error-msg ${this.props.nameRequired }`}>El campo nombre es obligatorio</p>
              </div>
              <div className="incoming-data__company">
                <label
                  htmlFor="company"
                  className="incoming-data__company--label label"
                  aria-label="empresa"
                >
                  Empresa
                </label>
                <input
                  id="company"
                  type="text"
                  className="incoming-data__company--input incoming-data__input"
                  placeholder="Empresa"
                  onKeyUp={getCompany}
                />
                 <p className={`error-msg ${this.props.companyRequired }`}>El campo empresa es obligatorio</p>
              </div>
              <div className="incoming-data__position">
                <label
                  htmlFor="position"
                  className="incoming-data__position--label label"
                  aria-label="cargo"
                >
                  Cargo
                </label>
                <input
                  id="position"
                  type="text"
                  className="incoming-data__position--input incoming-data__input"
                  placeholder="Cargo"
                  onKeyUp={getPosition}
                />
              </div>
              <div className="incoming-data__other-info">
                <label
                  htmlFor="other-info"
                  className="incoming-data__other-info--label label"
                  aria-label="otro detalle"
                >
                  Otro detalle
                </label>
                <input
                  id="other-info"
                  type="text"
                  className="incoming-data__other-info--input incoming-data__input"
                  placeholder="Otro detalle"
                  onKeyUp={getOtherInfo}
                />
              </div>
              <div className="incoming-data__email">
                <label
                  htmlFor="email"
                  className="incoming-data__email--label label"
                  aria-label="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="incoming-data__email--input incoming-data__input"
                  placeholder="Email"
                  onKeyUp={getEmail}
                />
              </div>
              <div className="incoming-data__mobile">
                <label
                  htmlFor="mobile"
                  className="incoming-data__mobile--label label"
                  aria-label="teléfono"
                >
                  Teléfono
                </label>
                <input
                  id="mobile"
                  type="tel"
                  className="incoming-data__mobile--input incoming-data__input"
                  placeholder="Teléfono"
                  onKeyUp={getPhone}
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="form-section message">
            <h2 className="message__title">¿Qué mensaje dejó?</h2>
            <div className="call-container__wrapper">
              <div className="call-container__radios">
                <div className="call__container">
                  <label
                    htmlFor="redial"
                    className={`callAction_selection label fake-redial-button ${callAgainClass}`}
                  >
                    Llamará de nuevo
                    <input
                      id="redial"
                      type="checkbox"
                      checked={redialCheck}
                      value="Llamará de nuevo"
                      className="callAction__selection--redial"
                      placeholder="Llamará de nuevo"
                      name="call"
                      onChange={getCallAction}
                      ref={this.redialButton}
                    />
                  </label>
                </div>
                <div className="call__container">
                  <label
                    htmlFor="call-back"
                    className={`callAction_selection label fake-CallBack-button ${callBackClass}`}
                  >
                    Devolver la llamada
                    <input
                      id="call-back"
                      type="checkbox"
                      checked={callBackCheck}
                      value="Devolver la llamada"
                      className="callAction__selection--call-back"
                      placeholder="Devolver la llamada"
                      name="call"
                      onChange={getCallAction}
                      ref={this.callBack}
                    />
                  </label>
                </div>
              </div>
              <div className="message_container">
                <label htmlFor="message" className="message__label label">
                  Mensaje personalizado
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="message__input"
                  placeholder="Mensaje personalizado"
                  onKeyUp={getMessage}
                />
                <p className={`error-msg-textarea ${errorMessage}`}>
                  Debes rellenar el campo del mensaje.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <fieldset className="form-section tone">

            <legend className="form__tone-title">¿Cómo fue el clima de la llamada?</legend>
            <div className="form__tone-container">
            <label htmlFor="good" className={tone.includes("good") ? "tone__label selectedClass" : "tone__label"}>
            <FontAwesomeIcon icon="smile" className="icon"/>
              Genial
            </label>
            <input
              className="tone__input"
              type="radio"
              name="tone"
              id="good"
              value="good"
              checked={tone.includes("good")}
              onChange={getInputTone}
              required
            />

            <label htmlFor="neutral" className={tone.includes("neutral") ? "tone__label selectedClass" : "tone__label"}>
            <FontAwesomeIcon icon="meh" className="icon"/>
              Meh
            </label>
            <input
              className="tone__input"
              type="radio"
              name="tone"
              id="neutral"
              value="neutral"
              checked={tone.includes("neutral")}
              onChange={getInputTone}
              required
            />

            <label htmlFor="bad" className={tone.includes("bad") ? "tone__label selectedClass" : "tone__label"}>
            <FontAwesomeIcon icon="frown" className="icon"/>
              Bad
            </label>
            <input
              className="tone__input"
              type="radio"
              name="tone"
              id="bad"
              value="bad"
              checked={tone.includes("bad")}
              onChange={getInputTone}
              required
            />
            <p className={`error-msg-tone ${errorTone}`}>
              Debes seleccionar un estado.
            </p>
            </div>
          </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  preventSubmission: PropTypes.func.isRequired,
  getWhoCalls: PropTypes.func.isRequired,
  errorPerson: PropTypes.string.isRequired,
  getRequestedEmployee: PropTypes.func.isRequired,
  errorIncomingData: PropTypes.string.isRequired,
  getName: PropTypes.func.isRequired,
  getCompany: PropTypes.func.isRequired,
  getPosition: PropTypes.func.isRequired,
  getOtherInfo: PropTypes.func.isRequired,
  getEmail: PropTypes.func.isRequired,
  getPhone: PropTypes.func.isRequired,
  getCallAction: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  deselectOption: PropTypes.func.isRequired,
  redialCheck: PropTypes.bool.isRequired,
  callBackCheck: PropTypes.bool.isRequired,
  callAgainClass: PropTypes.string.isRequired,
  callBackClass: PropTypes.string.isRequired,
  errorTone: PropTypes.string.isRequired,
  tone: PropTypes.string.isRequired, 
  getInputTone: PropTypes.func.isRequired,
};

export default Form;
