import React from 'react';
import './subscriptionsoffers.css';
import OfferBlock from './OfferBlock/OfferBlock';

class SubscriptionsOffers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="subscriptions-offers-component">
      {
        Array.isArray(this.props.offerInfo) && this.props.offerInfo.map((item, index) => (
          <OfferBlock key={index} item={item} />
        ))
      }
      </div>
    );
  }
}

SubscriptionsOffers.displayName = 'SubscriptionsOffers';
SubscriptionsOffers.propTypes = {};
SubscriptionsOffers.defaultProps = {};

export default SubscriptionsOffers;
