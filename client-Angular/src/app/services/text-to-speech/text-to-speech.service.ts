import { Injectable } from '@angular/core';
import { SpeechConfig, AudioConfig, SpeechSynthesizer } from 'microsoft-cognitiveservices-speech-sdk';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  speechConfig: SpeechConfig | undefined;
   audioConfig : AudioConfig | undefined ;
   synthesizer : SpeechSynthesizer | undefined ;

  constructor() { }

  synthesizeSpeech(text: string) {
    this.speechConfig = SpeechConfig.fromSubscription("12a23eef018d4473886ad73766a6124c", "centralus");
    this.speechConfig.speechSynthesisLanguage = 'he-IL';
    this.speechConfig.speechSynthesisVoiceName = 'he-IL-HilaNeural'; //he-IL-HilaNeural, he-IL-AvriNeural
    this.audioConfig = AudioConfig.fromDefaultSpeakerOutput();
    this.synthesizer  = new SpeechSynthesizer(this.speechConfig, this.audioConfig);
    console.log('speakTextAsync');
    
    this.synthesizer.speakTextAsync(
      text,
        result => {
            if (result) {
              //this.synthesizer.close();
                return result.audioData;
            }
            return null;
        },
        error => {
            console.log(error);
            //this.synthesizer.close();
        });
  }

}
