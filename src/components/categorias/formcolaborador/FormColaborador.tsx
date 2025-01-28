function FormColaborador() { 

    return ( 

        <div className="container flex flex-col items-center justify-center mx-auto  text-[#694873]"> 

            <h1 className="text-4xl text-center my-8"> 

                Cadastrar colaborador 

            </h1> 

 

            <form className="w-1/2 flex flex-col gap-4 mb-8" > 

                <div className="flex flex-col gap-2"> 

                    <label htmlFor="name">Nome do Colaborador:</label> 

                    <input 

                        type="text" 

                        placeholder="digite o nome do colaborador" 

                        name='nomeCompleto' 

                        className="border-2 border-slate-700 rounded p-2" 

                    /> 

                    <label htmlFor="cpf">CPF: </label> 

                    <input  

                        type="text" 

                        placeholder="Digite o Cpf do colaborador"  

                        name="cpf"  

                        className="border-2 border-slate-700 rounded p-2" 

                    /> 

                    <label htmlFor="cargo">Cargo: </label> 

                    <input  

                        type="text" 

                        placeholder="Digite o cargo do colaborador"  

                        name="cargo"  

                        className="border-2 border-slate-700 rounded p-2" 

                    /> 

                    <label htmlFor="data">Data de Admissão: </label> 

                    <input  

                        type="date" 

                        placeholder="Digite a data de admissao do colaborador"  

                        name="dataAdmissao"  

                        className="border-2 border-slate-700 rounded p-2" 

                    /> 

                </div> 

                <button 

                     className=" bg-[#694873] text-white py-2 rounded-md  

                     hover:bg-[#F5F5F5] hover:text-black transition duration-200" 

                    type="submit"> 

                    Cadastrar 

                </button> 

            </form> 

        </div> 

    ); 

} 

 

export default FormColaborador; 

 