import { AiOutlineGoogle } from 'react-icons/ai';
import { SiSamsung } from 'react-icons/si';
import { AiOutlineApple } from 'react-icons/ai';
import { SiXiaomi } from 'react-icons/si';
import { SiNokia } from 'react-icons/si';
import { SiOneplus } from 'react-icons/si';


const Services = () => {
  return (
    <div className='mb-10'>
        <h1 className='mt-14 text-4xl font-semibold text-center underline text-blue-500'>Our Services</h1>
      <div className="text-center lg:gap-4 lg:mr-10 lg:ml-14 lg:mt-12 mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

        <div className="card card-compact mr-2 mb-2 py-4 bg-base-100 shadow-xl">

          <AiOutlineGoogle className="text-5xl  text-black ml-44 mt-4"></AiOutlineGoogle>

          <div className="p-4">
            <h2 className="text-3xl">Google</h2>
            <p>
            Google is a technology company that specializes in Internet-related services and products.
            </p>
          </div>
        </div>

        <div className="card card-compact py-4 bg-base-100 shadow-xl">
          <SiSamsung className="text-7xl text-black ml-44 mt-4"></SiSamsung>

          <div className="p-4">
            <h2 className="text-3xl">Samsung</h2>
            <p>
            Samsung offers a wide range of products and services, including smartphones, TVs, appliances, online services, and telecommunications products
            </p>
          </div>
        </div>

        <div className="card card-compact py-4 bg-base-100 shadow-xl">
          <AiOutlineApple className="text-6xl text-black ml-44 mt-4"></AiOutlineApple>

          <div className="p-4">
            <h2 className="text-3xl">Apple</h2>
            <p>
            Apple is an American technology company that specializes in consumer electronics, computer software, and online services.
            </p>
          </div>
        </div>
        <div className="card card-compact py-4 bg-base-100 shadow-xl">
          <SiOneplus className="text-6xl text-black ml-44 mt-4"></SiOneplus>

          <div className="p-4">
            <h2 className="text-3xl">OnePlus</h2>
            <p>
            OnePlus Care: A customer support service that provides users with help with their OnePlus devices.
            </p>
          </div>
        </div>
        <div className="card card-compact py-4 bg-base-100 shadow-xl">
          <SiXiaomi className="text-6xl text-black ml-44 mt-4"></SiXiaomi>

          <div className="p-4">
            <h2 className="text-3xl">Xiaomi</h2>
            <p>
            Xiaomi is a Chinese electronics company that specializes in smartphones, wearable devices, and other consumer electronics.
            </p>
          </div>
        </div>
        <div className="card card-compact py-4 bg-base-100 shadow-xl">
          <SiNokia className="text-6xl text-black ml-44 mt-4"></SiNokia>

          <div className="p-4">
            <h2 className="text-3xl">Nokia</h2>
            <p>
            Nokia is a Finnish telecommunications company that specializes in mobile phone networks, network infrastructure, and software. 
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Services;
