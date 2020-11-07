export interface CustomWindow extends Window { 
   api: {
      send: (channel: string, data: {type: string, name?: string, email?: string}) => void,
      receive: (channel: string, callback: (data: string[]) => void) => void,
   },
}