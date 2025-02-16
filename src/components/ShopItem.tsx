import Arrow from "components/icons/Arrow.tsx";

interface ShopItemProps {
    productName: string;
    price: number;
    imageFileName: string;
    link: string;
    newPrice?: number;
}

function ShopItem({ productName, price, newPrice, link, imageFileName }: ShopItemProps) {
    const imagePath = `/src/assets/images/products/${imageFileName}`;

    return (
        <div className="flex flex-col w-[350px] h-[558px]">
            <a href={link} className="relative group select-none">
                <img className="w-[350px] h-[478px] bg-primary" src={imagePath} alt={productName} />
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-64 transition-opacity duration-500 easy-in-out flex justify-center items-center" />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500 easy-in-out">
                    <Arrow direction="right" />
                </div>
            </a>
            <div className="mt-[24px] mb-[7px] text-[20px] leading-[28px] text-center">{productName}</div>
            <div className="flex justify-center gap-[10px] text-secondary font-medium leading-[21px]">
                {newPrice ? (
                    <>
                        <div className="line-through text-[#9C9C9C]">${price}</div>
                        <div>${newPrice}</div>
                    </>
                ) : (
                    <div>${price}</div>
                )}
            </div>
        </div>
    )
}

export default ShopItem