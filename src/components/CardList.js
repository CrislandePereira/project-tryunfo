import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

class CardList extends React.Component {
  render() {
    const { cards, onRemove } = this.props;
    return (
      <div className="all-cards">
        <div className="card-list">
          {cards.map((card) => (
            <div key={ card.cardName } className="card-item">
              <Card { ...card } key={ card.cardName } />
              <button
                className="delete-button"
                type="button"
                onClick={ () => onRemove(card.cardName) }
                data-testid="delete-button"
              >
                Excluir

              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string,
      cardType: PropTypes.string,
      cardRarity: PropTypes.string,
      cardCost: PropTypes.number,
      cardImage: PropTypes.string,
      cardDescription: PropTypes.string,
    }),
  ),
  onRemove: PropTypes.func.isRequired,
};

CardList.defaultProps = {
  cards: [],
};

export default CardList;
