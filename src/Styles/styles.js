import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  button: {
    backgroundColor: '#6ED7FA',
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
  },

  title: {
    fontSize: 30,
    paddingVertical: 40,
    paddingLeft: 15,
  },
  inputView: {
    gap: 15,
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#EFF0F0',
    borderBottomWidth: 0,
  },
  phoneInputContainer: {
    height: 50,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#EFF0F0',
  },
  phoneInputTextContainer: {
    backgroundColor: '#EFF0F0',
    borderRadius: 7,
  },
  phoneInputText: {
    height: 50,
    paddingHorizontal: 20,
  },
  forgetText: {
    fontSize: 15,
    color: '#779EB2',
    padding: 15,
    textAlign: 'center',
  },
  buttonView: {
    width: '100%',
    paddingHorizontal: 40,
  },
  loginError: {
    color: 'red',
    textAlign: 'center',
    paddingTop: 10,
  },
  loginMethodContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  methodButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: 'lightgray',
  },
  methodButtonText: {
    fontSize: 15,
  },
  selectedButton: {
    borderBottomColor: '#6ED7FA',
  },

  profileContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileText: {
    fontSize: 18,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 7,
    backgroundColor: '#F4F4F9',
  },
  boxValue: {
    fontSize: 18,
    marginTop: 5,
  },
  emailBox: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 7,
    backgroundColor: '#F4F4F9',
    fontSize: 15,
  },
  genderContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  genderLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  genderOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 100,
  },
  genderOption: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'lightgray',
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioButton: {
    borderColor: '#6ED7FA',
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#6ED7FA',
  },
  genderText: {
    fontSize: 16,
  },
});

export default styles;
