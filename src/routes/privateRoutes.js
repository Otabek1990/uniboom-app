import Declaration from '../pages/privatePages/Decralation'
import Profile from '../pages/privatePages/Profile'
import SignedHome from '../pages/privatePages/SignedHome'

export const publicRoutes = [
  {path: '/', element: <SignedHome />},
  {path: '/declaration', element: <Declaration />},
  {path: '/profile', element: <Profile />},
]
