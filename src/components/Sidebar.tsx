import { useEffect, useState } from "react"
import { useFilter } from "./FilterContext";

interface Product {
    category: string;
}

interface FetchResponse {
    products: Product[];
}

const Sidebar = () => {
    const {
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        keyword,
        setKeyword
    } = useFilter();

    const [categories, setCategories] = useState<string[]>([])
    const [keywords] = useState<string[]>([
        "apple",
        "watch",
        "fashion",
        "trend",
        "shoes",
        "shirt"
    ]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products")
                const data: FetchResponse = await response.json();
                const uniqueCategories = Array.from(new Set(
                    data.products.map(product => product.category)
                ));
                setCategories(uniqueCategories)
            } catch (error) {
                console.error("error fetching response:", error)

            }
        }


        fetchCategories()
    },[])


    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setMinPrice(value ? parseFloat(value) : undefined)
    }

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setMaxPrice(value ? parseFloat(value) : undefined)
    }

    const handleRadioChangeCategories = (category: string) => {
        setSelectedCategory(category);
    }

    const handleKeywordClick = (keyword: string) => {
        setKeyword(keyword)
    }

    const handleReset = () => {
        setSearchQuery('')
        setSelectedCategory("")
        setMinPrice(undefined)
        setMaxPrice(undefined)
        setKeyword("")
    }
    

    return (
        <div className="w-101 p-5 h-screen mr-30">
            <h1 className="text-2xl font-bold mb-10 mt-4">React bar</h1>

            <section>
                <input
                    type="text"
                    className="border-2 rounded px-2 py-3 sm:mb-0 w-full"
                    placeholder="Search product"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />


                <div className="flex justify-center mt-3 items-center">
                    <input
                        type="text"
                        className="border-2 mr-2 px-5 py-3 mb-3 w-full"
                        placeholder="Min"
                        value={minPrice ?? ""}
                        onChange={handleMinPriceChange}
                    />
                    <input
                        type="text"
                        className="border-2 mr-2 px-5 py-3 mb-3 w-full"
                        placeholder="Max"
                        value={maxPrice ?? ""}
                        onChange={handleMaxPriceChange}
                    />
                </div>

                {/* category section */}
                <section>
                    <div className="mb-5">
                        <h2 className="text-xl font-semibold mb3">Categories</h2>
                    </div>

                    {categories.map((category, index) => (
                        <label key={index} className="block mb-2">
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                onChange={() => handleRadioChangeCategories(category)}
                                className="mr-2 w-[16px] h-[16px]"
                                checked={selectedCategory === category}
                            />
                            {category.toUpperCase()}
                        </label>
                    ))}
                </section>

                {/* keywords section */}
                <div className="my-5">
                    <h2 className="text-xl font-semibold mb-3">Keywords</h2>

                    <div>
                        {keywords.map((keyword, index) => (
                            <button
                                key={index}
                                onClick={() => handleKeywordClick(keyword)}
                                className="block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200">
                                {keyword.toUpperCase()}

                            </button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => handleReset()}
                    className="w-full mb[4rem] py-2 bg-black text-white rounded mt-5">
                    Reset filters
                </button>

            </section>
        </div>
    )
}

export default Sidebar