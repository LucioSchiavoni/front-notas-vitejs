import { UseFormRegister, FieldErrors} from "react-hook-form"
import { NotaFormData } from "../../../types";
import ErrorMessage from "../../errors/ErrorMessage";


 type NotasFormProps = {
  register: UseFormRegister<NotaFormData>;
  errors: FieldErrors<NotaFormData>;
};

 
export default function NotasForm({errors, register}: NotasFormProps){

  return (
    <div className="">

        <div className="flex justify-around gap-12 py-6 ">


        <div className="flex flex-col w-7/12 text-xl">
           <div className="relative mb-10">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Motivo</p>
          <input placeholder="" type="text"  id="motivo" className=" text-xl border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0  block bg-white
              border-gray-300 rounded-md" {...register("motivo")}/>
              {errors.motivo && (
  <ErrorMessage>{errors.motivo.message}</ErrorMessage>
)}
        </div>

        <div className="relative mb-10">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Numero de pedido</p>
          <input  id="nro_pedido" placeholder="Nro. pedido" type="number" className="text-xl border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0  block bg-white
              border-gray-300 rounded-md" {...register("nro_pedido")}/>
              {errors.nro_pedido && (
  <ErrorMessage>{errors.nro_pedido.message}</ErrorMessage>
)}
        </div>
        <div className="relative mb-10">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Estado</p>
           <select id="estado" {...register("estado")} className="mt-2 text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8  rounded focus:outline-none focus:border-blue-600">
                                    <option value="EN_PROCESO">En proceso</option>
                                    <option value="EN_CURSO">En curso</option>
                                    <option value="FINALIZADO">Finalizado</option>
                                </select>
                                {errors.estado && (
  <ErrorMessage>{errors.estado.message}</ErrorMessage>
)}
        </div>
        <div className="relative">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Destino</p>
          <input placeholder="" type="text" id="seguimiento[destino]" className="text-xl  border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0  block bg-white
              border-gray-300 rounded-md" {...register("seguimiento.destino")}/>
              
        </div>
        {errors.seguimiento?.destino && (
  <ErrorMessage>{errors.seguimiento.destino.message}</ErrorMessage>
)}
        </div>
    


    <div className="w-8/12">
    <label htmlFor="Observacion" className="block text-xl  pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-700">Observacion</label>

    <textarea placeholder="Observacion..." id="observaciones" {...register("observaciones")} className="block focus:outline-none focus:border-blue-600 mt-2 w-full text-xl placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 "></textarea>
    
   


    </div>


    </div>
  </div>
  

  )
}
