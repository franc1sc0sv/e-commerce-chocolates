import { useEffect, useRef } from "react"

export default function InfoFeed() {
    const nombre = useRef();

    return (
        <>
            <p className=" flex font-bold text-5xl mb-8 text-primary">Brindanos tu opinión para mejorar</p>
            <div className=" flex gap-10 mb-8">
                <input ref={nombre} onChange={()=> console.log(nombre.current.value)} type="text" name="info" id="nombre" placeholder="Nombre" className=" w-[20rem] border-[#4140523a] border-b-2 outline-none rounded-sm focus:border-[#353441] transition-all duration-[500ms] ease-in-out" />

                <input type="email" name="info" id="correo" placeholder="Correo" className=" w-[20rem] border-primary border-b-2 outline-none rounded-sm focus:border-[#414052] transition-all duration-[500ms] ease-in-out" />
            </div>
            <textarea name="" id="" cols="80" rows="10" placeholder="Dinos tu opinion" className=" flex mb-8 border-primary border-2 resize-none rounded focus:border-[#414052] transition-all duration-[500ms] ease-in-out outline-none p-[0.5rem]"></textarea>
        </>
    )
}