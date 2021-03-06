import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters';
import Graphics from './Graphics';
import '../styles/Dashboard.scss';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboardContainer">
        <Filters
          actionSetFilterStartDate={this.props.actionSetFilterStartDate}
          actionSetFilterEndDate={this.props.actionSetFilterEndDate}
          dateStart={this.props.startDate}
          dateEnd={this.props.endDate}
          allCompanies={this.props.allCompanies}
          getCompanySelected={this.props.getCompanySelected}
          companySelected={this.props.companySelected}
        />
        <Graphics
          pieData={this.props.pieData}
          pieLoading={this.props.pieLoading}
          barData={this.props.barData}
          barLoading={this.props.barLoading}
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
  pieData: PropTypes.arrayOf(PropTypes.array),
  pieLoading: PropTypes.string.isRequired,
  barData: PropTypes.arrayOf(PropTypes.array),
  barLoading: PropTypes.string.isRequired,
  actionSetFilterStartDate: PropTypes.func.isRequired,
  actionSetFilterEndDate: PropTypes.func.isRequired,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
  allCompanies: PropTypes.arrayOf(PropTypes.string),
  getCompanySelecte: PropTypes.func,
  companySelected: PropTypes.string
};

export default Dashboard;
