import { Link } from "react-router-dom" 

 

function Navbar() { 

    return ( 

        <> 

            <div className='w-full flex justify-center py-4 

                           bg-[#B4E1FF]  text-[#694873]'> 

             

                <div className="container flex justify-between text-lg"> 

                    <a href="http://localhost:5173/" rel="noopener noreferrer"> 

                    <img src="https://cdn-icons-png.freepik.com/512/7512/7512993.png?ga=GA1.1.334053764.1738073481" 

                    className="w-12" /> 

                    </a> 

 

                    <div className='flex gap-4'> 

                        <Link to='/BuscarCargo' className='hover:underline'>Buscar cargo</Link> 

                        <Link to='/BuscarColaborador' className='hover:underline'>Buscar funcionário</Link> 

                    </div> 

                </div> 

            </div> 

        </> 

    ) 

} 

 

export default Navbar 

 