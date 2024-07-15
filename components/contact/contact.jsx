import React from 'react';
import {EnvironmentOutlined, PhoneOutlined, ClockCircleOutlined} from "@ant-design/icons";
import {Button, Input, Form, message} from "antd";
import Image from "next/image";
import {addContact} from "@/store/contact/actions";
import {useDispatch} from "react-redux";

const Contact = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    // alert()
    // console.log(values)
    form.resetFields()
    message.success("Ձեր հայտը ուղարկված է")
    dispatch(addContact.request(values))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (

    <div className='w-full h-auto flex flex-wrap justify-center items-center  formParent '>
      <div className='w-full contactTExt'>
        <h2 className='text-center  pt-10 pb-20 tracking-wider animate-fade-in-up text-4xl'>Կապ մեզ հետ</h2>
      </div>
      <div className='w-9/12 h-auto flex  justify-around items-center contact '>
        <div
          className='w-1/4 h-52  bg-yellow-400 flex justify-center items-center flex-col transition duration-500  hover:scale-110 hover:bg-yellow-300'>
          <div className='w-1/2 h-32 flex justify-center items-center '>
            <EnvironmentOutlined className='text-5xl text-white'/>
          </div>
          <div className='w-9/12 h-32 flex justify-center items-start'>
            <p className='text-center text-1xl text-white'>Հայաստան, Երևան Կորի փող., 55 շենք (Կենտրոն վարչ. շրջան)</p>
          </div>
        </div>
        <div
          className='w-1/4 h-52 bg-green-700 flex justify-center items-center flex-col duration-500 transition hover:scale-110 hover:bg-green-500'>
          <div className='w-1/2 h-32 flex justify-center items-center '>
            <PhoneOutlined className='text-5xl text-white'/>
          </div>
          <div className='w-full h-32 flex justify-center items-start'>
            <p className=' text-center text-1xl text-white'>Տնօրեն` +374-10-540010 ՈՒսուցչանոց` +374-10-541562</p>
          </div>
        </div>
        <div
          className='w-1/4 h-52 bg-amber-500 flex justify-center items-center flex-col duration-500 transition  hover:scale-110 hover:bg-amber-400'>
          <div className='w-1/2 h-32 flex justify-center items-center '>
            <ClockCircleOutlined className='text-5xl text-white'/>
          </div>
          <div className='w-9/12 h-32 flex justify-center items-start'>
            <p className='text-center text-1xl text-white'>Երկուշաբթիից - ուրբաթ, ժամը՝ 08:00 - 18:00</p>
          </div>
        </div>
      </div>

      <div className='w-10/12 m-auto h-screen flex justify-around items-center contact1'>
        <div className='w-1/2 h-auto bg-blue-100 flex justify-around content-around flex-wrap form'>
          <div className='w-3/4 h-auto'>
            <p className='text-2xl text-slate-500  font-bold  mt-6'>Կապ մեզ հետ</p>
          </div>
          <Form
            form={form}
            name="contact"
            layout="vertical"
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className='w-3/4  h-full  flex justify-start items-center flex-wrap'
          >
            <Form.Item className='w-11/12  mt-4'
                       name="name"
                       rules={[{required: true, message: 'Գրեք ձեր անունը!'}, {
                         max: 255,
                         message: 'Հաղորդագրությունը չափազանց 255 նիշ պետք է լինի!'
                       }]}
            >
              <Input
                className='h-10 pl-3 text-1xl outline-0 text-blue-800'
                placeholder="Անուն"
              />
            </Form.Item>

            <Form.Item className='w-11/12'
                       name="email"
                       rules={[
                         {required: true, message: 'Գրեք ձեր էլ․ փոստը!'},
                         {max: 255, message: 'Հաղորդագրությունը չափազանց 255 նիշ պետք է լինի!'},
                         {type: 'email', message: 'Սխալ էլ․ հասցե'},
                       ]}
            >
              <Input
                className='h-10 pl-3 text-1xl outline-0 text-blue-800'
                placeholder="Էլ․հասցե"
              />
            </Form.Item>

            <Form.Item className='w-11/12'
                       name="phone"
                       rules={[
                         {required: true, message: 'Գրեք ձեր հեռախոսահամարը!'},
                         {max: 255, message: 'Հաղորդագրությունը չափազանց 255 նիշ պետք է լինի!'},
                         {pattern: /^\+374\d{8}$/, message: 'Սխալ հեռախոսահամար:'},
                       ]}
            >
              <Input
                className='h-10 pl-3 text-1xl outline-0 text-blue-800'
                placeholder="Հեռ․՝ +37477666666"
              />
            </Form.Item>

            <Form.Item className='w-11/12 '
                       name="message"
                       rules={[{required: true, message: 'Գրեք ձեր հաղորդագրությունը!'},
                         {max: 255, message: 'Հաղորդագրությունը չափազանց է, 255 նիշ պետք է լինի!'}]}
            >
              <Input.TextArea
                className=' pl-3 text-1xl outline-0'
                placeholder="Հաղորդագրություն"
                rows={10}
                style={{height: '100px'}}
              />
            </Form.Item>

            <Form.Item className='formItem'>
              <Button type="submit" htmlType="submit"
                      className='p-5   flex justify-center  items-center mt-4  bg-green-700  text-white   rounded-full '>
                Ուղարկել հիմա
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className='w-1/3 h-4/6 contact-image'>
          <Image src="/school.webp" alt="children" className='w-full h-full object-cover object-top ' width={1000}
                 height={1000}></Image>

        </div>
      </div>
    </div>
  );
};

export default Contact;
