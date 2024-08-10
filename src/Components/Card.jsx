import React from 'react';

const Card = () => {

const data=[
  {image:"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww" ,
     name:"Amazon Basics",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corrupti aspernatur nemo.",
      instock:true,
    },

  {image:"https://images.unsplash.com/photo-1464703278390-df5b3f1f61b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
    name:"Daily Products",
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corrupti aspernatur nemo.",
    instock:false,
  },

  {image:"https://plus.unsplash.com/premium_photo-1664305032567-2c460e29dec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29vZHN8ZW58MHx8MHx8fDA%3D",
     name:"Macbook Details",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corrupti aspernatur nemo. ",
      instock:false,
    },

]

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center gap-10">
   {data.map((elem,index)=>(
       <div key={index} className="w-64 h-78 bg-zinc-300 rounded-md overflow-hidden">
        <div className='w-full h-78'>
            <img className='w-full h-full object-cover' src={elem.image} alt="" />
        </div>
        <div className="w-full px-3 py-4 ">
          <h2>{elem.name}</h2>
          <p>{elem.description}</p>
          <button className= {`px-4 py-1 ${elem.instock ? 'bg-blue-600' :'bg-red-600' } rounded`}>
            {elem.instock ? "In Stock " : "Out of Stock"}
            </button>
        </div>
      </div>
   ))}
    </div>
  );
};

export default Card;