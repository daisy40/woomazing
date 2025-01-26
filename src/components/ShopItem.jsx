import Arrow from '/src/components/icons/Arrow.jsx';

function ShopItem ({ productName, price, newPrice, link, imageFileName }) {
    const imagePath = `/src/assets/images/products/${imageFileName}`;

    return (
        <div className="flex flex-col w-[350px] h-[558px]">
            <a href={link} className="relative group">
                <img className="w-full h-[478px] bg-primary" src={imagePath} alt={productName} />
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-64 transition-opacity duration-500 easy-in-out flex justify-center items-center" />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500 easy-in-out">
                    <Arrow direction="right" />
                </div>
            </a>
            <div className="mt-[24px] mb-[7px] text-[20px] leading-[28px]">{productName}</div>
            <div className="flex justify-center gap-[10px] text-secondary">
                {newPrice ? (
                    <>
                        <div className="leading-[21px] line-through">${price}</div>
                        <div className="leading-[21px]">${newPrice}</div>
                    </>
                ) : (
                    <div className="leading-[21px]">${price}</div>
                )}
            </div>
        </div>
    )
  }
  
  export default ShopItem