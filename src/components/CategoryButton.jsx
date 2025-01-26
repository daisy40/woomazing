function CategoryButton ( {children} ) {
    return (
      <button className="text-black px-[65px] py-[19px] outline-1 outline-black hover:text-white hover:bg-black duration-500 easy-in-out cursor-pointer">
        {children}
      </button>
    )
  }
  
  export default CategoryButton