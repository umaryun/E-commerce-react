import { Link } from "react-router-dom"

interface BookCardProps{
    id: string;
    title: string;
    image: string;
    price: number;
}

const BookCard: React.FC<BookCardProps> = ({id, title, image, price}) => {
    return (
        <Link to={`/product/${id}`}>
        <div className="border p-4 rounded">
                <img src={image} alt={title} className="w-full h-32 object-cover mb-2" />
                <h2 className="font-bold">
                    {title}
                </h2>
                <p>${price}</p>    
        </div>
        </Link>
    )
}
export default BookCard