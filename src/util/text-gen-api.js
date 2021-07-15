import {textGenApiKey as ApiKey} from '../config/config';
import deepai from 'deepai';

export const getText = async (text) => {
    deepai.setApiKey(ApiKey);
    const resp = await deepai.callStandardApi("text-generator", {
<<<<<<< HEAD
            text: `My goat is brown. Their name is ${name}. They like to eat ${food} and they love to ${activity}`,
    });
=======
        text: text,
});
>>>>>>> dev
    return resp; 
  }