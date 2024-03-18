import React from "react";
import { Form } from "react-router-dom";


export default function Video(){
    return (
        <div className="container mx-auto font-roboto">
        <div className="grid grid-cols-2 gap-2">
          {/* Row 1 */}
          <div className="col-span-2 w-full h-64 bg-gray-200 border border-gray-400 rounded-md flex justify-center items-center" >Video</div>
          
          {/* Row 2 */}
            <div className="grid">
                <p className="text-sm font-semibold">We are trying to bridge the gap of information and guidance between and 
                    your potential and opportunities. We provide narrowed road maps and detailed career paths, personalized 
                    guidance from alumni and mentors, and a supportive community to help you succeed.
                </p>
                <form>
                <div className="mb-4 grid grid-cols-2">
                    <input type="email" id="email" placeholder="Enter your Email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
                    <button className="w-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Click me
                    </button>
                </div>
                </form>
                <p className="text-xs">
                    By clicking Sign Up you're confirming that you agree with our <a> Terms and Conditions.</a>
                </p>
            </div>

          <div >
            <h1 className="text-5xl font-bold">
                Unlock Your Potential with Personalized Career Guidance
            </h1>
            </div>
        </div>
      </div>
    )
}