import React, {useEffect} from 'react';
import App from "../../components/layouts/app";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {getStuff} from "../../store/stuff/actions";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


const Stuff = () => {
  const dispatch = useDispatch();
  const stuff = useSelector(state => state.stuff.stuff)
  useEffect(() => {
    dispatch(getStuff.request());
  }, [dispatch]);
  return (
    <App>
      <div className="w-11/12 m-auto mb-20 stuffPatrent">
        <h2 className='text-center text-amber-900 mt-10  tracking-wider animate-fade-in-up text-4xl'>Աշխատակազմ</h2>
      </div>
      <div className='w-full h-auto stuffPatrent'>
        <div className='w-11/12 h-auto  flex-wrap m-auto  mb-12'>
          <div className='w-1/4   h-auto p-4 float-left stuffImage'>
            <div
              className='w-full h-auto border-black border  mt-4 flex  items-center flex-col  shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl'>
              <Image
                class='w-full h-full object-contain  filter drop-shadow-lg transition-transform transform hover:scale-105'
                src='/tnoren.jpg'
                width={1000}
                height={1000}
                alt='Karine Melkumyan'
              />
              <div className='p-4 '>
                <p className='text-1xl p-1 text-amber-900 font-medium animate-fadeIn drop-shadow-md'>
                  Ռուզաննա Շուրկայի Ալավերդյան
                </p>
                <p
                  className='text-center text-1xl p-1 text-amber-900 font-medium animate-fadeIn drop-shadow-md'>Տնօրեն</p>
              </div>
            </div>
          </div>
          <div className='w-full p-6 group1   rounded-lg shadow-lg animate-fadeIn stuffText'>
            <p className='leading-7 text-justify  text-gray-700 text-1xl'>
              Ռուզանա Ալավերդյանը ծնվել է 1959թ․ դեկտեմբերի 13֊ին Երևանում։ 1966֊1976թ․֊ին
              սովորել է Երևանի թիվ 50 միջնակարգ դպրոցում։ 1978 - 1983թ.թ.֊ին սովորել է Երևանի Պետական Համալսարանի Հայ
              բանասիրության ֆակուլտետում։
              1990թ.թ.–1994թ.թ.֊ին աշխատել է Երևանի թիվ 182 միջնակարգ դպրոցում, որպես Հայոց լեզվի և գրականության
              ուսուցչուհի։ 1992 – 1994թ.թ.֊ին եղել է հայոց լեզվի և գրականության մեթոդ միավորման նախագահ։ 1994 –
              2009թ.թ.֊ին դպրոցի ուսումնադաստիարակչական աշխատանքների գծով փոխտնօրեն։ 1995 – 2009թ.թ.֊ին ընդգրկված է եղել
              հայոց լեզու առարկայի տարածքային և մարզային օլիմպիադայի հանձնաժողովի կազմում։ 2010 – 2011թ.թ.֊ին եղել է
              «Գ.էմինի անվան թիվ 182 ավագ դպրոց» ՊՈԱԿ ֊ի տնօրենի ժամանակավոր պաշտոնակատար։ 2011թ֊ից դարձել է դպրոցի
              գործադիր տնօրեն։
              Պարգևատրվել է՝ շնորհակալագրերով, պատվոգրերով «Կրթության բնագավառում ունեցած մեծ ավանդի համար», Հայաստանի
              Հանրապետության Ազգային ժողովի կողմից պատվոգրով, Հայաստանի Երկրապահ հուշամեդալով։ «Համազգային վստահություն»
              խորհրդի կողմից միջնակարգ կրթության որակյալ կազմակերպման համար արժանացել է «Հայուհի 2015» անվանակոչման և
              պարգևատրվել պատվոգրով։ Մասնակցել է՝ Եվրոպայի խորհրդի և Եվրոպական միության «Աջակցություն մարդու
              իրավունքների և ժողովրդավարական քաղաքացիության կրթությունը Արևելյան գործընկերության երկրներում » դպրոցների
              համար համատեղ ծրագրերիշրջանակներում կազմակերպվող Կիևում կայացած մեկնարկային համաժողովին, Եվրոպայի խորհրդի
              Ստրասբուրգ քաղաքում / Ֆրանսիա / կայանալիք կոնֆերանսին « Աջակցություն կրթության ոլորտում մարդու
              իրավունքների և ժողովրդավարական քաղաքացիության « Արևելյան գործընկերության երկրներին » ծրագրին , « 21 – րդ
              դարի կոնպետենցիաները ուսումնական հաստատություններում » կոնֆերանսին, « Արևելյան գործընկերության երկրներին »
              ծրագրի շրջանակներում, « Կրթության կազմակերպում և դպրոցի կառավարում » վերապատրաստման ծրագրին, « Սովորել
              սովորլու հմտություններ » հեռավար վերապատրաստման դասընթացին, ՀՀ Հանրակրթության մասին օրենքի և ՀՀ
              աշխատանքային փոփոխություններին նվիրված սեմինարին և ստացել է Հավաստագիր ‘’OUTSOURCE ‘’LLC կազմակերպության
              կողմից։ ԿԳՄՍ նախարարության կողմից նշանակվել է Երևանի 120 հիմնական դպրոցի խորհրդի անդամ։ Մասնակցել և
              հաջողությամբ ավարտել է ««Կրթության զարգացման և նորարարությունների ազգային կենտրոն»» հիմնադրամի կողմից
              կազմակերպված «Հանրակրթական ուսումնական հաստատությունների տնօրենների և տնօրենի տեղակալների վերապատրաստողի»
              30֊ժամյա դասընթացին, և ստացել է վերապատրաստողի վկայական։
            </p>
          </div>

        </div>

        <div className='w-full flex justify-evenly items-center mb-10 stuffPerson'>
          {stuff.filter(x => x.deputy_status === 1).map((item) => (
            <div key={item.id} className='w-1/4 h-auto flex justify-center items-center flex-col p-4 stuffPerson'>
              <div
                className='w-full h-auto flex justify-center items-center flex-col bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl'>
                <Image
                  class='w-full h-80 object-contain filter drop-shadow-lg transition-transform transform hover:scale-105'
                  src={process.env.IMAGE_URL + item?.avatar}
                  width={1000}
                  height={1000}
                  alt='Karine Melkumyan'
                />
                <div className='p-4'>
                  <p className='text-xl p-1 text-amber-900 font-medium animate-fadeIn drop-shadow-md'>
                    {item.fullname}
                  </p>
                  <p className='text-1xl p-1 font-bold text-gray-700 animate-fadeIn drop-shadow-md'>
                    {item.profession}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        <div className='p-10 '>
          <h2 className='text-center text-4xl text-amber-900 font-black animate-fadeIn'>
            Աշխատակազմ
          </h2>
        </div>
      </div>
      <div className='w-full h-auto  flex flex-wrap justify-evenly border-t-2 border-black '>
        {stuff.filter(x => x.deputy_status !== 1).map((item) => (
          <div
            key={item.id}
            className='w-5/12 h-80 m-4 flex stuffPersons justify-evenly shadow-md shadow-amber-900 hover:shadow-2xl  transition-shadow duration-500 ease-in-out'>
            <div className='w-2/5'>
              <Image
                className='w-full h-80 object-contain filter'
                src={process.env.IMAGE_URL + item?.avatar}
                width={1000}
                height={1000}
                alt='Irina Grigoryan'
              />
            </div>
            <div className='w-1/2 h-full flex flex-col justify-center text-start '>
              <p className='p-2 text-2xl font-serif text-gray-800'>{item.fullname}</p>
              <p className='p-2 text-xl font-serif text-gray-700'>  {item.profession}</p>
              <p className='p-2 text-lg font-serif text-gray-600'>Email:  {item.email}</p>
            </div>
          </div>
        ))}
      </div>


    </App>

  )
    ;
};

export default Stuff;