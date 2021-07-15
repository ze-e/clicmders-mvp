import {textGenApiKey as ApiKey} from '../config/config';
import deepai from 'deepai';

export const getGoatText = async ({name, food, activity}) => {
    deepai.setApiKey(ApiKey);
    const resp = await deepai.callStandardApi("text-generator", {
        //     text: `My goat is brown. Their name is ${name}. They like to eat ${food} and they love to ${activity}`,
        text: `This is my goat. Their name is ${name}. They like to eat ${food} and they love to ${activity}`,
});
    return resp; 
  }