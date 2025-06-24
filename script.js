// Furniture data for modal
    const furnitureData = [
      { id: 1, name: 'Modern Lounge Chair', description: 'Sleek Scandinavian design with premium leather upholstery and oak frame.', price: 199.99, category: 'Seating', material: 'Leather, Oak Wood', dimensions: '32"W x 34"D x 33"H' },
      { id: 2, name: 'Minimalist Dining Table', description: 'Solid walnut table with clean lines, perfect for modern dining spaces.', price: 799.99, category: 'Tables', material: 'Walnut Wood', dimensions: '72"W x 36"D x 30"H' },
      { id: 3, name: 'Velvet Sofa', description: 'Luxurious velvet-upholstered sofa with tufted detailing and sturdy metal legs.', price: 1299.99, category: 'Seating', material: 'Velvet, Metal', dimensions: '84"W x 36"D x 34"H' },
      { id: 4, name: 'Industrial Bookshelf', description: 'Rustic iron and reclaimed wood bookshelf, ideal for urban lofts.', price: 349.99, category: 'Storage', material: 'Iron, Reclaimed Wood', dimensions: '48"W x 12"D x 72"H' },
      { id: 5, name: 'Modern King Bed', description: 'Low-profile bed with upholstered headboard and solid wood frame.', price: 999.99, category: 'Beds', material: 'Fabric, Wood', dimensions: '80"W x 84"D x 48"H' },
      { id: 6, name: 'Arched Floor Lamp', description: 'Elegant brass lamp with a large, curved design for ambient lighting.', price: 199.99, category: 'Decor', material: 'Brass, Fabric', dimensions: '20"W x 20"D x 72"H' },
      { id: 7, name: 'Cozy Armchair', description: 'Plush armchair with soft fabric and sturdy wooden legs.', price: 399.99, category: 'Seating', material: 'Fabric, Wood', dimensions: '30"W x 32"D x 34"H' },
      { id: 8, name: 'Glass Coffee Table', description: 'Modern table with tempered glass top and chrome legs.', price: 299.99, category: 'Tables', material: 'Glass, Chrome', dimensions: '48"W x 24"D x 18"H' },
      { id: 9, name: 'Wooden Cabinet', description: 'Classic oak cabinet with ample storage and sliding doors.', price: 599.99, category: 'Storage', material: 'Oak Wood', dimensions: '60"W x 18"D x 36"H' },
      { id: 10, name: 'Platform Bed', description: 'Minimalist platform bed with slatted base and dark finish.', price: 799.99, category: 'Beds', material: 'Wood', dimensions: '62"W x 82"D x 42"H' },
      { id: 11, name: 'Round Wall Mirror', description: 'Modern mirror with brass frame, perfect for any room.', price: 149.99, category: 'Decor', material: 'Glass, Brass', dimensions: '36"W x 36"H' },
      { id: 12, name: 'Leather Recliner', description: 'Comfortable recliner with adjustable settings and leather upholstery.', price: 699.99, category: 'Seating', material: 'Leather, Metal', dimensions: '34"W x 38"D x 40"H' },
      { id: 13, name: 'Marble Side Table', description: 'Elegant marble top with gold-accented legs.', price: 249.99, category: 'Tables', material: 'Marble, Metal', dimensions: '24"W x 24"D x 22"H' },
      { id: 14, name: 'Modern Dresser', description: 'Sleek dresser with multiple drawers for ample storage.', price: 499.99, category: 'Storage', material: 'Wood', dimensions: '48"W x 18"D x 36"H' },
      { id: 15, name: 'Canopy Bed', description: 'Romantic canopy bed with oak frame and elegant drapes.', price: 1199.99, category: 'Beds', material: 'Oak Wood, Fabric', dimensions: '80"W x 84"D x 78"H' },
      { id: 16, name: 'Ceramic Table Lamp', description: 'Artisanal lamp with textured ceramic base.', price: 129.99, category: 'Decor', material: 'Ceramic, Fabric', dimensions: '15"W x 15"D x 25"H' },
      { id: 17, name: 'Tufted Ottoman', description: 'Versatile ottoman with storage compartment and tufted top.', price: 199.99, category: 'Seating', material: 'Fabric, Wood', dimensions: '30"W x 30"D x 18"H' },
      { id: 18, name: 'Console Table', description: 'Narrow table for hallways or entryways with sleek design.', price: 349.99, category: 'Tables', material: 'Wood, Metal', dimensions: '48"W x 12"D x 32"H' },
      { id: 19, name: 'Open Shelf Unit', description: 'Modern open shelving for display and storage.', price: 299.99, category: 'Storage', material: 'Wood, Metal', dimensions: '36"W x 12"D x 60"H' },
      { id: 20, name: 'Upholstered Queen Bed', description: 'Soft upholstered bed with sturdy frame and modern look.', price: 899.99, category: 'Beds', material: 'Fabric, Wood', dimensions: '62"W x 82"D x 48"H' },
    ];

    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      });
    });

    // Gallery filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const furnitureItems = document.querySelectorAll('.furniture-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        furnitureItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = item.classList.contains('hidden') ? 'none' : 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // See More functionality
    document.getElementById('see-more-btn').addEventListener('click', () => {
      document.querySelectorAll('.furniture-item.hidden').forEach(item => {
        item.classList.remove('hidden');
        item.style.display = 'block';
      });
      document.getElementById('see-more-btn').style.display = 'none';
    });

    // Modal functionality
    function openModal(id) {
      const item = furnitureData.find(f => f.id === id);
      if (!item) return;

      document.getElementById('modal-title').textContent = item.name;
      document.getElementById('modal-image').src = `https://via.placeholder.com/300x200?text=${item.name.replace(/ /g, '+')}`;
      document.getElementById('modal-description').textContent = item.description;
      document.getElementById('modal-price').textContent = `$${item.price.toFixed(2)}`;
      document.getElementById('modal-category').textContent = `Category: ${item.category}`;
      document.getElementById('modal-material').textContent = `Material: ${item.material}`;
      document.getElementById('modal-dimensions').textContent = `Dimensions: ${item.dimensions}`;
      document.getElementById('modal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }

    // Close modal when clicking outside
    document.getElementById('modal').addEventListener('click', (e) => {
      if (e.target === document.getElementById('modal')) {
        closeModal();
      }
    });

    // Contact form submission
    function submitForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name) {
        alert('Please enter your name.');
        return;
      }

      if (!email) {
        alert('Please enter your email.');
        return;
      }

      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      if (phone && !/^\d{10,}$/.test(phone.replace(/\D/g, ''))) {
        alert('Please enter a valid phone number (at least 10 digits).');
        return;
      }

      if (!subject) {
        alert('Please enter a subject.');
        return;
      }

      if (!message) {
        alert('Please enter your message.');
        return;
      }

      alert('Thank you for your message! We will respond soon.');
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
    }

    // Design quiz submission
    function submitQuiz() {
      const style = document.getElementById('style-preference').value;
      const room = document.getElementById('room-type').value;
      const color = document.getElementById('color-preference').value;

      if (!style || !room || !color) {
        alert('Please complete all quiz fields.');
        return;
      }

      alert(`Based on your preferences (Style: ${style}, Room: ${room}, Color: ${color}), we recommend checking our ${style} ${room} collection!`);
      document.getElementById('style-preference').value = '';
      document.getElementById('room-type').value = '';
      document.getElementById('color-preference').value = '';
    }

    // Sticky navbar effect
        window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(90deg, #1a252f, #2c3e50)'; /* Solid gradient on scroll */
        } else {
            navbar.style.background = 'rgba(44, 62, 80, 0.8)'; /* Semi-transparent when at top */
        }
    });