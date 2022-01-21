import { createContext, useCallback, useState, useEffect } from "react"

const AppContext = createContext({})

const save = (datas) => {
  localStorage.setItem("datas", JSON.stringify(datas))
}

export const AppContextProvider = (props) => {
  const [datas, upDatas] = useState([
    {
      amount: -100,
      description: "Fournitures",
    },
    {
      amount: 300,
      description: "Boulot",
    },
    {
      amount: -100,
      description: "Bonsoir",
    },
  ])
  const [totalIncom, putTotalIncom] = useState(0)
  const [totalOutgo, putTotalOutgo] = useState(0)
  // const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let totalIncome = datas.reduce((total, current) => {
      return current.amount > 0
        ? Number(total) + Number(current.amount)
        : Number(total) + 0
    }, 0)

    putTotalIncom(totalIncome)
  }, [datas])

  useEffect(() => {
    let totalOutgo = datas.reduce((total, current) => {
      return current.amount < 0
        ? Number(total) + Number(current.amount)
        : Number(total) + 0
    }, 0)

    putTotalOutgo(totalOutgo)
  }, [datas])

  const addDatas = useCallback(
    (newdata) => upDatas((currentdatas) => [...currentdatas, newdata]),
    []
  )

  return (
    <AppContext.Provider
      {...props}
      value={{
        datas,
        addDatas,
        totalIncom,
        totalOutgo,
      }}
    />
  )
}

export default AppContext
