function SizeButton ( {children} ) {
  return (
    <button className="text-black outline-1 outline-black w-[41px] h-[41px] hover:text-white hover:bg-black duration-500 easy-in-out cursor-pointer">
        {children}
    </button>
  )
}

export default SizeButton