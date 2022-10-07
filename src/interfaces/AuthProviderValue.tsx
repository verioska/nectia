
import { AuthCredentials } from "./AuthCredentials";

export interface AuthProviderValue {
  user: AuthCredentials | null,
  getUser: () => void,
}