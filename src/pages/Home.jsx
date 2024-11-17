import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (

<section className="home" id="home">
	<div className="content">
		<h1>Green Harvest</h1>
		<h3>Fresh And <span> Organic </span> Products For You</h3>
		<p>Nourishing lives with fresh, organic, and wholesome fruits and vegetables, for a healthier,happier you!</p>
		<Link to='/product'><button className='btn'> Shop Now</button></Link>
	</div>
</section>

  )
}

export default Home;
