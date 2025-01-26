function PrincipleCard ( {icon, header, text, iconFileName} ) {
    const iconPath = `/src/assets/images/icons/${iconFileName}`;

    return (
      <div className="relative w-[350px] h-[272px]">
        <img className="pointer-events-none select-none" src={iconPath} />
        <div className="absolute text-left w-[305px] h-[174px] bottom-0">
            <h3 className="mb-[24px]">{header}</h3>
            <span className="text-[17px] leading-[23.8px]">{text}</span>
        </div>
      </div>
    )
  }
  
  export default PrincipleCard