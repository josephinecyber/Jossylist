 const form = document.getElementById('myForm');
    const messageDiv = document.getElementById('message');
    const productList = document.getElementById('productList');

    let products = [];

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Get values
      const name = document.getElementById('productName').value.trim();
      const description = document.getElementById('productDescription').value.trim();
      const imageUrl = document.getElementById('imageUrl').value.trim();
      const price = document.getElementById('price').value.trim();
      const brand = document.getElementById('brand').value.trim();

      // Validate
      if (!name || !description || !imageUrl || !price || !brand) {
        messageDiv.textContent = 'Please fill in all fields.';
        messageDiv.className = 'message error';
        return;
      }

      messageDiv.textContent = 'Product added successfully!';
      messageDiv.className = 'message success';
const product = { name, description, imageUrl, price, brand };
products.push(product);

      form.reset();

      displayProducts();
    });

   function displayProducts() {
  productList.innerHTML = ''; // Clear previous output

  products.forEach((product, index) => {
    const div = document.createElement('div');
    div.className = 'individual-item';

    div.innerHTML = `
      <h3>Name: ${product.name}</h3>  
      <br>
      <p>Description: ${product.description}</p><br>
      <p class="price">Price: $${parseFloat(product.price).toFixed(2)}</p><br>
      <p>Brand: ${product.brand}</p><br>
      <img src="${product.imageUrl}" alt="${product.name}" />
    `;

    productList.appendChild(div);
  });
}