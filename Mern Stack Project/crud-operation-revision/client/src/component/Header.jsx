const Header = () => {
  return (
    <div className="w-full flex justify-between h-15 items-center bg-gray-200 shadow px-5 py-5">
      <div className="w-[10%] h-full flex items-center">
        <h1 className="font-bold text-zinc-800 ps-4">LOGO</h1>
      </div>
        <div className="w-[30%] h-full">
          <ul className="w-full h-full  flex gap-6 line-none items-center text-zinc-800 font-medium">
            <li  className="cursor-pointer">HOME</li>
            <li  className="cursor-pointer">ABOUT</li>
            <li  className="cursor-pointer">CONTACT</li>
          </ul>
        </div>
    </div>
  )
}

export default Header