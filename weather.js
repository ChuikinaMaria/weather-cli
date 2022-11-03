#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';
import { saveKeyValue, getKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
    try{
        await saveKeyValue('token', token);
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
    // вывести погоду
};

initCLI();