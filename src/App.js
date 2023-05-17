import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
import logo from './assets/logo.png';
import Filter from './components/Filter';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: null,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    cards: [],
    filterCards: [],
    isCheckedTrunfo: false,
  };

  onInputChange = (event) => {
    const { name, type, checked, value } = event.target;
    const valueField = type === 'checkbox' ? checked : value;
    this.setState(
      () => ({
        [name]: valueField,
        isSaveButtonDisabled: !this.validateForm(),
      }),
      () => {
        this.setState(() => ({
          isSaveButtonDisabled: !this.validateForm(),
        }));
      },
    );
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState(() => ({
        hasTrunfo: true,
      }));
    }

    this.setState(
      (previousState) => ({
        cards: [...previousState.cards, {
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo,
        }],
      }
      ),
      () => {
        const { cards } = this.state;
        this.setState(() => ({
          filterCards: cards,
        }));
      },
    );

    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: null,
      isSaveButtonDisabled: true,
    }));
  };

  validateForm = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const maxTotalAttr = 210;
    const maxAttr = 90;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    if (!cardName || !cardDescription || !cardImage || !cardRare) {
      return false;
    }

    const totalAttr = attr1 + attr2 + attr3;
    if (totalAttr > maxTotalAttr) {
      return false;
    }

    if (attr1 > maxAttr
        || attr2 > maxAttr
        || attr3 > maxAttr) {
      return false;
    }

    if (attr1 < 0 || attr2 < 0 || attr3 < 0) {
      console.log('menor que zero');
      return false;
    }

    return true;
  };

  removeFromFilter = (cardName) => {
    const { filterCards } = this.state;
    const newFilterCards = filterCards.filter((card) => card.cardName !== cardName);
    this.setState(() => ({
      filterCards: newFilterCards,
    }));
  };

  handleDelete = (cardName) => {
    const { cards } = this.state;
    const newCards = cards.filter((card) => card.cardName !== cardName);
    const hasTrunfo = newCards.some((card) => card.cardTrunfo);

    if (!hasTrunfo) {
      this.setState(() => ({
        hasTrunfo: false,
      }));
    }

    this.removeFromFilter(cardName);

    this.setState(() => ({
      cards: newCards,
    }));
  };

  handleFilterName = (event) => {
    const { value } = event.target;
    const { cards } = this.state;
    const newFilterCards = cards.filter((card) => card.cardName.includes(value));
    if (!value) {
      this.setState(() => ({
        filterCards: cards,
      }));
      return;
    }
    this.setState(() => ({
      filterCards: newFilterCards,
    }));
  };

  handleFilterRare = (event) => {
    const { value } = event.target;
    const { cards } = this.state;
    const newFilterCards = cards.filter((card) => card.cardRare === value);
    if (!value || value === 'todas') {
      this.setState(() => ({
        filterCards: cards,
      }));
      return;
    }
    this.setState(() => ({
      filterCards: newFilterCards,
    }));
  };

  handleFilterTrunfo = (event) => {
    const { checked } = event.target;
    const { cards } = this.state;
    const newFilterCards = cards.filter((card) => card.cardTrunfo === checked);
    if (!checked) {
      this.setState(() => ({
        filterCards: cards,
      }));
      return;
    }
    this.setState(() => ({
      filterCards: newFilterCards,
      isCheckedTrunfo: checked,
    }));
  };

  render() {
    const { filterCards, isCheckedTrunfo } = this.state;
    return (
      <div className="App">
        <img src={ logo } alt="logo" className="logo" />
        <div className="grid">
          <div className="left">
            <div className="wrapper">
              <h3 className="title">ADICIONE NOVA CARTA</h3>
              <Form
                { ...this.state }
                onInputChange={ this.onInputChange }
                onSaveButtonClick={ this.onSaveButtonClick }
              />
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <h3 className="title">PRÉ-VISUALIZAÇÃO</h3>
              <Card
                { ...this.state }
              />
            </div>
          </div>
        </div>
        <div className="bottom">
          <h1>TODAS AS CARTAS</h1>
          <Filter
            onChangeName={ this.handleFilterName }
            onChangeRare={ this.handleFilterRare }
            onChangeTrunfo={ this.handleFilterTrunfo }
            isCheckedTrunfo={ isCheckedTrunfo }
          />
          <CardList cards={ filterCards } onRemove={ this.handleDelete } />
        </div>
      </div>
    );
  }
}

export default App;
