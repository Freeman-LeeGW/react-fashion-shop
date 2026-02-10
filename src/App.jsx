// src/App.jsx
import './App.css'

// 이미지 가져오기 (파일 경로는 src/assets 기준입니다)
import heroImg from './assets/hero-fashion.jpg'
import storyImg from './assets/brand-story.jpg'
import item1 from './assets/collection-1.jpg'
import item2 from './assets/collection-2.jpg'
import item3 from './assets/collection-3.jpg'

function App() {
  // 상품 데이터
  const products = [
    { id: 1, name: "Cashmere Knit", price: "₩129,000", img: item1 },
    { id: 2, name: "Classic Leather Bag", price: "₩345,000", img: item2 },
    { id: 3, name: "Signature Collection", price: "₩89,000", img: item3 },
  ];

  return (
    <div className="App">
      {/* 1. 네비게이션 */}
      <nav className="navbar">
        <div className="logo">MAISON</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#story">Story</a></li>
          <li><a href="#shop">Shop</a></li>
        </ul>
      </nav>

      {/* 2. 히어로 섹션 (메인 배너) */}
      <header id="home" className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay">
          <h1>Timeless Elegance</h1>
          <p>시간이 지나도 변하지 않는 가치</p>
          <button className="btn">View Collection</button>
        </div>
      </header>

      {/* 3. 브랜드 스토리 */}
      <section id="story" className="section">
        <div className="story-container">
          <img src={storyImg} alt="Brand Story" className="story-img" />
          <div className="story-text">
            <h2>Artisan Spirit</h2>
            <p>
              우리는 옷 한 벌에도 장인의 숨결을 담습니다. 
              엄선된 소재와 섬세한 공정으로 완성되는 MAISON의 컬렉션은
              당신의 일상에 특별함을 더해줄 것입니다.
            </p>
            <br />
            <p>
              유행을 쫓기보다, 시간이 흐를수록 멋스러워지는
              스타일을 제안합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 상품 목록 (Grid) */}
      <section id="shop" className="section">
        <h2 className="collection-title">New Arrivals</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} className="product-img" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 푸터 */}
      <footer>
        <p>&copy; 2026 MAISON Fashion. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App