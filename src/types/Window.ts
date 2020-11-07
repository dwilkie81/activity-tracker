export interface CustomWindow extends Window { 
   api: {
      send: (channel: string, data: unknown) => void,
      receive: (channel: string, callback: Function) => void,
   },
};