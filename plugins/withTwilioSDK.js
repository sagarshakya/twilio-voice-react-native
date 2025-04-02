const {
  createRunOncePlugin,
  withInfoPlist,
} = require("@expo/config-plugins");

const {
  mergeContents,
} = require("@expo/config-plugins/build/utils/generateCode");


const withTwilioSDK = (config, { enabled, appIdentifier }) => {
  // Add twilio capabilites to iOS info.plist only if enabled
  config = withInfoPlist(config, (config) => {
    // Add permissions
    config.modResults["NSMicrophoneUsageDescription"] =
      "We need access to your microphone to be able to make calls and send voicemail.";
    config.modResults["NSUserActivityTypes"] = [
      "INStartAudioCallIntent",
      "INStartCallIntent",
    ];

    // Add audio and voip to UIBackgroundModes
    config.modResults["UIBackgroundModes"] = ["audio", "voip"];

    // Set APS Environment to development
    config.modResults["aps-environment"] = "development";

    return config;
  });
};

module.exports = createRunOncePlugin(withTwilioSDK, "withTwilioSDK");
