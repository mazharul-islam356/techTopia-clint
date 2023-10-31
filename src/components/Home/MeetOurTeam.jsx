import { BsFacebook } from 'react-icons/bs';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const MeetOurTeam = () => {
  return (
    <div>

        <h1 className="text-3xl font-semibold text-center my-10">Meet Our Team</h1>
        


      <div className="grid grid-cols-3 mb-32">
      <div className="card w-[400px] h-[400px] bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/s1h0q4W/Credit-Manager.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-semibold">Billie Joe</h2>
          <p>Web Designer</p>

          <div className='flex gap-2 text-xl justify-center mt-2'>
          <Link><BsFacebook></BsFacebook></Link>
          <Link><BiLogoInstagramAlt></BiLogoInstagramAlt></Link>
          <Link><AiFillLinkedin></AiFillLinkedin></Link>
          </div>
         
          
        </div>
      </div>


      <div className="card w-[400px] h-[400px] bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/QcPD0Cr/6bfe62d6db31abeb2528d6ec66c43afe.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-semibold">Jesse James</h2>
          <p>Security Engineer</p>

          <div className='flex gap-2 text-xl justify-center '>
          <Link><BsFacebook></BsFacebook></Link>
          <Link><BiLogoInstagramAlt></BiLogoInstagramAlt></Link>
          <Link><AiFillLinkedin></AiFillLinkedin></Link>
          </div>
          
          
        </div>
      </div>


      <div className="card w-[400px] h-[400px] bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/y44GPCH/office-laptop-african-businessma.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-semibold">David John</h2>
          <p>SEO Specialist</p>

          <div className='flex gap-2 text-xl justify-center mt-2'>
          <Link><BsFacebook></BsFacebook></Link>
          <Link><BiLogoInstagramAlt></BiLogoInstagramAlt></Link>
          <Link><AiFillLinkedin></AiFillLinkedin></Link>
          </div>
          
        </div>    
      </div>
      </div>


    </div>
  );
};

export default MeetOurTeam;
