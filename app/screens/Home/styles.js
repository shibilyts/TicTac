import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemStyle: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: AppStyles.color.COLOR_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4511e',
  },
  itemText: { fontSize: 24, color: AppStyles.color.COLOR_WHITE },
  modalWinnerText: {
    color: AppStyles.color.COLOR_WHITE,
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  modalRowView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
    alignSelf: 'center',
  },
  closeButtonModal: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  modalContainerView: { flex: 1, alignItems: 'center', paddingTop: '45%' },
  modalReplayButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f4511e',
  },
  flatlist: { alignSelf: 'center', marginTop: '30%' },
  bottomCloseButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f4511e',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomButtonText: {
    color: AppStyles.color.COLOR_WHITE,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default styles;
