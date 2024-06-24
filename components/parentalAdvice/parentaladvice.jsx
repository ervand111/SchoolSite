import React from 'react';
import App from "@/components/layouts/app";
import Image from "next/image";

const ParentalAdvice = () => {
  return (
    <div>
      <App>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100">
          <div className="w-full py-10">
            <h2 className="text-center text-amber-900 tracking-wider animate-fade-in-up text-4xl">
              Ծնողական խորհուրդ
            </h2>
          </div>

          <div className="max-w-6xl bg-white rounded-lg overflow-hidden shadow-2xl w-full lg:flex transition-transform transform hover:scale-105">
            <div className="w-full lg:w-1/2 relative overflow-hidden">
              <Image
                src="/1.jpg"
                alt="students"
                layout="responsive"
                width={1000}
                height={1000}
                className="object-cover w-full h-96 lg:h-full"
              />
            </div>

            <div className="w-full lg:w-1/2 py-10 px-8 flex flex-col justify-center items-start space-y-4">
              <p className="text-3xl font-bold text-purple-900">
                Ծնողական խորհրդի նախագահ
              </p>
              <p className="text-2xl font-semibold text-gray-800">
                Մարի Աղաբեկյան
              </p>
              <p className="text-xl text-purple-700">
                mariaghabekyan@mail.ru
              </p>
            </div>
          </div>

          <div className="w-full mt-10 flex justify-center items-center mb-10">
            <div className="w-11/12 lg:w-9/12 h-auto border-t border-black py-10 flex flex-col justify-center items-center bg-white rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-900 leading-8">
                Կրթություն<br />
                2015-2017թթ. Խաչատուր Աբովյանի անվան ՀՊՄՀ-ի «Մաթեմատիկայի, ֆիզիկայի և ինֆորմատիկայի» ֆակուլտետ, մագիստրատուրա՝ «Ինֆորմատիկա» մասնագիտությամբ<br />
                2010-2015թթ.-Խաչատուր Աբովյանի անվան ՀՊՄՀ-ի «Մաթեմատիկայի, ֆիզիկայի և ինֆորմատիկայի» ֆակուլտետ, բակալավրիատ՝ «Ինֆորմատիկա» մասնագիտությամբ<br />
                2002-2005թթ.- Երևանի Ինֆորմատիկայի Պետական Քոլեջ<br />
                Աշխատանքային փորձ<br />
                2018թ.-ից մինչ օրս` Խաչատուր Աբովյանի անվան ՀՊՄՀ-ի Պաշտոնական կայքի ապահովման բաժնի ադմինիստրատոր<br />
                2015-2018թթ․ Ինֆորմատիկայի և դրա դասավանդման մեթոդիկայի ամբիոնի մասնագետ
              </p>
            </div>
          </div>
        </div>
      </App>
    </div>
  );
};

export default ParentalAdvice;
