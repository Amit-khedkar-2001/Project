import logo from './logo.svg';
import './App.css';

function App() {
  return (
		<div class="allbackground">
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						{/* <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" */}
						{/* /> */}
					</div>
                    <li>
						<a href="#courses"><b>The Shop of Our Beauty Products</b></a>
					</li>

					<li>
						<a href="#courses">SKINCARE</a>
					</li>
					<li>
						<a href="#tutorials">MAKEUP</a>
					</li>
					<li>
						<a href="#jobs">OFFERS</a>
					</li>
					<li>
						<a href="#student">KITS & COMBOS</a>
					</li>
                    <li>
						<button class="btn1"><a href="#student">LOGIN</a></button>
					</li>
                    <li>
						<button class="btn1"><a href="#student">SIGNUP</a></button>
					</li>
				</ul>
            
				<div class="rightNav">
					<input
						type="text"
						name="search"
						id="search"
					/>
					<button class="btn btn-sm">
						Search
					</button>
				</div>
			</nav>
            <section class="section">
				<div class="box-main">
					<div class="gif">
                    <img src="https://metro.co.uk/wp-content/uploads/2016/10/makeup.gif?quality=90&strip=all&zoom=1&resize=644%2C428.gif" alt="beauty product">
                    </img>
					</div>
				</div>
			</section>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/>
			<section class="section">
				<div class="box-main1">
					<div class="firstHalf1">
						<h1 class="text-big"> ______________________________________________Shop By Categories_</h1>
                        <br/>
                        <img class="img" src="https://thefaceshop.in/cdn/shop/files/Cleanser_2.jpg?v=1700805001&width=200.jpg" alt="img" ></img>
                        <img class="img" src="https://thefaceshop.in/cdn/shop/files/Sunscreen_1.jpg?v=1701078550&width=200.jpg"alt="img" ></img>
                        <img class="img" src="https://thefaceshop.in/cdn/shop/files/Moisturizer_efe67962-9f37-4330-92a7-b9a24a9e5995.jpg?v=1700805002&width=200.jpg"alt="img"></img>
                        <img class="img" src="https://thefaceshop.in/cdn/shop/files/No-shine-hydrating-sun-cream.jpg?v=1701432152&width=200.jpg"alt="img"></img>
                        <img class="img" src="https://thefaceshop.in/cdn/shop/files/Lip_Tint_8c300a36-1e78-4926-8693-9e011f2d2fa8.jpg?v=1700805001&width=200.jpg"alt="img"></img>
                        <img class="img" src="https://thefaceshop.in/cdn/shop/files/Sunscreen_1.jpg?v=1701078550&width=200.jpg"alt="img"></img>
                        <img class="img" src="https://thefaceshop.in/cdn/shop/files/No-shine-hydrating-sun-cream.jpg?v=1701432152&width=200.jpg"alt="img"></img>
                        {/* <img class="img" src="https://thefaceshop.in/cdn/shop/files/Cleanser_2.jpg?v=1700805001&width=200.jpg"alt="img"></img> */}

                        
                       <h1><pre>      Cleanser        Serum              Moisturizer          Sunscreen         Makeup             Serum            Sunscreen </pre></h1>

                       <br/>
                        <br />
                        <br />
                        <br />
                        <br />
					</div>
				</div>
			</section>
            <br/><br/><br/><br/><br/>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
                        <img src="https://thefaceshop.in/cdn/shop/files/VALENTINES-DAY-BANNER_3D.jpg?v=1706773573&width=1500.gif"></img>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
                    sunita
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">

                   <img class="gif2" src="https://thefaceshop.in/cdn/shop/files/UPTO-25_-OFF-on-all-Moisturizers_3D.jpg?v=1701777535&width=1500.gif"></img>

					</div>
				</div>
			</section>
			<footer className="footer">
				<p className="text-footer">
					Created by sunita shinde
				</p>
			</footer>
		</div>
	);
}

export default App;
