import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;

    return (
      <form className="form">
        <div className="form__group">
          <label htmlFor="cardName">Nome</label>
          <input
            className="form__input"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            id="cardName"
            name="cardName"
            required
          />
          <label htmlFor="cardDescription">Descrição</label>
          <textarea
            className="form__input"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            id="cardDescription"
            name="cardDescription"
            required
          />
        </div>
        <div className="form__group2">
          <div className="each-attr">
            <label htmlFor="cardAttr1">Attr01</label>
            <input
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              id="cardAttr1"
              name="cardAttr1"
              required
            />
          </div>
          <div className="each-attr">
            <label htmlFor="cardAttr2">Attr02</label>
            <input
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              id="cardAttr2"
              name="cardAttr2"
              required
            />
          </div>
          <div className="each-attr">
            <label htmlFor="cardAttr3">Attr03</label>
            <input
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              id="cardAttr3"
              name="cardAttr3"
              required
            />
          </div>
          <p>Pontos restantes = 000</p>
          <div className="each-attr">
            <label htmlFor="cardImage">Imagem</label>
            <input
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              type="text"
              id="cardImage"
              name="cardImage"
              required
            />
          </div>
        </div>
        <div className="form__group3">
          <label htmlFor="cardRare">Raridade</label>
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            id="cardRare"
            name="cardRare"
            required
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
          <span className="total-pontos">Total de pontos = 000</span>
        </div>
        <div className="form_group4">
          {!hasTrunfo
        && <input
          className="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          type="checkbox"
          id="cardTrunfo"
          name="cardTrunfo"
          disabled={ hasTrunfo }
        /> }
          {!hasTrunfo && <span className="trunfo">Super Trunfo</span>}
          {
            hasTrunfo
            && <span className="trunfo">Você já tem um Super Trunfo em seu baralho</span>
          }
          <button
            className="salvar"
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onSaveButtonClick: PropTypes.func,
  onInputChange: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool,
};

Form.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
  onSaveButtonClick: () => {},
  hasTrunfo: false,
};

export default Form;
