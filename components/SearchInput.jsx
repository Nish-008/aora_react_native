import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { icons } from '../constants'

const SearchInput = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  
  const [showPassword, setshowPassword] = useState(false)
    return (
      <View
      className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4"
      >
        <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder={placeholder}
        placeholderTextColor='#7b7b8b'
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
        />
{title === 'Password' && (
  <GestureHandlerRootView>
   <TouchableOpacity onPress={()=> setshowPassword(!showPassword)}>
<Image
source={!showPassword ? icons.eye : icons.eyeHide}
className="w-6 h-6"
resizeMode='contain'
style={{ marginLeft: 'auto' }}
/>
    </TouchableOpacity>
    </GestureHandlerRootView>
  
)}
      </View>
  )
}

export default SearchInput