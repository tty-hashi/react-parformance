import { ReactNode, FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 font-mono">
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                react-query
              </Link>
              <Link
                to="/fetch-a"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Regular fetch
              </Link>
              <Link
                to="/main-context"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                useContext
              </Link>
              <Link
                to="/main-rtkit"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                RTKit
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 flex-col justify-center items-center w-screen">
        {children}
      </main>
    </div>
  )
}
