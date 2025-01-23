import * as React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from '~/components/ui/text';

export default function Post() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const goHome = () => {
    navigation.navigate('index');
  };

  return (
    <SafeAreaView className="bg-[white] h-full w-full">
      <View style={{ backgroundColor: '#3a2647', borderBottomRightRadius: 55, position: 'relative', height: 154 }}>
        <Image 
          source={require('../assets/icons/stars.png')} 
          style={{ position: 'absolute', width: '100%', height: '100%', resizeMode: 'cover' }}
        />
        
        <View className="max-w-[350px] w-full mx-auto">
          <View className="mt-6 flex flex-row justify-between">
            <TouchableOpacity onPress={goBack}>
              <Image source={require('../assets/icons/back.png')} />
            </TouchableOpacity>
            <Image source={require('../assets/icons/menu.png')} />
          </View>
        </View>

        <Text 
          className="text-white text-[20px] text-center"
          style={{ position: 'absolute', bottom: 25, left: 0, right: 0 }}
        >
          Para dejar de compararte
        </Text>
      </View>

      <View className="mt-6 max-w-[314px] w-full mx-auto">

      <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
      <Image 
      source={require('../assets/images/play.png')} 
      style={{ width: 30, height: 30 }}
      className="ml-3"
      />
      <Text 
      className="text-left font-baregular" 
      style={{
        flexShrink: 1,
        flexWrap: 'wrap',
      }}
      >
      Lorem ipsum dolor sit amet
      </Text>
      </View>

      <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
      <Image 
      source={require('../assets/icons/audio.png')} 
      style={{ width: 30, height: 30 }}
      className="ml-3"
      />
      <Text className="text-left font-baregular" style={{ flexShrink: 1 }}>
      Lorem ipsum dolor sit amet
      </Text>
      </View>

      <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
      <Image 
      source={require('../assets/images/play.png')} 
      style={{ width: 30, height: 30 }}
      className="ml-3"
      />
      <Text className="text-left font-baregular" style={{ flexShrink: 1 }}>
      Lorem ipsum dolor sit amet
      </Text>
      </View>

      <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
      <Image 
      source={require('../assets/images/play.png')} 
      style={{ width: 30, height: 30 }}
      className="ml-3"
      />
      <Text 
      className="text-left font-baregular" 
      style={{
        flexShrink: 1,
        flexWrap: 'wrap',
      }}
      >
      Lorem ipsum dolor sit amet
      </Text>
      </View>

      <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
      <Image 
      source={require('../assets/icons/audio.png')} 
      style={{ width: 30, height: 30 }}
      className="ml-3"
      />
      <Text className="text-left font-baregular" style={{ flexShrink: 1 }}>
      Lorem ipsum dolor sit amet
      </Text>
      </View>

      <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
      <Image 
      source={require('../assets/images/play.png')} 
      style={{ width: 30, height: 30 }}
      className="ml-3"
      />
      <Text className="text-left font-baregular" style={{ flexShrink: 1 }}>
      Lorem ipsum dolor sit amet
      </Text>
      </View>
        <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
        <Image 
        source={require('../assets/images/play.png')} 
        style={{ width: 30, height: 30 }}
        className="ml-3"
        />
        <Text 
        className="text-left font-baregular" 
        style={{
          flexShrink: 1,
          flexWrap: 'wrap',
        }}
        >
        Lorem ipsum dolor sit amet
        </Text>
        </View>

        <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
        <Image 
        source={require('../assets/icons/audio.png')} 
        style={{ width: 30, height: 30 }}
        className="ml-3"
        />
        <Text className="text-left font-baregular" style={{ flexShrink: 1 }}>
        Lorem ipsum dolor sit amet
        </Text>
        </View>

        <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
        <Image 
        source={require('../assets/images/play.png')} 
        style={{ width: 30, height: 30 }}
        className="ml-3"
        />
        <Text className="text-left font-baregular" style={{ flexShrink: 1 }}>
        Lorem ipsum dolor sit amet
        </Text>
        </View>

        <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
        <Image 
        source={require('../assets/images/play.png')} 
        style={{ width: 30, height: 30 }}
        className="ml-3"
        />
        <Text 
        className="text-left font-baregular" 
        style={{
          flexShrink: 1,
          flexWrap: 'wrap',
        }}
        >
        Lorem ipsum dolor sit amet
        </Text>
        </View>

        <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
        <Image 
        source={require('../assets/icons/audio.png')} 
        style={{ width: 30, height: 30 }}
        className="ml-3"
        />
        <Text className="text-left font-baregular" style={{ flexShrink: 1 }}>
        Lorem ipsum dolor sit amet
        </Text>
        </View>

        <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
        <Image 
        source={require('../assets/images/play.png')} 
        style={{ width: 30, height: 30 }}
        className="ml-3"
        />
        <Text className="text-left font-baregular" style={{ flexShrink: 1 }}>
        Lorem ipsum dolor sit amet
        </Text>
        </View>

        <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
        <Image 
        source={require('../assets/images/play.png')} 
        style={{ width: 30, height: 30 }}
        className="ml-3"
        />
        <Text 
        className="text-left font-baregular" 
        style={{
          flexShrink: 1,
          flexWrap: 'wrap',
        }}
        >
        Lorem ipsum dolor sit amet
        </Text>
        </View>

        <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
        <Image 
        source={require('../assets/icons/audio.png')} 
        style={{ width: 30, height: 30 }}
        className="ml-3"
        />
        <Text className="text-left font-baregular" style={{ flexShrink: 1 }}>
        Lorem ipsum dolor sit amet
        </Text>
        </View>

        <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
        <Image 
        source={require('../assets/images/play.png')} 
        style={{ width: 30, height: 30 }}
        className="ml-3"
        />
        <Text className="text-left font-baregular" style={{ flexShrink: 1 }}>
        Lorem ipsum dolor sit amet
        </Text>
        </View>

        <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
          <Image 
            source={require('../assets/images/play.png')} 
            style={{ width: 30, height: 30 }}
            className="ml-3"
          />
          <Text 
            className="text-left font-baregular" 
            style={{
              flexShrink: 1,
              flexWrap: 'wrap',
            }}
          >
            Lorem ipsum dolor sit amet
          </Text>
        </View>

        <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
          <Image 
            source={require('../assets/icons/audio.png')} 
            style={{ width: 30, height: 30 }}
            className="ml-3"
          />
          <Text className="text-left font-baregular" style={{ flexShrink: 1 }}>
            Lorem ipsum dolor sit amet
          </Text>
        </View>

        <View className="flex flex-row gap-3 max-w-[300px] items-center mt-6">
          <Image 
            source={require('../assets/images/play.png')} 
            style={{ width: 30, height: 30 }}
            className="ml-3"
          />
          <Text className="text-left font-baregular" style={{ flexShrink: 1 }}>
            Lorem ipsum dolor sit amet
          </Text>
        </View>
      </View>

      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.buttonContainer} onPress={goHome}>
          <Text className="text-white text-center font-babold">Home</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <Text className="text-white text-center font-babold">Favoritos</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 0,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  videoImage: {
    width: 344,
    height: 148,
  },
  playImage: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#9b85ac',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#3a2647',
    borderRadius: 30,
    paddingVertical: 10,
    flex: 1,
    maxWidth: '48%',
    marginHorizontal: 5,
  },
});
