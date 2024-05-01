import "./App.css";
import { GoBug } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RxDiscordLogo } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () =>
    toast("sorry for incovenince, site is under construction");

  const buttons = [
    {
      icon: <GoBug />,
      title: "bounty",
      link: null,
    },
    {
      icon: <IoLogoWhatsapp />,
      title: "whatsapp",
      link: "https://wa.me/+917985803074",
    },
    {
      icon: <RxDiscordLogo />,
      title: "discord ",
      link: null,
    },
  ];

  return (
    <div className=' w-screen h-screen '>
      <div className='relative w-full h-full overflow-hidden flex items-center flex-col justify-between'>
        <img
          className='absolute opacity-90'
          src='https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
        <div className='flex justify-between items-center w-11/12 relative'>
          <h1 className='text-2xl uppercase tracking-[1rem] border-b border-zinc-400 pb-2 my-14 text-zinc-400'>
            sengar
          </h1>
          <button className='border border-white text-white tracking-wide px-10 py-2 rounded-lg'>
            login
          </button>
        </div>

        <div className='px-10 py-5 rounded text-white bg-zinc-800 relative font-semibold capitalize tracking-wide'>
          join our group and grab the opportunity, we share freelancing project
        </div>

        <div className='w-full flex  justify-center items-center h-1/4 bg-zinc-800 relative'>
          <h1 className='absolute text-white bg-zinc-800 border px-7 py-2 text-sm rounded-full -top-5 capitalize tracking-widest'>
            this site is under construction
          </h1>
          <div className='w-full  flex flex-col items-center h-4/5 mt-7'>
            <h1 className='text-white text-xl capitalize tracking-widest mb-14'>
              join over community
            </h1>
            <div className='flex justify-evenly w-6/12'>
              {buttons.map((item, index) => {
                return (
                  <a
                    href={item?.link === null ? notify : item?.link}
                    key={index}
                  >
                    <button
                      className='capitalize text-3xl text-white px-5 py-2 flex gap-1 flex-col items-center '
                      onClick={item?.link === null ? notify : item?.link}
                    >
                      {item.icon}
                      <span className='text-lg hover:border-b'>
                        {item.title}
                      </span>
                    </button>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer bodyStyle={{ backgroundColor: "none" }} />
    </div>
  );
}

export default App;
