
import './App.css';
import photo1 from './images/icon-sedans.svg';
import photo2 from './images/icon-suvs.svg';
import photo3 from './images/icon-luxury.svg';

function App() {
  return (
    <div className="flex flex-col w-80 md:flex-row md:w-container">
     <div className=' bg-Bright-orange p-12 rounded-t-lg md:rounded-t-none md:rounded-l-lg hover:scale-105 hover:rounded-lg'>
      <img className='hover:pl-7 duration-700 ease-in-out' src={photo1} alt="sedans" />
      <h1 className=' py-9 font-big-shoulders-display text-4xl uppercase text-Very-light-gray'>sedans</h1>
      <p className=' pb-5 leading-6 text-main font-lexend-deca text-Transparent-white'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
      <button className=' py-3 px-7 text-main font-lexend-deca text-Bright-orange bg-Very-light-gray rounded-full hover:text-Very-light-gray hover:bg-Bright-orange hover:border-Very-light-gray hover:border-2'>Learn More</button>
     </div>
     <div className=' bg-Dark-cyan p-12 hover:scale-105 hover:rounded-lg'>
      <img className='hover:pl-7 duration-700 ease-in-out' src={photo2} alt="suvs" />
      <h1 className=' py-9 font-big-shoulders-display text-4xl uppercase text-Very-light-gray'>suvs</h1>
      <p className='pb-5 leading-6 text-main font-lexend-deca text-Transparent-white'>Take an SUV for its spacious interrior, pwier, and versatility. Perfect for your next family vacation and off-road adventures.</p>
      <button className='py-3 px-7 text-main font-lexend-deca text-Dark-cyan bg-Very-light-gray rounded-full hover:text-Very-light-gray hover:bg-Dark-cyan hover:border-Very-light-gray hover:border-2'>Learn More</button>
     </div>
     <div className=' bg-Very-dark-cyan p-12 rounded-b-lg md:rounded-b-none md:rounded-r-lg hover:scale-105 hover:rounded-lg'>
      <img className='hover:pl-7 duration-700 ease-in-out' src={photo3} alt="" />
      <h1 className=' py-9 font-big-shoulders-display text-4xl uppercase text-Very-light-gray'>luxury</h1>
      <p className='pb-5 leading-6 text-main font-lexend-deca text-Transparent-white'>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
      <button className='py-3 px-7 text-main font-lexend-deca text-Very-dark-cyan bg-Very-light-gray rounded-full hover:text-Very-light-gray hover:bg-Very-dark-cyan hover:border-Very-light-gray hover:border-2'>Learn More</button>
     </div>
    </div>
  );
}

export default App;
