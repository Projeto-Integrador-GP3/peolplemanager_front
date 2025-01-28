function BuscarCargo() { 

    return ( 
  
      <div className="min-h-screen flex items-center justify-center bg[#F5F5F5]"> 
  
        <div className="w-full max-w-sm p-6 bg-[#B4E1FF] rounded-lg shadow-lg"> 
  
          <h2 className="text-2xl font-semibold text-center mb-6 text-[#694873]">Buscar cargo</h2> 
  
          <form> 
  
            <div className="mb-4"> 
  
              <label htmlFor="colaborador" className="block text-sm font-medium text-[#694873] text-center"> 
  
                Cargo 
  
              </label> 
  
              <input 
  
                type="text" 
  
                id="cargo" 
  
                name="cargo" 
  
                placeholder="Digite o nome do cargo" 
  
                required 
  
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
  
              /> 
  
            </div> 
  
            <button 
  
              type="submit" 
  
              className="w-full bg-[#694873] text-white py-2 rounded-md hover:bg-[#F5F5F5] hover:text-black transition duration-200" 
  
            > 
  
              Buscar 
  
            </button> 
  
          </form> 
  
        </div> 
  
      </div> 
  
    ); 
  
  } 
  
   
  
  export default BuscarCargo; 