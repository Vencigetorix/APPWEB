import styled, {css} from "styled-components";

const colores = {
    borde: "orange",
    error: "red",
    exito: "#1ed12d"
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;

    ${props => props.valido === "false" && css`
        color: ${colores.error};
    `}
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background: rgba(0, 0, 0, .3);
    color: cadetblue;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: 0.3s ease all;
    border: 3px solid transparent;

    &:focus{
        border: 3px solid ${colores.borde};
        outline:none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }

    ${props => props.valido === "true" && css`
        border: 3px solid transparent;
    `}

    ${props => props.valido === "false" && css`
        border: 3px solid ${colores.error} !important;
    `}
`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display:none;

    ${props => props.valido === "true" && css`
        display: none;
    `}
    ${props => props.valido === "false" && css`
        display: block;
    `}
`;

const TerminosCondiciones = styled.div`
    grid-column: span 2;

    input{
        margin-right: 10px;   
    }

    @media (max-width:800px){
        grid-column: span 1;
    }
`;

const BotonCentrado = styled.div`
    display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;
    
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Boton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 45px;
    line-height: 45px;
    width: 30%;
    background: #fca311;
    color:  rgb(68, 68, 68);
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: .1s ease all;

    &:hover{
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
    }
`;

const MensajeExito = styled.p`
    font-size: 14px;
    color: ${colores.exito};
    display:none;
`;

const MensajeError = styled.div`
    height: 45px;
    line-height: 45px;
    background: red;
    padding: 0px 15px;
    grid-column: span 2;
    p{
        margin: 0;
    }
    b{
        margin-left: 10px;
    }
`;



export {
    Formulario, 
    Label, 
    GrupoInput, 
    Input, 
    LeyendaError,  
    TerminosCondiciones, 
    BotonCentrado, 
    Boton,
    MensajeExito,
    MensajeError
};