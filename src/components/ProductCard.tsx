import { Product } from "@/app/types";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    return (
        <div className="card card-side w-full md:w-96 text-cardText bg-cardBG shadow-2xl p-1 m-2 mt-6 ">
            <figure className="p-2">
                <img
                    src={product.imgLink}
                    alt={product.name}
                    className="w-36 h-36 rounded-md border border-2 border-cardText"
                />
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
