import React from 'react';
import {
  FlatList,
  View,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {loadHolidayList} from '../../actions/homeActions';

class Home extends React.Component {
  static navigationOptions = {
    header: null,
    isPulled: false,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.tryToGet();
  }

  tryToGet = () => {
    this.props.fetchData();
  };
  render() {
    const {data, loader} = this.props;

    return (
      <SafeAreaView>
        {loader ? (
          <View style={styles.Container}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <View style={styles.mainContainer}>
            <FlatList
              data={data}
              onRefresh={() => this.tryToGet()}
              refreshing={loader}
              renderItem={({item}) => (
                <View style={styles.tile}>
                  <View style={styles.tileView}>
                    <Text style={styles.holidayNameText}>{item.summary}</Text>
                    <Text style={styles.holidayDate}>{item.end.date}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        )} 
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  const {data, loader} = state.home;
  return {
    data,
    loader,
  };
}

const mapDispatchToProps = {
  fetchData: loadHolidayList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

{
  /* <View style={styles.container}>
        <View>
          <Text>Holiday App</Text>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Text style={styles.item}>{item.summary}</Text>
            )}
          />
        </View>
      </View> */
}
