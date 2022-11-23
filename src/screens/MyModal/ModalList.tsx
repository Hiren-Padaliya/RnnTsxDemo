import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserApi } from '../../Redux/Action';
import { LIST_PROPS } from '../../Components/props';

const ModalList = () => {
  const { users } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);

  /**
   * set user data on update
   */
  React.useEffect(() => {
    setData(users);
  }, [users]);

  /**
   * fetch user data when screen appear
   */
  React.useEffect(() => {
    if (users.length == 0) {
      fetchUserApi(dispatch);
    }
  }, []);

  /**
   * user listing
   */
  const renderItem = ({ item, index }: LIST_PROPS) => {
    return (
      <View style={styles.listView}>
        <Text style={styles.listText}>{item.name}</Text>
      </View>
    );
  };

  /**
   * flatlist code
   */
  return (
    <View style={styles.listConatiner}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ModalList;

const styles = StyleSheet.create({
  listConatiner: {
    width: '100%',
    flex: 1,
  },
  listView: {
    height: 100,
    width: '90%',
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: { height: 2, width: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginBottom: 15,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },
  listText: {
    fontSize: 17,
    textAlign: 'center',
    width: '80%',
    fontWeight: '600',
    color: "black"
  },
});
