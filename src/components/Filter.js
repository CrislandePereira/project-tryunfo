import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

class Filter extends React.Component {
  render() {
    const { onChangeName, onChangeRare, onChangeTrunfo, isCheckedTrunfo } = this.props;
    return (
      <div className="filterCards">
        <label className="label-filter" htmlFor="filter">
          Filtros de busca
        </label>

        <input
          className="input-filter"
          type="text"
          name="filter"
          disabled={ isCheckedTrunfo }
          data-testid="name-filter"
          onChange={ onChangeName }
          placeholder="Nome da carta"
        />

        <select
          className="input-filter"
          data-testid="rare-filter"
          disabled={ isCheckedTrunfo }
          name="rare"
          onChange={ onChangeRare }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <input
          type="checkbox"
          name="trunfo"
          data-testid="trunfo-filter"
          placeholder="Trunfo"
          onChange={ onChangeTrunfo }
        />
        <label className="label-filter" htmlFor="trunfo">
          Super Trunfo
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  onChangeRare: PropTypes.func.isRequired,
  onChangeTrunfo: PropTypes.func.isRequired,
  isCheckedTrunfo: PropTypes.bool,
};

Filter.defaultProps = {
  isCheckedTrunfo: false,
};

export default Filter;
