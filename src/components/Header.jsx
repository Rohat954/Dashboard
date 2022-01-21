import Link from "next/link"

const Header = (props) => {
  return (
    <header className="h-16 mb-8 flex flex-row items-center justify-between bg-gray-700 text-white">
      <h1 className="text-3xl font-bold p-8">{props.content}</h1>
      <nav className="text-lg flex flex-row p-8">
        <Link href="/">
          <a className=" py-2 text-center w-24 ">Journal</a>
        </Link>
        <Link href="/add-entry">
          <a className=" py-2 text-center w-24">Add entry</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
