import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    height: 70,
    padding: 20,
  },
  profile: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  imgUser: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  edit: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editTxt: {
    marginLeft: 10,
    fontSize: 16,
    color: '#7A7886',
  },
  name: {
      color: '#4D4B57',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
  },
  phone: {
      fontSize: 16,
      color: '#7A7886',
      marginBottom: 30,
  }, 
  listOperation: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 55,
      marginBottom: 20,
      backgroundColor: 'white',
      borderRadius: 10,
  },
  nameOperation: {
      fontSize: 17,
      marginLeft: 15, 
      fontWeight: 'bold',
      color: '#4D4B57'
  }
});