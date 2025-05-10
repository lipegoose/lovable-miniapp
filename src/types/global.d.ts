// Declarações de tipos globais para o projeto

// Declarações para o React
declare module 'react' {
  // Hooks
  export const useState: <T>(initialState: T | (() => T)) => [T, (newState: T | ((prevState: T) => T)) => void];
  export const useEffect: (effect: () => void | (() => void), deps?: readonly any[]) => void;
  export const useRef: <T>(initialValue: T) => { current: T };
  export const useCallback: <T extends (...args: any[]) => any>(callback: T, deps: readonly any[]) => T;
  export const useMemo: <T>(factory: () => T, deps: readonly any[]) => T;
  export const useContext: <T>(context: React.Context<T>) => T;
  export const useReducer: <R extends React.Reducer<any, any>, I>(
    reducer: R,
    initializerArg: I & React.ReducerState<R>,
    initializer?: (arg: I & React.ReducerState<R>) => React.ReducerState<R>
  ) => [React.ReducerState<R>, React.Dispatch<React.ReducerAction<R>>];

  // React Types
  export type ReactNode = React.ReactNode;
  export type FC<P = {}> = React.FC<P>;
  export type ComponentType<P = {}> = React.ComponentType<P>;
  export type ReactElement = React.ReactElement;
  export type CSSProperties = React.CSSProperties;
  export type SVGProps<T> = React.SVGProps<T>;
  export type HTMLAttributes<T> = React.HTMLAttributes<T>;
  export type SyntheticEvent = React.SyntheticEvent;

  // Others
  export const Fragment: React.ComponentType;
  export const createContext: <T>(defaultValue: T) => React.Context<T>;
  export const createElement: typeof React.createElement;
  export const forwardRef: typeof React.forwardRef;
  export const memo: typeof React.memo;
  export const cloneElement: typeof React.cloneElement;
  export const isValidElement: typeof React.isValidElement;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: React.ComponentType;
}

// Declarações para Vite e plugins
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

// Declarações para outros pacotes
declare module 'lucide-react' {
  import * as React from 'react';
  export const Menu: React.FC<React.SVGProps<SVGSVGElement>>;
  export const X: React.FC<React.SVGProps<SVGSVGElement>>;
}
