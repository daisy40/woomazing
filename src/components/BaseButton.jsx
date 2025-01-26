function BaseButton ({ empty = false, children = "Кнопка" }) {

    return (
      <button
        className={`
            px-[50px]
            py-[22px]
            duration-500
            ease-in-out
            cursor-pointer
            outline-primary
            outline-1
            ${empty ? 'bg-inherit text-primary hover:bg-primary hover:text-white' : 'bg-primary text-white hover:bg-primary-hover'}
        `}>
        {children}
      </button>
    )
  }
  
  export default BaseButton