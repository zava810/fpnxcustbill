"use client";
import FontPicker from '@/app/ui/lifonts/lifonts';

export default function AcmeLogo() {
  return (
    <div>
		<div className="flex flex-row items-center leading-none text-white" >
		  <p className="text-left hover:text-center">zava8.vercel.app</p>
		</div>
		<div className="w-full items-center leading-none text-black" >
		  <FontPicker />
		</div>
    </div>
  );
}
