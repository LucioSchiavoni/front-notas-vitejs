import { useQuery } from "@tanstack/react-query";
import { getNotasByIdRequest } from "../../api/notas";
import { Post } from "../../interface/notas";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonCreate from "../button/ButtonCreate";
import { MdArrowBack } from "react-icons/md";
import { FaFolder } from "react-icons/fa";

import ButtonDelete from "../button/ButtonDelete";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { SlOptionsVertical } from "react-icons/sl";
import { useAuthStore } from "../../context/auth/store";
import FileCard from "../item/FileCard";


  


const NotaId = () => {
    
   const { id } = useParams<{ id: string }>();

    const user = useAuthStore((state) => state.profile)

    const {data , isLoading, error} = useQuery<Post>({
        queryKey: ['post', id],
        queryFn: () => getNotasByIdRequest(id || ""),
        enabled: !!id,
    })

    const navigate = useNavigate();

const handleRowClick = (postId: number, folderId: number, titlePost: string, nameFolder: string) => {
    navigate(`/folder/${postId}/${folderId}/${titlePost}/${nameFolder}`);
};

        if (isLoading) return <div><p>cargando...</p></div>;
        if (error) return <div><p>Error: {error.message}</p></div>;
        if (!data) return <div><p>No se encontraron datos.</p></div>;


  return (

    <div className="flex flex-1 justify-center items-center flex-col gap-10  dark:text-white ">
      



<aside className="flex absolute left-24 top-10 gap-5">
    <Link to='/auth' className="shadow-xl h-10 hover:bg-gray-100 dark:hover:bg-neutral-800 px-3 py-1 rounded-md text-3xl">
    <MdArrowBack/>
</Link>
<article className="flex  flex-col">
        <h1 className=" font-medium text-3xl">{data.title}</h1>
    <p className="text-gray-700 dark:text-white px-3 text-start mt-2 ">{data.content}</p>
</article>

    <div className=''>
        <ButtonCreate id={data.id}/> 
      </div>
</aside>
<section className=" w-10/12 mt-32 ">    

        <h2 className="font-thin text-2xl pb-6 px-3">
        Carpetas
    </h2>

       
     <div className="grid grid-cols-6 w-full gap-6">
                        { 
                                data.folder?.map((itemFolder, folderIndex) => (

                              <>  
                              <div  className="items-center  dark:border-neutral-800 hover:bg-gray-200 dark:hover:bg-[#22272e] border mt-6 py-2.5 flex justify-between  shadow-xl  px-4 bg-gray-100 dark:bg-[#181b20] dark:text-white  rounded-md">

                            
                              <button onClick={() => handleRowClick(data.id, itemFolder.id, data.title || "", itemFolder.nameFolder)} key={folderIndex} className="flex space-x-5">
                                    <p className=" font-thin">{itemFolder.nameFolder}</p>
                                    <span className="text-xl mt-1 dark:text-white"><FaFolder/></span>
                             
                                </button>
                                <>
                                
                            
                                <Menu>
                             <MenuButton  
                                    as={IconButton}
                                    aria-label='Options'
                                    variant='outline'
                                    backgroundColor={"dark:black white dark:hover:bg-neutral-600"}
                                    border={"none"}
                                    textColor={"dark:white black"}
                                    icon={<SlOptionsVertical />}
                                     
                                        />
                            <MenuList textColor={"black"}>
                            <MenuItem className="text-black" onClick={() => handleRowClick(data.id, itemFolder.id, data.title || "", itemFolder.nameFolder)} >
                            Ver
                            </MenuItem>
                            {
                            user.rolUser === "ADMIN" ?
                         <MenuItem >
                         
                        <ButtonDelete id={data.id} folderId={itemFolder.id} /> 
                                                   
                        </MenuItem>
                         :
                            null
                         } 
                        </MenuList>
                        </Menu>
    </>
                          </div>
                                     </>
                            ))
                        }
                    </div>

            </section>
 
 <section className=" w-10/12 mt-16 ">
   <div className="flex items-center gap-4">
<h2 className="text-2xl  px-5 py-8 font-thin">Archivos</h2>
       

   </div>

     
       <div className="grid grid-cols-6  gap-5">

     {data.file?.map((itemFile, indexFile) => (
                    <FileCard id={itemFile.id} createdAt={itemFile.createdAt} nameFile={itemFile.nameFile} idPost={data.id} key={indexFile} />
                    
                    ))}
    </div>
    </section>              
                   

                   
                  
        </div>
  
  )
}

export default NotaId