/// <reference types="node" />

// Declaração global para disponibilizar __dirname
declare const __dirname: string;

// Declaração de tipos para módulos
declare module 'vite' {
  export interface UserConfig {
    plugins?: any[];
    base?: string;
    publicDir?: string;
    cacheDir?: string;
    resolve?: {
      alias?: Record<string, string> | Array<{ find: string | RegExp; replacement: string }>;
      [key: string]: any;
    };
    server?: {
      host?: string;
      port?: number;
      [key: string]: any;
    };
    [key: string]: any;
  }
  
  export interface ConfigEnv {
    command: 'build' | 'serve';
    mode: string;
    [key: string]: any;
  }
  
  export function defineConfig(config: UserConfig | ((env: ConfigEnv) => UserConfig)): UserConfig;
}

declare module '@vitejs/plugin-react-swc' {
  function reactSwc(options?: any): {
    name: string;
    [key: string]: any;
  };
  export default reactSwc;
}

declare module 'lovable-tagger' {
  export function componentTagger(options?: any): {
    name: string;
    [key: string]: any;
  };
}

declare module 'lucide-react' {
  import * as React from 'react';
  export const Menu: React.FC<React.SVGProps<SVGSVGElement>>;
  export const X: React.FC<React.SVGProps<SVGSVGElement>>;
  // Outros componentes do lucide-react
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
  }
  export type LucideIcon = React.FC<LucideProps>;
}
