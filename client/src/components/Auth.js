import { useEffect, useState } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/authenticated')
            .then(response => {
                setAuthenticated(response.data.authenticated);
                console.log(response.data.authenticated);
            })
            .catch(error => {
                console.error('Error checking authentication status:', error);
            });
    }, []);

    return authenticated;
};

export default useAuth;
