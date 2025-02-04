const products = [
  {
    id: 1,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc: 'products/1.webp',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc: 'products/2.webp',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: 'products/3.webp',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 4,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc: 'products/4.webp',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 5,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc: 'products/5.webp',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 6,
    name: 'Medium Stuff Satchel',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: 'products/6.webp',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function ProductList() {
  return (
    <div className="bg-white uppercase">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h2 className="text-[40px] font-bold tracking-tight text-black uppercase mb-5">New Arrivals</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 text-center">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group text-sm">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 font-bold text-black">{product.name}</h3>
              <p className="mt-2 font-medium text-gray-700">{product.price}</p>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-black text-white px-3 py-3 uppercase">view all</button>
        </div>
      </div>
    </div>
  )
}
