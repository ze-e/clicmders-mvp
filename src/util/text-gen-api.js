import {textGenApiKey as ApiKey} from '../config/config';
import deepai from 'deepai';

export const getText = async (text) => {
    deepai.setApiKey(ApiKey);
    const resp = await deepai.callStandardApi("text-generator", {
        text: text,
});
    return resp; 
  }