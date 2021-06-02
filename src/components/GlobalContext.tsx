import { createContext, useEffect, useReducer } from 'react'

const initialState = {
  loading: true,
  data: { value: { categories: [''], id: 0, joke: '' } },
  category: '',
  firstName: 'Chuck',
  lastName: 'Norris',
  savedJokes: [],
  downloads: [],
  getNewRandomJoke: () => {},
  setCategory: (cat: any) => {},
  updateFirstName: (value: any) => {},
  updateLastName: (value: any) => {},
  saveNewRandomJoke: (joke: object) => {},
  addToDownloads: (download: object) => {},
  removeFromDownloads: (download: object, indexOfDownload: number) => {},
}

type initState = {
  data: any
  loading: boolean
  category: string
  firstName: string
  lastName: string
  savedJokes: any[any]
  downloads: any[any]
  getNewRandomJoke: () => void
  setCategory: (cat: string) => void
  updateFirstName: (value: any) => void
  updateLastName: (value: any) => void
  saveNewRandomJoke: (joke: object) => void
  addToDownloads: (download: object) => void
  removeFromDownloads: (download: object, indexOfDownload: number) => void
}
type ACTIONTYPE =
  | { type: 'fetch' }
  | { type: 'get_data'; data: object }
  | { type: 'set_category'; category: string }
  | { type: 'update_first_name'; firstName: string }
  | { type: 'update_last_name'; lastName: string }
  | {
      type: 'save_new_random_joke'
      newRandom: object
    }
  | {
      type: 'add_to_downloads'
      download: object
    }
  | {
      type: 'remove_from_downloads'
      indexOfDownload: number
    }

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

    case 'save_new_random_joke':
      return {
        ...state,
        savedJokes: [...state.savedJokes, action.newRandom],
      }
    case 'add_to_downloads':
      return {
        ...state,
        downloads: [...state.downloads, action.download],
      }
    case 'remove_from_downloads':
      return {
        ...state,
        downloads: state.downloads.filter(
          (download: object, index: number) => index !== action.indexOfDownload
        ),
      }

    default:
      return state
  }
}

const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState)
  function fetchData() {
    const url = `http://api.icndb.com/jokes/random?firstName=${
      state.firstName
    }&lastName=${state.lastName}${
      state.category.length > 1 ? `&limitTo=[${state.category}]` : ''
    }`

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

  function saveNewRandomJoke(joke: object) {
    dispatch({ type: 'save_new_random_joke', newRandom: joke })
  }

  function addToDownloads(download: object) {
    dispatch({ type: 'add_to_downloads', download: download })
  }

  function removeFromDownloads(download: object, index: number) {
    dispatch({ type: 'remove_from_downloads', indexOfDownload: index })
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
        savedJokes: state.savedJokes,
        saveNewRandomJoke: (joke: object) => saveNewRandomJoke(joke),
        downloads: state.downloads,
        addToDownloads: (download: object) => addToDownloads(download),
        removeFromDownloads: (download: object, indexOfDownload: number) =>
          removeFromDownloads(download, indexOfDownload),
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalProvider, GlobalContext }
