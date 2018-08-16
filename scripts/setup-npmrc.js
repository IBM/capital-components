const https = require('https');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
function simpleGet(options, callback) {
    https.get(options, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            callback(data);
        });

        }).on("error", (err) => {
        throw err;
    });
}

rl.question('Internet email: ', email => {
    rl.question('Intranet password: ', password => {
        var options = {
            hostname: 'na.artifactory.swg-devops.com',
            port: 443,
            path: '/artifactory/api/npm/auth',
            method: 'GET',
            headers: {
               'Authorization': 'Basic ' + new Buffer(email + ':' + password).toString('base64')
            }
        };

        simpleGet(options, npmGeneralAuth => {
            const _authString = npmGeneralAuth.slice(npmGeneralAuth.indexOf('_auth'), npmGeneralAuth.indexOf('\n'));
            
            simpleGet({ 
                ...options,
                path: '/artifactory/api/npm/ip-wfss-npm-virtual/auth/fss'
            }, fssSpecificAuth => {
                const finalResult = [_authString, fssSpecificAuth].join('\n');
                fs.appendFile(path.resolve('.npmrc'), finalResult, function (err) {
                    if (err) throw err;
                    console.log('Success!');
                    process.exit();
                });
            });
        })
    });
});