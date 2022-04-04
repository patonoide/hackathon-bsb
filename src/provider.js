

import React, { createContext, useEffect, useState, useMemo } from 'react';
import User from "./models/user";


export const AuthContext = createContext();

const Auth = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // setUser(User.fromJson(JSON.parse(localStorage.getItem('user'))))
            // .then(res => setUser(JSON.parse(user)))
            // .catch(e => console.log(e));

    }, [user]);

    const userHandle = useMemo(
        () => ({
            data: user,
            signIn: async (user) => {
                try {
                    console.log(JSON.stringify(user.toJson()))
                    await localStorage.setItem('user', JSON.stringify(user.toJson()));

                } catch (e) {
                    console.log(e);
                }
            },
            signOut: async () => {
                try {
                    await localStorage.clear();
                    setUser(null);
                } catch (e) {
                    console.log(e);
                }
            },
        }),
        [user]
    );

    return (
        <AuthContext.Provider value={userHandle}>{children}</AuthContext.Provider>
    );
};
export default Auth;
