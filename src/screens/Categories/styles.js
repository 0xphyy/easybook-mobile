import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 6,
    margin: 10,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  categoriesPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
  categoriesInfo: {
    marginVertical:5
  },
  Imgcontainer: {
    paddingVertical: 10,
    width:"50%",
    marginHorizontal:50,
  },
  tinyLogo: {
    margin: 5,
    width: 120,
    marginVertical: 10,
  },
});

export default styles;
