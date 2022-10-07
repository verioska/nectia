import { createContext } from "react";
import { AuthProviderValue } from "../../interfaces/AuthProviderValue";

const UserContext = createContext<AuthProviderValue>({} as AuthProviderValue);

export default UserContext
