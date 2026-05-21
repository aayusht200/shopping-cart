import './Home.css';
export default function Home() {
    return (
        <div className="home">
            <h1 className="store-header">Generic Brand Store</h1>

            <div class="image-container">
                <div class="image-carousel">
                    <img src="./carousel-1.jpg" alt="Random Image 1" />
                    <img src="./carousel-2.jpg" alt="Random Image 2" />
                    <img src="./carousel-3.jpg" alt="Random Image 3" />
                    <img src="./carousel-4.jpg" alt="Random Image 4" />
                    <img src="./carousel-5.jpg" alt="Random Image 5" />
                    <img src="./carousel-6.jpg" alt="Random Image 6" />
                </div>
            </div>
        </div>
    );
}
