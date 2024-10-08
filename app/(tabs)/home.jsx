import { View, Text, FlatList, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView, RefreshControl } from 'react-native-gesture-handler';
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import {getAllPosts} from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';
import VideoCard from '../../components/VideoCard';

const Home = () => {
  const {data : posts, refetch} = useAppwrite(getAllPosts);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }

  return (
    <GestureHandlerRootView className="bg-primary border-2 border-red-500 h-full">
      <SafeAreaView>
        <FlatList
        // data={[]}
          data={posts}
          keyExtractor={(item) => item.id} // Added toString() for keyExtractor
          renderItem={({ item }) => (
           <VideoCard video={item}/>
          )}
          ListHeaderComponent={() => { 
            return ( 
              <View className="my-6 px-4 space-y-6">
                <View className="justify-between items-start flex-row mb-6">
                  <View>
                    <Text className="font-pmedium text-sm text-gray-100">Welcome Back</Text>
                    <Text className="text-2xl font-semibold text-white">Nishat</Text>
                  </View>
                  <View className="mt-1.5">
                   <Image
                   source={images.logoSmall}
                   className="w-9 h-10"
                   resizeMode='conatain'
                   />
                  </View>
                </View>
                <SearchInput/>
                <View className="w-full flex-1 pt-5 pb-8">
                <Text className="text-gray-100 text-lg font-pregular mb-3">
                  Latest Videos
                </Text>
                <Trending posts={[{id: 1}, {id: 2}, {id: 3}?? []]}/>
                </View>
              </View>
            );
          }} 
          ListEmptyComponent={() => (
        <EmptyState 
        title="No Videos Found"
        subtitle="Be the first one to upload a video!"
        />
          )}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Home;
