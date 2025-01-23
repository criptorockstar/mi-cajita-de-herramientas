import * as React from 'react';
import { Stack, useRouter } from 'expo-router';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated';
import { Text } from '~/components/ui/text';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  const handleButtonClick = () => {
    console.log("¡Imagen presionada!");
  };

  return (
    <SafeAreaView className="bg-[#9b85ac] h-full w-full">
      <View className="max-w-[350px] w-full mx-auto">
        <View className="mt-6 flex flex-row justify-end">
          <Image source={require('../assets/icons/menu.png')} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View className="mt-6">
          <Text className="text-white text-center text-[20px] leading-[24px] font-baregular">¡Bienvenido!</Text>
          <Text className="text-white text-center leading-[19.2px] font-baregular mt-2">¿Cómo te sientes hoy?</Text>

          <View className="mt-5 mx-auto relative" style={styles.container}>
            <Image 
              source={require('../assets/images/video.png')} 
              style={styles.videoImage}
            />
            <Image 
              source={require('../assets/images/play.png')} 
              style={styles.playImage} 
            />
          </View>
        </View>

        <TouchableOpacity 
          onPress={handleButtonClick} 
          className="mx-auto mt-10"
          activeOpacity={0.8}
        >
          <Animated.Image 
            source={require('../assets/images/surpriseme.png')} 
          />
        </TouchableOpacity>

        <View className="max-w-[314px] w-full mx-auto">
          <View className="bg-white w-full rounded-[30px] mt-6 py-2">
            <View className="flex flex-row gap-3 max-w-[300px] items-center">
              <Image 
                source={require('../assets/icons/wrench.png')} 
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
                Para balancear energía masculina y femenina
              </Text>
            </View>
          </View>
        </View>

        <View className="max-w-[314px] w-full mx-auto">
          <TouchableOpacity 
            onPress={() => router.push('post')}
            className="bg-white w-full rounded-[30px] mt-6 py-2"
          >
            <View className="flex flex-row gap-3 max-w-[300px] items-center">
              <Image 
                source={require('../assets/icons/hammer.png')} 
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
                Para dejar de compararte
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="max-w-[314px] w-full mx-auto">
          <View className="bg-white w-full rounded-[30px] mt-6 py-2">
            <View className="flex flex-row gap-3 max-w-[300px] items-center">
              <Image 
                source={require('../assets/icons/screwdriver.png')} 
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
                Para soltar y dejar ir
              </Text>
            </View>
          </View>
        </View>

        <View className="max-w-[314px] w-full mx-auto">
          <View className="bg-white w-full rounded-[30px] mt-6 py-2">
            <View className="flex flex-row gap-3 max-w-[300px] items-center">
              <Image 
                source={require('../assets/icons/saw.png')} 
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
                Para celebrar/cuando pasa algo bueno
              </Text>
            </View>
          </View>
        </View>

        <View className="max-w-[314px] w-full mx-auto">
          <View className="bg-white w-full rounded-[30px] mt-6 py-2">
            <View className="flex flex-row gap-3 max-w-[300px] items-center">
              <Image 
                source={require('../assets/icons/plier.png')} 
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
                Para después de hacer ejercicio
              </Text>
            </View>
          </View>
        </View>

        <View className="max-w-[314px] w-full mx-auto">
          <View className="bg-white w-full rounded-[30px] mt-6 py-2">
            <View className="flex flex-row gap-3 max-w-[300px] items-center">
              <Image 
                source={require('../assets/icons/screw.png')} 
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
                Para conectar con los demás/cuando estoy antisocial
              </Text>
            </View>
          </View>
        </View>

        <View className="bg-white mt-10 rounded-tl-[45px] rounded-tr-[45px] pb-[90px]">
          <View className="mt-10 max-w-[314px] w-full mx-auto">
            <Text className="font-babold text-[16px] ml-4">Recientes</Text>

            <View className="bg-white w-full mt-6 py-2">
              <View className="flex flex-row gap-3 items-center">
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
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomView}>
        <View className="bg-[#3a2647] rounded-[30px] py-2 max-w-[314px] w-full mx-auto">
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
  },
});
