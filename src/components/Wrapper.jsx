function Wrapper ( {children, className} ) {
    return (
      <div className={`max-w-[1100px] mx-auto px-[10px] ${className || ''}`}>
        {children}
      </div>
    )
  }
  
  export default Wrapper