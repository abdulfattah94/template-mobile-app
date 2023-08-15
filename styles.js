import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#95a5a6',
    flex: 1,
  },
  illustration: {
    top: 94,
    left: 24,
    right: 24,
    position: 'absolute',
    alignItems: 'center',
  },
  ProgressContainer: {
    bottom: 120,
    left: 0,
    position: 'absolute',
    width: 300 - 32,
    height: 56,
    marginHorizontal: 16,
    borderRadius: 6,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  current: {
    height: 4,
    backgroundColor: '#FFFFFF',
    marginTop: 4,
    borderRadius: 2,
  },
});
export default Styles;
