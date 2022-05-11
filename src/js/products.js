const products = [
	{
		name: "Product name",
		price: 240.00,
		discountPrice: 120.00,
		excerpt: "Description",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper at molestie vehicula in dui, sit cursus. Ultrices convallis volutpat dignissim velit sed. Massa, congue purus suspendisse faucibus tincidunt. Sit commodo at in at aliquam placerat odio.",
    new: true,
    quantity: 6,
    like: false,
	},
	{
		name: "Pera Verde",
		price: 5,
		discountPrice: 2.50,
		excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi odio magni cum, veniam quod, libero, deserunt beatae exercitationem fuga eaque at fugiat praesentium? Quis sequi reprehenderit animi nemo vero optio.",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo veritatis tempora consectetur magnam quam saepe ratione pariatur, suscipit fugit eos id quidem quia debitis quisquam sapiente reprehenderit. Sit, officiis reprehenderit? Eos accusamus officia aperiam maxime cumque esse, corrupti fuga corporis ex est eius aliquam placeat doloribus adipisci rem debitis dolor delectus, sapiente aspernatur iure! Commodi exercitationem ducimus placeat at laboriosam."
	},
	{
		name: "Prugna Viola",
		price: 8,
		excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi odio magni cum, veniam quod, libero, deserunt beatae exercitationem fuga eaque at fugiat praesentium? Quis sequi reprehenderit animi nemo vero optio.",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo veritatis tempora consectetur magnam quam saepe ratione pariatur, suscipit fugit eos id quidem quia debitis quisquam sapiente reprehenderit. Sit, officiis reprehenderit? Eos accusamus officia aperiam maxime cumque esse, corrupti fuga corporis ex est eius aliquam placeat doloribus adipisci rem debitis dolor delectus, sapiente aspernatur iure! Commodi exercitationem ducimus placeat at laboriosam."
	},
];

const productsContainer = document.querySelector(".products");
products.forEach((product, index) => {
	const html = `
	<div class="product" id="product-${index}">
		<h2>${product.name}</h2>
		<p>${product.excerpt}</p>
		<span>
		${product.discountPrice ? `${product.discountPrice} <strike>${product.price}</strike>` : `${product.price}`}
		</span>
		<p>${product.desc}</p>
	</div>
	`;
	productsContainer.innerHTML += html;
});