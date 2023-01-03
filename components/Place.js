import React from "react";
import Image from "next/image";
const Place = () => {
  return (
    <>
      <div className="text-center bg-amber-100 text-gray-400 text-3xl lg:text-9xl text-serif">
        We Are AT?
      </div>
      <div className="lg:flex py-5 gap-5 bg-amber-100 ">
        <div className="">
          <div className="px-20 my-5">
            <Image
              src="/photo_2022-06-30_20-53-00.jpg"
              width={500}
              height={500}
              alt="Kolkata"
            />
          </div>
          <div className="text-center font-serif text-2xl">Kolkata</div>
          <div className="mx-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <span>
              <a href="#" className="rounded-xl bg-red-200 px-3 ">
                read more....
              </a>
            </span>
          </div>
        </div>
        <div className="">
          <div className="px-20 my-5">
            <Image
              src="/photo_2022-06-30_20-51-48.jpg"
              width={500}
              height={500}
              alt="Kolkata"
            />
          </div>
          <div className="text-center font-serif text-2xl">Kharagpur</div>
          <div className="mx-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <span>
              <a href="#" className="rounded-xl bg-red-200 px-3 ">
                read more....
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="lg:flex py-5 gap-5 bg-amber-100 ">
        <div className="">
          <div className="px-20 my-5">
            <Image
              src="/photo_2022-06-30_20-51-48.jpg"
              width={500}
              height={500}
              alt="Kolkata"
            />
          </div>
          <div className="text-center font-serif text-2xl">Belda</div>
          <div className="mx-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <span>
              <a href="#" className="rounded-xl bg-red-200 px-3 ">
                read more....
              </a>
            </span>
          </div>
        </div>
        <div className="">
          <div className="px-20 my-5">
            <Image
              src="/photo_2022-06-30_20-53-00.jpg"
              width={500}
              height={500}
              alt="Kolkata"
            />
          </div>
          <div className="text-center font-serif text-2xl">Chandrakona Road</div>
          <div className="mx-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <span>
              <a href="#" className="rounded-xl bg-red-200 px-3 ">
                read more....
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Place;
