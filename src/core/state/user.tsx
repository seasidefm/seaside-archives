import React, { PropsWithChildren, useContext, useState } from "react";

export interface UserState {
    user: Record<string, string> | null;
    setUser: React.Dispatch<React.SetStateAction<UserState["user"]>>;
}

const UserContext = React.createContext<UserState | undefined>(undefined);

export const useUser = () => {
    const ctx = useContext(UserContext);

    if (!ctx)
        throw new Error("Cannot use UserContext outside UserContextProvider");

    return ctx;
};

export const UserContextProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<UserState["user"]>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
