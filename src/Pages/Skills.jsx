import React from 'react'

const Skills = () => {

  const filesFun = () => {

    const files = require.context('../../public', false, /\.png/)
    const fileName = files.keys()
    let logoList = fileName?.map(elem => `${elem?.slice(1,)}`)
    console.log("Logo List: ", logoList)

    return logoList;

  }

  return (
    <>
      <div className='h-screen w-screen flex items-center justify-center'>
        <div className="flex flex-wrap gap-4 p-4">
          {
            Array.isArray(filesFun()) &&
            filesFun()?.slice(1,)?.map((elem, index) =>
              <div className="flex flex-col items-center justify-end w-full md:w-[calc(100%/8)] gap-1">
                <img
                  key={index}
                  src={elem}
                  alt="Logo"
                  width={100}
                  height={100}
                />
                <div style={{ textAlign: 'center' }}>{elem?.slice(1,).split('.')[0]}</div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Skills