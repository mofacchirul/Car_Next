import bdconnect, { collectionObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

const Sevicedetels = async ({ params }) => {
  const p = await params;

const res = await fetch(`http://localhost:3000/api/service/${p.id}`) 
const data = await res.json()

  
  return (
    <div>
       <div className="relative">
      {/* Background Image */}
      <Image
        src="/images/checkout/checkout.png"
        alt="Service Banner"
        width={1200}
        height={400}
        className="w-full h-64 object-cover rounded-md"
      />

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 flex items-center px-10">
        <div>
          <h1 className="text-white mt-4 text-3xl font-bold">Service Details</h1>
         
        </div>
        <div className="mt-[227px] w-1/2 lg:mr-14 mx-auto ">
            <span className="bg-red-500    text-white px-4 py-1 rounded-t-md font-semibold">
             <Link href={'/'}>
             Home</Link> /Service Details
            </span>
          </div>
      </div>
    </div>
  <div>
  <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
    <img src={data.img} className=" w-[500px] mx-auto lg:w-full object-cover rounded-2xl" alt="" />
        <h2 className="text-3xl font-bold text-gray-800">{data?.title}</h2>
        <p className="text-xl text-[#FF3811] font-semibold mt-2">${data?.price}</p>
        <p className="text-lg text-gray-700 mt-4">{data?.description}</p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">Facilities</h3>
          <ul className="mt-4 space-y-4">
            {data?.facility.map((item, index) => (
              <li key={index} className="bg-gray-50 p-4 rounded-lg shadow">
                <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
                <p className="text-gray-600 mt-2">{item.details}</p>

               
              </li>
            ))}
          </ul>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
                 <Link href={`/cheakout/${data._id}`}>
                 <button className="btn btn-block bg-red-500 text-white text-xl">cheakout</button>
                 </Link>
                </div>
      </div>
  </div>
    </div>
  );
};

export default Sevicedetels;
