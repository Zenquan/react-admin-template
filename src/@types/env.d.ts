declare let process: {
  env: {
    readonly NODE_ENV: 'development' | 'production';

    readonly MODE: string;

    /**
     * 站点虚拟目录（包含/）
     */
    readonly BASE_URL;

    /**
     * 运行环境
     */
    readonly VITE_APP_RUN_ENV: 'dev' | 'test' | 'release' | 'prod';

    /**
     * 站点虚拟目录（包含/）
     */
    readonly VITE_APP_PUBLIC_PATH: string;

    /**
     * 部署应用包时的基本 URL
     */
    readonly VITE_APP_PUBLIC_URL: string;

    /**
     * 应用名称
     */
    readonly VITE_APP_NAME: string;

    /**
     * 程序版本
     */
    readonly VITE_APP_VERSION: string;

    /**
     * 站点标题
     */
    readonly VITE_APP_TITLE: string;

    /**
     * 接口基地址
     */
    readonly VITE_APP_API_BASE_URL: string;

    /**
     * SSR接口基地址
     */
    readonly VITE_APP_SSR_API_BASE_URL: string;

    /**
     * 高德地图Key
     */
    readonly VITE_APP_AMAP_KEY: string;

    /**
     * 高德地图安全密钥代理服务器
     */
    readonly VITE_APP_AMAP_SERVICE_HOST: string;
  };
};
