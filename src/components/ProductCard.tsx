import { Product } from "@/app/types";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    return (
        <div className="card lg:card-side w-5/6 md:w-96 bg-sky-950 shadow-xl p-1 ">
            <figure className="p-2">
                <img src={product.imgLink} alt={product.name} className="w-36 h-36 rounded-md" />
            </figure>
            <div className="card-body items-center p-3">
                <div>
                    <h2 className="card-title">{product.name}</h2>
                    <p>Number: {product.productId}</p>
                    <p>MRP: Rs {product.mrp}/-</p>
                    <p>Cars: {product.cars}</p>
                </div>
            </div>
        </div>
    );
}
