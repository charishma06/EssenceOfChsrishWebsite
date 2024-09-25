import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const styles = {
  body: {
    fontFamily: 'Corbel, Comic Sans',
    backgroundColor: '#f5f5dc',
    color: '#7d3c3c',
    fontSize: '20px',
  },
  navbar: {
    backgroundColor: '#4b2e2e',
  },
  navbarText: {
    color: '#fff',
    fontSize: '20px',
  },
  header: {
    margin: '20px 0',
    color: '#7d3c3c',
    textAlign: 'center',
  },
  menuItem: {
    backgroundColor: '#fff',
    border: '1px solid #e67e22',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px 0',
    transition: 'transform 0.2s',
  },
  buttonCustom: {
    backgroundColor: '#7d3c3c',
    color: '#fff',
  },
  footer: {
    backgroundColor: '#4b2e2e',
    color: '#fff',
    padding: '20px',
  },
  imgFluid: {
    borderRadius: '15px',
  },
};

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    guests: 1,
    time: '',
    
  });

  const [cart, setCart] = useState([]);
  const [visibleCategory, setVisibleCategory] = useState(null);
  const [navExpanded, setNavExpanded] = useState(false);
  const handleNavToggle = () => setNavExpanded(prev => !prev);
  const handleNavLinkClick = () => setNavExpanded(false);
  const menuItems = {
    Brewtique: [
      { name: 'Espresso', price: 150, image: './images/ex.png' },
      { name: 'Americano', price: 200, image: './images/Americano.png' },
      { name: 'Cappuccino', price: 250, image: './images/Cappuccino.png' },
      { name: 'Macchiato', price: 200, image: './images/Macchiato.png' },
    ],
    Teasurgence: [
      { name: 'Black Tea', price: 150, image: './images/Black Tea.png' },
      { name: 'Green Tea', price: 150, image: './images/Green Tea.png' },
      { name: 'Herbal Tea', price: 200, image: './images/Herbal Tea.png' },
      { name: 'Fruit Tea', price: 250, image: './images/Fruit tea.png' },
    ],
    Cheesecakes: [
      { name: 'Cup Cake', price: 150, image: './images/cup.png' },
      { name: 'Assorted Sweets', price: 100, image: './images/Signature.png' },
      { name: 'Special Cheese Cake', price: 120, image: './images/cake.png' },
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${bookingDetails.name} on ${startDate.toDateString()} at ${bookingDetails.time}`);
    setBookingDetails({ name: '', email: '', guests: 1, time: '' });
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`Order booked: ${item.name} added to cart!`);
  };

  const handleRemoveFromCart = (itemToRemove) => {
    setCart((prevCart) => prevCart.filter(item => item.name !== itemToRemove.name));
    alert(`Order removed: ${itemToRemove.name}`);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Total amount: $${calculateTotal()}. Order Placed.`);
  };

  const toggleCategory = (category) => {
    setVisibleCategory(visibleCategory === category ? null : category);
  };

  return (
    <div style={styles.body}>
      {/* Navbar */}
      <Navbar style={styles.navbar} expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home" style={{ ...styles.navbarText, fontSize: '2rem' }}>Essence Of Charish</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" style={styles.navbarText}>Home</Nav.Link>
              <Nav.Link href="#menu" style={styles.navbarText}>Menu</Nav.Link>
              <Nav.Link href="#reviews" style={styles.navbarText}>Reviews</Nav.Link>
              <Nav.Link href="#events" style={styles.navbarText}>Events</Nav.Link>
              <Nav.Link href="#gallery" style={styles.navbarText}>Gallery</Nav.Link>
              <Nav.Link href="#aboutus" style={styles.navbarText}>About Us</Nav.Link>
              <Nav.Link href="#booking" style={styles.navbarText}>Reserve Table</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container id="home" className="my-5 pt-5">
        <h2 style={styles.header}>Your ideal destination for the finest coffee and tea.</h2>
        <Row>
          <Col md={12}>
            <img src={require('./images/bg1.png')} className="img-fluid" alt="Cafe" style={{ height: '550px', width: '100%', objectFit: 'cover' }} />
          </Col>
        </Row>
        <h3 className="mt-5" style={styles.header}>Today's Specials</h3>
        <Row className="my-4 text-center">
          {[{ image: './images/ice.png', name: 'Iced Tea' },
            { image: './images/Latto.png', name: 'Latte' },
            { image: './images/chail.png', name: 'Chai' },
            { image: './images/cold.png', name: 'Cold Brew' }].map((item, index) => (
              <Col md={3} key={index}>
                <img src={require(`${item.image}`)} className="rounded-circle" alt={item.name} style={{ width: '150px', height: '150px' }} />
                <p style={{ fontSize: '30px', color: '#000', marginTop: '10px',textAlign: 'center' }}>{item.name}</p>
              </Col>
            ))}
        </Row>
      </Container>
   <Container fluid id="menu" className="py-5" style={{ backgroundColor: '#f5f5dc' }}>
  <Row className="justify-content-center">
    <Col md={10}>
      <div style={{
        backgroundColor: '#f5f5dc',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        padding: '40px', // Increased padding for better spacing
      }}>
        <h2 style={styles.header}>Our Menu: Click on the specials below to explore more exclusive offerings.</h2>
        {cart.length > 0 && (
          <div className="mt-4">
            <h4 style={{ color: '#e67e22', fontSize: '1.5rem' }}>Cart Items:</h4>
            <Row>
              {cart.map((item, index) => (
                <Col md={4} key={index} className="cart-item">
                  <div style={styles.menuItem}>
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                    <Button variant="danger" onClick={() => handleRemoveFromCart(item)}>Remove</Button>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}

        {Object.keys(menuItems).map((category, index) => (
          <div key={index}>
            <h4
              style={{
                ...styles.header,
                cursor: 'pointer',
                padding: '10px',
                border: '1px solid #e67e22',
                borderRadius: '5px',
                display: 'inline-block',
                marginBottom: '10px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}
              onClick={() => toggleCategory(category)}>
              {category}
            </h4>
            {visibleCategory === category && (
              <Row>
                {menuItems[category].map((item, itemIndex) => (
                  <Col md={4} key={itemIndex}>
                    <div className="menu-item" style={styles.menuItem}>
                      <img
                        src={require(`${item.image}`)}
                        alt={item.name}
                        className="img-fluid"
                        style={{
                          height: '250px',
                          width: '250px',
                          borderRadius: '15px',
                          objectFit: 'cover',
                        }}
                      />
                      <h4>{item.name}</h4>
                      <p>${item.price}</p>
                      <Button style={styles.buttonCustom} onClick={() => handleAddToCart(item)}>Add to Cart</Button>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        ))}

        <h4 className="mt-4" style={{ color: '#e67e22', fontSize: '1.5rem' }}>Total Amount: ${calculateTotal()}</h4>
        <Button style={styles.buttonCustom} onClick={handleCheckout}>Checkout</Button>
      </div>
    </Col>
  </Row>
</Container>

   <Container fluid id="reviews" className="py-5" style={{ backgroundColor: '#f5f5dc' }}>
  <Row className="justify-content-center">
    <Col md={10}>
      <div style={{
        backgroundColor: '#f5f5dc',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        padding: '40px', 
      }}>
        <h2 style={styles.header}>What Our Customers Say</h2>
        <Row className="my-4">
          {[{ star: '⭐⭐⭐⭐', name: 'Abhi', review: '"Essence of Charish has a warm vibe and great coffee"', image: './images/re.png' },
            { star: '⭐⭐⭐⭐', name: 'Ashika', review: '"Essence of Charish is perfect for a cozy drink stop!"', image: './images/re.png' },
            { star: '⭐⭐⭐⭐', name: 'Mishi', review: '"Loved the friendly service and tea at Essence of Charish!"', image: './images/re.png' },
            { star: '⭐⭐⭐⭐', name: 'Vaishu', review: '"Essence of Charish offers a relaxing atmosphere and tasty drinks."', image: './images/re.png' }].map((review, index) => (
              <Col md={5} key={index} className="review-card" style={{ margin: '20px', padding: '0px' }}>
                <div style={{
                  display: 'flex',
                  padding: '30px', 
                  border: '1px solid #e67e22',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                }}>
                  <img 
                    src={require(`${review.image}`)} 
                    alt={review.name} 
                    style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '20px', objectFit: 'cover' }} 
                  />
                  <div>
                    <h4>{review.name}</h4>
                    <h4>{review.star}</h4>
                    <p>{review.review}</p>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </Col>
  </Row>
</Container>
<Container fluid id="events" className="py-5" style={{ backgroundColor: '#f5f5dc' }}>
  <Row className="justify-content-center">
    <Col md={10}>
      <div style={{
        backgroundColor: '#f5f5dc',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        padding: '40px',
      }}>
        <h2 style={styles.header}>Upcoming Events</h2>
        <Row className="my-4">
          {[{ image: './images/TeaFest.png', title: 'Tea Festival', date: 'October 10, 2024', time: '3:00 PM', description: 'Join us for the Tea Festival at Essence of Charish! Explore an exquisite selection of teas, indulge in tastings, and celebrate the rich flavors of tea with us!' },
            { image: './images/Music.png', title: 'Live Music Night', date: 'October 30, 2024', time: '7:00 PM', description: 'Enjoy a night of great vibes at the Live Music Concert in Essence of Charish! Immerse yourself in captivating performances while sipping on your favorite beverages in a cozy atmosphere!' }].map((event, index) => (
              <Col md={5} key={index} className="event-card" style={{ margin: '20px', padding: '0px' }}>
                <div style={{
                  padding: '30px', 
                  border: '1px solid #e67e22',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                }}>
                  <img 
                    src={require(`${event.image}`)} 
                    className="img-fluid" 
                    alt={event.title} 
                    style={{ 
                      borderRadius: '10px', 
                      width: '100%',    
                      height: '200px',  
                      objectFit: 'cover' 
                    }} 
                  />
                  <h4 className="mt-3">{event.title}</h4>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p>{event.description}</p>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </Col>
  </Row>
</Container>

<Container fluid id="gallery" className="py-5" style={{ backgroundColor: '#f5f5dc' }}>
  <Row className="justify-content-center">
    <Col md={10}>
      <div style={{
        backgroundColor: '#f5f5dc',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        padding: '40px', // Increased padding
      }}>
        <h2 style={styles.header}>Gallery</h2>
        <Row className="my-4">
          {[{ image: './images/gallery1.png', title: 'Cozy Ambiance' },
            { image: './images/gallery2.png', title: 'Homely Vibe' },
            { image: './images/gallery4.png', title: 'Pleasant Aura' },
            { image: './images/gallery3.png', title: 'Delicious Coffee' }].map((item, index) => (
              <Col md={4} key={index} className="gallery-card" style={{ margin: '20px' }}>
                <div style={{
                  padding: '30px', // Increased internal padding
                  border: '1px solid #e67e22',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                }}>
                  <img 
                    src={require(`${item.image}`)} 
                    className="img-fluid" 
                    alt={item.title} 
                    style={{ 
                      borderRadius: '10px', 
                      width: '100%',    // Image width set to 100% of the container
                      height: '200px',  // Fixed height for consistent appearance
                      objectFit: 'cover' 
                    }} 
                  />
                  <h4 style={{ marginTop: '10px' }}>{item.title}</h4>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </Col>
  </Row>
</Container>
<Container fluid id="aboutus" className="py-5" style={{ backgroundColor: '#f5f5dc' }}>
  <Row className="justify-content-center">
    <Col md={10}>
      <div style={{
        backgroundColor: '#f5f5dc',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        padding: '40px', 
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '20px',
      }}>
        <Col md={6} className="text-center">
          <img 
            src={require('./images/logo1.png')} 
            alt="About Us" 
            style={{ width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover' }} 
          />
        </Col>
        <Col md={6}>
          <h2 style={styles.header}>About Us</h2>
          <p style={{ textAlign: 'justify' }}> {/* Text aligned to justify */}
            <strong>Essence of Charish</strong> is a charming cafe located near the beach in Machilipatnam, where stunning aesthetics meet a relaxing atmosphere. 
            With its beautifully designed decor, the cafe offers a perfect blend of coastal vibes and cozy elegance, making it an ideal spot for beachgoers and 
            locals alike. Enjoy a delightful selection of artisanal coffees, handcrafted teas, and mouthwatering pastries, all while soaking in the picturesque 
            surroundings. Whether you're watching the sunset with a refreshing drink or savoring a warm pastry, Essence of Charish invites you to experience the 
            beauty of life, one sip at a time.
          </p>
        </Col>
      </div>
    </Col>
  </Row>
</Container>

      <Container fluid id="booking" className="py-5" style={{ backgroundColor: '#f5f5dc' }}>
  <Row className="justify-content-center">
    <Col md={10}>
      <div style={{
        backgroundColor: '#f5f5dc',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        padding: '40px', 
      }}>
        <h2 style={styles.header}>Reserve Your Table</h2>
        <Form onSubmit={handleBookingSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              value={bookingDetails.name} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              value={bookingDetails.email} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>
          <Form.Group controlId="formGuests">
            <Form.Label>Number of Guests</Form.Label>
            <Form.Control 
              as="select" 
              name="guests" 
              value={bookingDetails.guests} 
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5, 6].map(num => <option key={num} value={num}>{num}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formTime">
            <Form.Label>Time</Form.Label>
            <Form.Control 
              type="time" 
              name="time" 
              value={bookingDetails.time} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <DatePicker 
              selected={startDate} 
              onChange={date => setStartDate(date)} 
              className="form-control"
              required
            />
          </Form.Group>
          <Button 
            style={styles.buttonCustom} 
            type="submit"
          >
            Reserve
          </Button>
        </Form>
      </div>
    </Col>
  </Row>
</Container>
<footer style={styles.footer} className="text-center">
        <p>Location: Machilipatnam</p>
        <p>Contact us: 9398471621 | Email: info@essenceofcharish.com</p>
        <p>Essence Of Charish © 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
