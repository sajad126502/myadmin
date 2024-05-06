import React, { createContext, useEffect, useState } from 'react';
import { fetchAdminDashboard, sigIn, getAccInfo, getSettings } from '../utils/data';

// Create a context object
const Context = createContext();

// Create a provider for the context
export const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [setting,setSetting]=useState({})
    const [adminDashboardData, setAdminDashboardData] = useState({})
    const key = localStorage.getItem("token")
    const [token, setToken] = useState(key)
    const [loading, setLoading] = useState(true);
    const login = async (userData = null) => {
        try {
            let tempToken = token
            setLoading(true)
            const settings=await getSettings()
            setSetting(settings)
            setUser(user)
            if (!token && userData) {
                const { token } = await sigIn(userData)
                localStorage.setItem("token", token)
                tempToken = token
                setToken(token)
            }
            if (tempToken) {
                const { user } = await getAccInfo(tempToken)
                setUser(user)
            }
            setLoading(false)
            return user
        } catch (error) {
            setLoading(false)
            localStorage.clear()
            throw error

        }
    }
    useEffect(() => {

        login()
    }, [])
    return (
        <Context.Provider value={{ user, login, setAdminDashboardData, adminDashboardData, token, loading, setLoading,setting }}>
            {children}
        </Context.Provider>
    );
};

export default Context;
