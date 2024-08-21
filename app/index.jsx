import { Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { images } from '../constants';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomButton from '../components/CustomButton';


const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="bg-primary h-full"> 
        <ScrollView contentContainerStyle={{height:'100%'}}>
          <View className="w-full justify-center items-center h-full px-4">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />
            <Image
              source={images.cards}
              className="max-w-[380px] w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="relative mt-5">
<Text className="text-3xl text-white font-bold text-center">
  Discover Endless Possibilities with{' '}
  <Text className='text-secondary-200'> Aora </Text>
</Text>
<Image
source={images.path}
className="w-[136px] h-[14px] absolute -bottom-2 -right-8"
resizeMode='contain'
/>
            </View>
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center"> Where creativity meets innovation: embark on a journey on limitless exploration with Aora</Text>
          <CustomButton/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default RootLayout
