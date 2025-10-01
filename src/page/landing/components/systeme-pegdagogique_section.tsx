export const SystemePedagogiqueSection = () => {
    return (
      <div className="w-full bg-white dark:bg-zinc-800 dark:text-white py-16 px-10">
        <h1 className="text-5xl font-bold text-gray-700 dark:text-green-700 text-center mb-20">
          SYSTEME PEDAGOGIQUE
        </h1>
        
        <div className="flex items-center justify-center relative max-w-7xl mx-auto h-[600px] ">
          <div className="absolute top-16 left-40 w-80 z-10">
            <h2 className="text-3xl font-bold text-gray-700 mb-4 text-right">LMD</h2>
            <p className="text-gray-600 dark:text-gray-300 text-right text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, voluptatum?
            </p>
          </div>
          
          <div className="absolute top-16 right-40 w-80 z-10">
            <h2 className="text-3xl font-bold text-gray-700 mb-4 ">LOREM</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor exercitationem sed perspiciatis vitae quod?
            </p>
          </div>
          
          <div className="absolute bottom-16 left-40 w-80 z-10">
            <h2 className="text-3xl font-bold text-gray-700 mb-4 text-right">LOREM</h2>
            <p className="text-gray-600 dark:text-gray-300  text-right text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione architecto aliquam a unde numquam.
            </p>
          </div>
          
          <div className="absolute bottom-16 right-40 w-80 z-10">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">LOREM</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi animi velit aliquid neque cumque cupiditate quas fuga ducimus.
            </p>
          </div>
          <div className="flex items-center justify-center w-3/4 flex-wrap z-[1]">
            <div className="h-80 w-80 rounded-tl-full bg-gray-300 dark:bg-gray-900 m-5"></div>
            <div className="h-80 w-80 rounded-tr-full bg-gray-300 dark:bg-gray-900 m-5" ></div>
            <div className="h-80 w-80 rounded-bl-full bg-gray-300 dark:bg-gray-900 m-5"></div>
            <div className="h-80 w-80 rounded-br-full bg-gray-300 dark:bg-gray-900 m-5"></div>
          </div>
          
        </div>
      </div>
    );
  }