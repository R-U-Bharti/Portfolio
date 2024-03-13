import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [logoList, setLogoList] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const filesContext = await importAll('../assets/logo', /\.png/);
      const files = await Promise.all(filesContext);
      setLogoList(files);
    };

    loadImages();
  }, []);

  // Function to import all files in the context
  const importAll = async (context, regex) => {
    const keys = [];
    const files = [];

    const contextModules = await import.meta.glob('../assets/logo/*.png');

    for (const path in contextModules) {
      if (regex.test(path)) {
        keys.push(path);
        files.push(await contextModules[path]());
      }
    }

    return files;
  };

  return (
    <>
      <div className='h-max w-screen flex items-start justify-center'>
        <div className="flex flex-wrap gap-10 p-4">
          {logoList.slice(1,).map((elem, index) => (
            <div className="flex flex-col pl-10 md:pl-0 md:items-center md:justify-end w-full md:w-[calc(100%/8)] gap-2" key={index}>
              <img
                className='md:w-[10vw] w-[80%] border border-gray-200 dark:border-gray-50 h-[7rem] md:h-[5rem] p-2 rounded-md object-contain bg-[#fffffff5] shadow-[0px_0px_10px_rgba(255,255,255,0.5)] dark:shadow-[0px_0px_10px_rgba(0,0,0,0.5)]'
                src={elem.default}
                alt="Logo"
                width={100}
                height={100}
              />
              <div className='text-center pr-16 md:pr-0 font-semibold text-md'>{elem.default.split('/').pop().split('.')[0]}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
