import {textGenApiKey as ApiKey} from '../config/config';
import deepai from 'deepai';

export default function getGoatText({name, food, activity}){

deepai.setApiKey(ApiKey);

(async function() {
    const resp = await deepai.callStandardApi("text-generator", {
            text: `My goat is brown. Their name is ${name}. They like to eat ${food} and they love to ${activity}`,
    });
    return resp; 
  })()
}