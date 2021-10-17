import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterGame: {
    width: '50%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#f4511e',
  },
  buttonText: { color: AppStyles.color.COLOR_WHITE, fontWeight: '700' },
  scoreButton: {
    marginTop: 20,
    width: '50%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#f4511e',
  },
});

export default styles;
