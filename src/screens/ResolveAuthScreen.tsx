import React, { useEffect } from 'react';
import useAuth  from '../hook/useAuth'

const ResolveAuthScreen = () => {
    const { tryLocalSignIn  } = useAuth();

    useEffect( () => {
        tryLocalSignIn();
    }, [] )
    
    return null
}

export default ResolveAuthScreen;