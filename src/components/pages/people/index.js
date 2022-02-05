import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import {Actions} from 'react-native-router-flux';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  RefreshControl,
  ActivityIndicator,
  Text,
} from 'react-native';
import * as peopleActions from '../../../redux/people/actions';
import PeopleCard from '../../cards/people';
import styles from './styles';

const People = () => {
  const dispatch = useDispatch();
  const {list: peopleList, loading, total} = useSelector(state => state.people);

  const initList = useCallback(
    () => dispatch(peopleActions.initList()),
    [dispatch],
  );
  const onEndReached = useCallback(() => {
    if (!loading && peopleList?.length && peopleList?.length < total) {
      dispatch(peopleActions.getNextPage());
    }
  }, [dispatch, loading, peopleList, total]);

  useEffect(() => {
    initList();
  }, [initList]);

  const onPeoplePress = useCallback(
    people => {
      dispatch(peopleActions.setItem(people));
      Actions.push('Details', {title: people?.name || ''});
    },
    [dispatch],
  );

  const renderItem = useCallback(
    ({item, index}) => {
      const animation = index % 2 ? 'bounceInRight' : 'bounceInLeft';
      return (
        <Animatable.View animation={animation} delay={2000}>
          <PeopleCard people={item} onPeoplePress={onPeoplePress} />
        </Animatable.View>
      );
    },
    [onPeoplePress],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>
        <Text style={styles.title1}>BREAKING </Text>
        <Text style={styles.title2}>BAD</Text>
      </Text>
      <FlatList
        data={peopleList}
        renderItem={({item, index}) => renderItem({item, index})}
        keyExtractor={item => `people-${item?.char_id}`}
        numColumns={2}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <ActivityIndicator
            color={'white'}
            animating={loading && peopleList.length}
            size={'large'}
            style={styles.activityIndicator}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={loading && !peopleList.length}
            onRefresh={initList}
            colors={['white']}
            tintColor={'white'}
          />
        }
      />
    </SafeAreaView>
  );
};

export default People;
