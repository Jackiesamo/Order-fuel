import { createContext, useContext, useState, ReactNode } from 'react'
import { User } from '@/lib/types'
import { mockUsers } from '@/lib/mock-data'

interface AuthContextType {
  user: User | null
  login: (email: string) => boolean
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string): boolean => {
    const foundUser = mockUsers.find(u => u.email === email)
    if (foundUser) {
      setUser(foundUser)
      return true
    }
    // Default to customer role if email not found
    setUser({
      id: 'temp',
      email: email,
      name: email.split('@')[0],
      role: 'customer'
    })
    return true
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
