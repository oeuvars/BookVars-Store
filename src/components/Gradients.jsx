import coffeedesign from '../Assets/logo1.svg';
import designer from '../Assets/logo2.svg';
import salon from '../Assets/logo3.svg';

export default function Gradients() {
  return (
    <div>
        <div className='flex pb-10 justify-center'>
            <div className='text-center justify-center shadow-lg px-10 rounded-md my-1 mx-3 mb-2 basic-one lg:hover:saturate-150 lg:ease-in lg:transition lg:duration-500'>
                <div className='flex justify-center'>
                    <img src={coffeedesign} alt="" width={150} height={150}/>
                </div>
                <h3 className='text-lg font-playfair italic text-rosewood pb-2'>Arts & Literature</h3>
                <p className='py-2 pb-4 font-outfit text-neutral-900 text-opacity-85 text-sm phone:w-60 lg:w-72 mx-auto'>
                    {" "}
                    Inspiring creativity and enriching minds through written masterpieces.
                </p>
            </div>

            <div className='text-center justify-center shadow-lg px-10 rounded-md my-1 mx-3 green-grad lg:hover:saturate-150 lg:ease-in lg:transition lg:duration-500'>
                <div className='flex justify-center'>
                    <img src={salon} alt="" width={150} height={150} />
                </div>
                <h3 className='text-lg font-playfair italic text-rosewood pb-2'>Murder & Mystery</h3>
                <p className='py-2 pb-4 font-outfit text-neutral-900 text-opacity-85 text-sm phone:w-60 lg:w-72 mx-auto'>
                    {" "}
                    Intrigue, suspense, and a quest for truth in thrilling mysteries.
                </p>
            </div>

            <div className='text-center justify-center shadow-lg px-10 rounded-md my-1 mx-3 mb-2 soft-weather lg:hover:saturate-150 lg:ease-in lg:transition lg:duration-500'>
                <div className='flex justify-center'>
                    <img src={designer} alt="" width={150} height={150}  />
                </div>
                <h3 className='text-lg font-playfair italic text-rosewood pb-2'>Fiction & Fantasy</h3>
                <p className='py-2 pb-4 font-outfit text-neutral-900 text-opacity-85 text-sm phone:w-60 lg:w-72 mx-auto'>
                    {" "}
                    Otherworldly stories that transport and captivate with imagination and wonder.
                </p>
            </div>




        </div>
    </div>
  )
}


