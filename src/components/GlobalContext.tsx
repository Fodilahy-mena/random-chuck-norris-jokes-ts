import {
  ChangeEvent,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'

const initialState = {
  loading: true,
  data: { value: { categories: [''], id: 0, joke: '' } },
  category: '',
  firstName: 'Chuck',
  lastName: 'Norris',
  getNewRandomJoke: () => {},
  setCategory: (cat: any) => {},
  updateFirstName: (value: any) => {},
  updateLastName: (value: any) => {},
}

type initState = {
  data: any
  loading: boolean
  category: string
  firstName: string
  lastName: string
  getNewRandomJoke: () => void
  setCategory: (cat: string) => void
  updateFirstName: (value: any) => void
  updateLastName: (value: any) => void
}
type ACTIONTYPE =
  | { type: 'fetch' }
  | { type: 'get_data'; data: object }
  | { type: 'set_category'; category: string }
  | { type: 'update_first_name'; firstName: string }
  | { type: 'update_last_name'; lastName: string }

const GlobalContext = createContext(initialState)

function fetchReducer(state: initState, action: ACTIONTYPE): initState {
  switch (action.type) {
    case 'fetch':
      return {
        ...state,
        loading: true,
      }

    case 'get_data':
      return {
        ...state,
        data: action.data,
        loading: false,
      }

    case 'set_category':
      return {
        ...state,
        category: action.category,
        data: {
          ...state.data,
          value: {
            ...state.data?.value,
            categories: [action.category],
          },
        },
      }
    case 'update_first_name':
      return {
        ...state,
        firstName: action.firstName,
      }
    case 'update_last_name':
      return {
        ...state,
        lastName: action.lastName,
      }

    default:
      return state
  }
}

const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState)
  function fetchData() {
    const url = `http://api.icndb.com/jokes/random?firstName=${state.firstName}&lastName=${state.lastName}`

    dispatch({ type: 'fetch' })

    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'get_data', data }))
      .catch((e) => {
        console.warn(e.message)
      })
  }

  function newCategory(category: string) {
    dispatch({ type: 'set_category', category: category })
  }

  function updateFirstName(value: string) {
    dispatch({ type: 'update_first_name', firstName: value })
  }

  function updateLastName(value: string) {
    dispatch({ type: 'update_last_name', lastName: value })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        category: state.category,
        getNewRandomJoke: () => fetchData(),
        setCategory: (cat: string) => newCategory(cat),
        firstName: state.firstName,
        lastName: state.lastName,
        updateFirstName: (value: string) => updateFirstName(value),
        updateLastName: (value: string) => updateLastName(value),
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalProvider, GlobalContext }