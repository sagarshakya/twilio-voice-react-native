package com.twiliovoicereactnative;

import android.app.Application;
import expo.modules.core.interfaces.ApplicationLifecycleListener;
import com.twilio.voice.reactnative.proxy.VoiceApplicationProxy;

public class ExpoApplicationLifecycleListener implements ApplicationLifecycleListener {
  VoiceApplicationProxy voiceApplicationProxy;

  @Override
  public void onCreate(Application application) {
    this.voiceApplicationProxy = new VoiceApplicationProxy(application);
    this.voiceApplicationProxy.onCreate();
  }
}

