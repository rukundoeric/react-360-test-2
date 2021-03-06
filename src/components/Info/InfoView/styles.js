import { StyleSheet } from 'react-360';

export default StyleSheet.create({
  root: {
    flexDirection: 'column',
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rootText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  greetingBox: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderColor: "#639dda",
    borderRadius: 20,
  },
  greeting: {
    fontSize: 30,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderColor: "#639dda",
  },
  rootButton: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 0,
  }
});
