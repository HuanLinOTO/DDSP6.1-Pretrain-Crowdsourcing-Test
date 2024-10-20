import useDB from '../utils/db';
import logger from '../utils/logger';

export default defineNitroPlugin(async (nitroApp) => {
    const db = await useDB()
    logger.info("数据库初始化成功");
})
