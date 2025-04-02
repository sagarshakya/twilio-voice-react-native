import { Platform } from './common'; // Import Platform from the correct location
import { requireNativeModule } from 'expo-modules-core';

// Define the type for the native module
interface AndroidExpoNativeModule {
  voice_connect: (params: any) => Promise<any>;
}

interface IOSExpoNativeModule {
  voice_connect_ios: (params: any) => Promise<any>;
}

class ExpoNativeModule {
  private androidExpoNativeModule: AndroidExpoNativeModule = requireNativeModule<AndroidExpoNativeModule>('AndroidExpoNativeModule');
  private iosExpoNativeModule: IOSExpoNativeModule = requireNativeModule<IOSExpoNativeModule>('IOSExpoNativeModule');

  async voice_connect(params: any): Promise<any> {
    if (Platform.OS === 'android') {
      return this.androidExpoNativeModule.voice_connect(params);
    } else if (Platform.OS === 'ios') {
      return this.iosExpoNativeModule.voice_connect_ios(params);
    } else {
      throw new Error('Unsupported platform');
    }
  }
}

export default new ExpoNativeModule();