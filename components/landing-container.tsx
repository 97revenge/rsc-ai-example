"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { streamComponent } from "@/actions/user";
import { ArrowRightIcon, SearchIcon } from "lucide-react";
import AnimatedBeam from "./animata/animated-beam";

export const LandingContainer = () => {
  const [component, setComponent] = useState<React.ReactNode>();

  const popularChannels = [
    { name: "Nick DiGiovanni", image: "/placeholder.svg?height=40&width=40" },
    { name: "MrBeast", image: "/placeholder.svg?height=40&width=40" },
    { name: "Adin Live", image: "/placeholder.svg?height=40&width=40" },
    { name: "CaseyNeistat", image: "/placeholder.svg?height=40&width=40" },
    { name: "Rosanna Pansino", image: "/placeholder.svg?height=40&width=40" },
    { name: "Chris Bumstead", image: "/placeholder.svg?height=40&width=40" },
    { name: "Adin Live", image: "/placeholder.svg?height=40&width=40" },
    { name: "CaseyNeistat", image: "/placeholder.svg?height=40&width=40" },
    { name: "Rosanna Pansino", image: "/placeholder.svg?height=40&width=40" },
  ];

  const [input, setInput] = useState<any>("");

  return (
    <>
      {/* Header */}
      {/* Main Content */}
      <AnimatedBeam className="h-screen">
        <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
          <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold text-center mb-8 text-black dark:text-white drop-shadow-lg ">
            Review any
            <br />
            <div className="flex flex-row items-center justi">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117.88"
                height="32"
                viewBox="0 0 512 139"
                className="animate-accordion-down "
              >
                <path
                  fill="#11110F"
                  d="M98.696 59.312h-43.06a2.015 2.015 0 0 0-2.013 2.014v21.053c0 1.111.902 2.015 2.012 2.015h16.799v26.157s-3.772 1.286-14.2 1.286c-12.303 0-29.49-4.496-29.49-42.288c0-37.8 17.897-42.773 34.698-42.773c14.543 0 20.809 2.56 24.795 3.794c1.253.384 2.412-.863 2.412-1.975l4.803-20.342c0-.52-.176-1.146-.769-1.571C93.064 5.527 83.187 0 58.233 0C29.488 0 0 12.23 0 71.023c0 58.795 33.76 67.556 62.21 67.556c23.555 0 37.844-10.066 37.844-10.066c.59-.325.653-1.148.653-1.526V61.326c0-1.11-.9-2.014-2.01-2.014m221.8-51.953c0-1.12-.888-2.024-1.999-2.024h-24.246a2.016 2.016 0 0 0-2.008 2.024l.006 46.856h-37.792V7.36c0-1.12-.892-2.024-2.001-2.024H228.21a2.014 2.014 0 0 0-2.003 2.024v126.872c0 1.12.9 2.03 2.003 2.03h24.245c1.109 0 2-.91 2-2.03V79.964h37.793l-.066 54.267c0 1.12.9 2.03 2.008 2.03h24.304c1.11 0 1.998-.91 2-2.03zM144.37 24.322c0-8.73-7-15.786-15.635-15.786c-8.627 0-15.632 7.055-15.632 15.786c0 8.72 7.005 15.795 15.632 15.795c8.635 0 15.635-7.075 15.635-15.795m-1.924 83.212V48.97a2.015 2.015 0 0 0-2.006-2.021h-24.169c-1.109 0-2.1 1.144-2.1 2.256v83.905c0 2.466 1.536 3.199 3.525 3.199h21.775c2.39 0 2.975-1.173 2.975-3.239zM413.162 46.95h-24.06c-1.104 0-2.002.909-2.002 2.028v62.21s-6.112 4.472-14.788 4.472s-10.977-3.937-10.977-12.431v-54.25c0-1.12-.897-2.03-2.001-2.03h-24.419c-1.102 0-2.005.91-2.005 2.03v58.358c0 25.23 14.063 31.403 33.408 31.403c15.87 0 28.665-8.767 28.665-8.767s.61 4.62.885 5.168c.276.547.994 1.098 1.77 1.098l15.535-.068c1.102 0 2.005-.911 2.005-2.025l-.008-85.168a2.02 2.02 0 0 0-2.008-2.028m55.435 68.758c-8.345-.254-14.006-4.041-14.006-4.041V71.488s5.585-3.423 12.436-4.035c8.664-.776 17.013 1.841 17.013 22.51c0 21.795-3.768 26.096-15.443 25.744m9.49-71.483c-13.665 0-22.96 6.097-22.96 6.097V7.359a2.01 2.01 0 0 0-2-2.024h-24.315a2.013 2.013 0 0 0-2.004 2.024v126.872c0 1.12.898 2.03 2.007 2.03h16.87c.76 0 1.335-.39 1.76-1.077c.419-.682 1.024-5.85 1.024-5.85s9.942 9.422 28.763 9.422c22.096 0 34.768-11.208 34.768-50.315s-20.238-44.217-33.913-44.217M212.229 46.73h-18.187l-.028-24.027c0-.909-.468-1.364-1.52-1.364H167.71c-.964 0-1.481.424-1.481 1.35v24.83s-12.42 2.998-13.26 3.24a2.01 2.01 0 0 0-1.452 1.934v15.603c0 1.122.896 2.027 2.005 2.027h12.707v37.536c0 27.88 19.556 30.619 32.753 30.619c6.03 0 13.243-1.937 14.434-2.376c.72-.265 1.138-1.01 1.138-1.82l.02-17.164c0-1.119-.945-2.025-2.01-2.025c-1.06 0-3.77.431-6.562.431c-8.933 0-11.96-4.154-11.96-9.53l-.001-35.67h18.188a2.014 2.014 0 0 0 2.006-2.028V48.753c0-1.12-.897-2.022-2.006-2.022"
                />
              </svg>{" "}
              Developer
            </div>
          </h1>
          <div className="w-auto  mt-2 ">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setComponent(await streamComponent(input));
              }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-2 transition-all duration-300 hover:bg-gray-200 focus-within:ring-2 focus-within:ring-purple-400">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  placeholder="Drop your github username ..."
                  className="flex-grow bg-transparent outline-none text-primary placeholder-gray-500 px-4 py-2 rounded-full"
                />
                <Button
                  type="submit"
                  className="bg-black text-white rounded-full px-6 py-2 hover:bg-primary transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  Send <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          <div className="w-full max-w-xl mt-4">
            <h2 className="text-lg font-semibold mb-4">Popular Developers</h2>
            <div className="grid grid-cols-3 gap-4">
              {popularChannels.map((channel, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-gray-100 rounded-lg p-2"
                >
                  <img
                    src={channel.image}
                    alt={channel.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-sm">{channel.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 min-h-[120px] transition-all duration-300 hover:bg-gray-200 hover:shadow-md">
            {component ? (
              component
            ) : (
              <p className="text-gray-500 text-center transition-all duration-300 hover:text-gray-700">
                Your response will appear here
              </p>
            )}
          </div>
        </main>
      </AnimatedBeam>
    </>
  );
};
