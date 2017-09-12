import React from 'react';
import './offerblock.css';
import {RaisedButton, Paper} from 'material-ui';

const styles = {
  offerBlockComponent: {
    height: 'auto',
    width: '25%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    padding: '30px 20px',
    boxSizing: 'border-box',
    backgroundColor: '#F5F5F5'
  },
  centerBtn: {
    margin: '30px auto 0 auto',
  }
};

class OfferBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {duration, firstFacility, secondFacility, offerProce, button} = this.props.item;
    return (
      <Paper style={styles.offerBlockComponent} zDepth={1}>
        <h3 className="offer-block-component__duration">{duration}</h3>
        <p className="offer-block-component__facility">{firstFacility}</p>
        <p className="offer-block-component__facility">{secondFacility}</p>
        <p className="offer-block-component__price">{offerProce}</p>
        <RaisedButton fullWidth={true} label={button} primary={true} style={styles.centerBtn}/>
      </Paper>
    );
  }
}

OfferBlock.displayName = 'OfferBlock';
OfferBlock.propTypes = {};
OfferBlock.defaultProps = {};

export default OfferBlock;
