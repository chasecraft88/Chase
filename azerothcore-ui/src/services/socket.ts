// filepath: /azerothcore-ui/azerothcore-ui/src/services/socket.ts

import { useEffect, useRef } from 'react';

const useWebSocket = (url: string, onMessage: (message: any) => void) => {
    const socketRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        socketRef.current = new WebSocket(url);

        socketRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            onMessage(data);
        };

        socketRef.current.onopen = () => {
            console.log('WebSocket connection established');
        };

        socketRef.current.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            socketRef.current?.close();
        };
    }, [url, onMessage]);

    const sendMessage = (message: any) => {
        if (socketRef.current) {
            socketRef.current.send(JSON.stringify(message));
        }
    };

    return { sendMessage };
};

export default useWebSocket;