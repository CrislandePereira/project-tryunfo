import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
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
    } = this.props;
    return (
      <div className="card">
        <div className="border">
          <div className="content">
            <div className="nome">
              <h2 data-testid="name-card">{cardName}</h2>
            </div>
            <img
              className="img-card"
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
            />
            <div className="icon-trunfo">
              { cardTrunfo
                && <p data-testid="trunfo-card" className="super-trunfo">Super Trunfo</p>}
            </div>

            <div className="description">
              <p data-testid="description-card">{cardDescription}</p>
            </div>

            <div className="attrs">
              <p className="each-attr-card" data-testid="attr1-card">{cardAttr1}</p>
              <p className="each-attr-card" data-testid="attr2-card">{cardAttr2}</p>
              <p className="each-attr-card" data-testid="attr3-card">{cardAttr3}</p>
            </div>
            <p className="rare" data-testid="rare-card">{cardRare}</p>

          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
};

export default Card;
