import React from 'react';
import { withStyles } from '@mui/material/styles';

// スクロールバー設定
import { Scrollbars } from 'react-custom-scrollbars-2';

// Google Analystics関連
import WithTracker from '../components/WithTracker';

// Google Adsense関連
import AdSense from 'react-adsense';

// スタイル
const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  footer: {
    marginTop: 'auto',
  },
});

const WrapMainContent = (WrappedComponent, options = {}) => {

  const HOC = class extends React.Component {
    
    render() {
    
      // Material-ui関連
      const { classes, ...other_props } = this.props;
    
      return (
        <Scrollbars>
          
          <div className={classes.wrapper}>
          
            <WrappedComponent {...other_props} />
            
            <div className={classes.footer}>
              <AdSense.Google
                client='ca-pub-6639203972578425'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
              />
            </div>
          </div>
        </Scrollbars>
      );
    }
  };

  return (
    WithTracker( //Google Analystics用Wrapper
      withStyles(styles, { withTheme: true })(HOC)
    )
  );
};

export default WrapMainContent;