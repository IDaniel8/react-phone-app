import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '@theme'
import { Dashboard } from '@views'

import { store, history } from '@store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <GlobalStyle />
          <Dashboard />
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
