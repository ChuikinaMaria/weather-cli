#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';
import { saveKeyValue, getKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';


const saveToken = async (token) => {
    if (!token.length) {
        printError('No token recieved');
        return;
    }
    try{
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token is saved')
    } catch (e) {
        printError(e.message);
    }

}

const initCLI = async () => {
    const args = getArgs(process.argv);
    
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // save city
        
    }
    if (args.t) {
        return saveToken(args.t);
        //save token
    }
    getWeather('volgograd');
    // вывести погоду
};

initCLI();