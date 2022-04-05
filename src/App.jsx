import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const routes = [
  { path: '/', exact: true, el: lazy(() => import('@/pages/main/main'))},
]

const App = () => {
  return (
    <div className='app'>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} exact={route.exact} path={route.path} element={
            <Suspense fallback={<>...</>}>
              <route.el />
            </Suspense>
          } />
        ))}
      </Routes>
    </div>
  )
}

export default App
