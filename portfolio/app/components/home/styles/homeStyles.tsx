import Styled from "@emotion/styled";

export const HomeStyles = Styled.div`
    display:flex;
    flex-direction:column;
    padding:30px 80px;
    .children{
        padding: 20px;
        display:flex;
        gap: 200px
    }
    .children-left{
        
        display: flex;
        flex-direction:column;
        gap: 20px
    }
    .social-icons{
        display: flex;
        align-items:center;
        gap:20px;

    .buttons{
        display: flex;
        align-items:center;
        gap:4px;
        border: 1px solid grey;
        padding: 4px;
        border-radius: 4px;
        width: fit-content
    }
    .buttons: hover{
    border-color: #2727a6;
    text-decoration: underline;
    color: #3d3db9;
}


}
    
`;
