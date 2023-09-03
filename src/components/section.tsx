import Image from "next/image";
import p3 from '../../public/p3 copy.jpg' ;
import p4 from '../../public/p4 copy.jpg';
import m2 from '../../public/m2 copy.jpg';
import Link from "next/link";


const Section = () => {
  return (
    <main className="flex gap-8 items-center justify-evenly my-8">
        <div className="">
            <Link href="/">
            <img src="/p3 copy.jpg" alt="" width={300}  />
            </Link>
            <h2 className="px-4 py-2">
                price $99
            </h2>
            <button className="py-1 px-2 rounded-xl bg-green-600 text-white">
                Add to Cart
            </button>
        </div>
        <div className="py-3">
        <Link href="/">
            <img src="/p4 copy.jpg" alt=""  width={300}/>
            </Link>
            <h2 className="px-4 py-2">
                price $99
            </h2>
            <button className="py-1 px-2 rounded-xl bg-green-600 text-white">
                Add to Cart
            </button>
        </div>
        <div>
        <Link href="/">
            <img src='/m2 copy.jpg' alt=""  width={300}/>
            </Link> 
            <h2 className="px-4 py-2">
                price $99
            </h2>
            <button className="py-1 px-2 rounded-xl bg-green-600 text-white">
                Add to Cart
            </button>
        </div>
    </main>
  )
}

export default Section