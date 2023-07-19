# minio-upload-action

[![Test on Ubuntu and Windows](https://github.com/CKylinMC/minio-upload-action/actions/workflows/Test.yml/badge.svg)](https://github.com/CKylinMC/minio-upload-action/actions/workflows/Test.yml)

A simple upload action using minio javascript package without docker to run on both Linux and Windows.

## Inputs

### `endpoint`
**required** Your storage endpoint url.

### `port`
Port of your storage. Default set to 443 for HTTPS, if you using other port (like 80 of HTTP) you need specific it here. 

### `accesskey`
**required** AccessKey of your storage.

### `secretkey`
**required** SecretKey of your storage.

### `bucketname`
**required** Bucket name of your storage. Must be existed one.

### `usessl`
Use HTTPS or not, default to true.

### `source`
**required** Path to file you want to upload.

### `dest`
**required** Path to file where you want upload it to. Should be a file name.

## Output

### `status`
Will be "successed" or "failed"

## Example

```yaml
uses: ckylinmc/minio-upload-action@v1.1
with:
  endpoint: 'some.minio.obj.com'
  accesskey: ${{secrets.MINIO_AK}}
  secretkey: ${{secrets.MINIO_SK}}
  bucketname: 'your_bucket_name'
  source: './artifact.zip'
  dest: '/cache/artifact.zip'
```