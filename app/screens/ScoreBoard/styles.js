import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 18,
    fontWeight: '700',
    color: AppStyles.color.COLOR_WHITE,
    textAlign: 'left',
  },
  scoreView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    color: AppStyles.color.COLOR_WHITE,
  },
  headerView: {
    flexDirection: 'row',
    backgroundColor: '#f4511e',
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: AppStyles.color.COLOR_WHITE,
  },
});

export default styles;
