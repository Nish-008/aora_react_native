import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';

const Home = () => {
  return (
    <GestureHandlerRootView className="bg-primary border-2 border-red-500 h-full">
      <SafeAreaView>
        <FlatList
        data={[]}
          // data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
          keyExtractor={(item) => item.id.toString()} // Added toString() for keyExtractor
          renderItem={({ item }) => (
            <Text className="text-3xl text-gray-100">{item.id}</Text>
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
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Home;
