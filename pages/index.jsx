import Head from "next/head"
import { useRouter } from "next/router"
import Header from "../src/components/Header"
import { useContext } from "react"
import AppContext from "/src/components/AppContext"
import { AppContextProvider } from "../src/components/AppContext"

const Home = () => {
  const { datas, totalIncom, totalOutgo } = useContext(AppContext)
  const totalStyle =
    totalIncom + totalOutgo > 0 ? "text-green-500" : "text-red-500"

  const resultbis = totalOutgo + totalIncom
  const result = resultbis > 0 ? "+$" + resultbis : "-$" + resultbis

  const router = useRouter()
  const titleCheck = () => {
    if (router.pathname === "/") {
      router.pathname = "MAIN PAGE"
    }
    return router.pathname
  }
  console.log(router.pathname)

  return (
    <div>
      <Head>
        <title>{titleCheck()}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header content="Dashboard" />

      <table className="w-full">
        <thead className="text-left">
          <tr>
            <th className="w-1/2 p-1 border-2">INCOMING</th>
            <th className="w-1/2 p-1 border-2">OUTGOING</th>
          </tr>
        </thead>
        <tbody>
          {datas.map(({ amount, description }, id) => (
            <tr
              key={id}
              className={`${
                id % 2 === 0 ? "bg-slate-100" : "bg-white"
              } w-full text-right text-lg`}
            >
              {amount > 0 ? (
                <>
                  <td className="w-1/2 p-1 border-x-2">
                    <p className="font-bold text-green-500">{amount} €</p>
                    <p className="italic">{description}</p>
                  </td>
                  <td className="w-1/2 p-1 border-x-2"></td>
                </>
              ) : (
                <>
                  <td className="w-1/2 p-1 border-x-2"></td>
                  <td className="w-1/2 p-1 border-x-2">
                    <p className="font-bold text-red-500">{amount} €</p>
                    <p className="italic">{description}</p>
                  </td>
                </>
              )}
            </tr>
          ))}
          <tr className="w-full">
            <td className="w-1/2 p-1 border-2">
              <div className="flex flex-row items-center justify-between ">
                <p className="font-bold">TOTAL</p>
                <div className="justify-self-end">
                  <p className="text-green-500 font-bold">{totalIncom}</p>
                </div>
              </div>
            </td>
            <td className="w-1/2 p-1 border-2">
              <div className="flex flex-row items-center justify-between">
                <p className="w-max font-bold">TOTAL</p>
                <div className="justify-self-end">
                  <p className="w-max text-red-500 font-bold">{totalOutgo}</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot className="w-full border-2">
          <tr>
            <td colSpan="2" className="w-full p-1 border-2 ">
              <div className="flex flex-row items-center justify-between font-bold">
                <p>Result</p>
                <p className={totalStyle}>{result}</p>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Home
