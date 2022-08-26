import { useEffect } from 'react';
import io from 'socket.io-client';

// const socket = io.connect("http://127.0.0.1:5000");

function App() {
    useEffect(() => {
        const socket = io('localhost:5001/', {
            transports: ['websocket'],
            cors: {
                origin: 'http://localhost:3000/',
            },
        });

        socket.on('connect', (data) => {
            console.log(data);
        });
    }, []);
    return <div className="App"></div>;
}

export default App;
