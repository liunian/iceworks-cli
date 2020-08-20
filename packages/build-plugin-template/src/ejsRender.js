const fse = require('fs-extra');
const originEjsRenderDir = require('iceworks/lib/command/init/ejsRenderDir');

module.exports = async (sourceDir,targetDir,variables,log)=>{
  fse.ensureDir(targetDir);
  fse.copySync(sourceDir,targetDir);
  log.info('renderDir',originEjsRenderDir.default);
  try{
    await originEjsRenderDir.default(targetDir,variables).then();
  }catch(error){
    log.error('Problems occurred during compilation',error)
  }

}

