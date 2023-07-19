const core = require('@actions/core');
const Minio = require('minio');

try {
    const endpoint = core.getInput('endpoint');
    const port = +core.getInput('port');
    const ak = core.getInput('accesskey');
    const sk = core.getInput('secretkey');
    const bucketName = core.getInput('bucketname');
    const useSSL = core.getBooleanInput('usessl');
    const source = core.getInput('source');
    const dest = core.getInput('dest');
    const client =  new Minio.Client({
        endPoint: endpoint,
        port: port,
        useSSL: useSSL,
        accessKey: ak,
        secretKey: sk
    });
    const metaData = {
        'Content-Type': 'application/octet-stream',
    }
    client.fPutObject(bucketName, dest, source, metaData, function(err, etag) {
        if (err) {
            core.setFailed(err);
            core.setOutput("status", "failed");
            return;
        }
        console.log('File uploaded successfully.')
        core.setOutput("status", "successed");
    });
} catch (error) {
  core.setFailed(error.message);
  core.setOutput("status", "failed");
}
