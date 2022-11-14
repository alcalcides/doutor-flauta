import { IProposalExercise } from "./IProposalExercise";

export default function index({title, imageSource}: IProposalExercise) {
    return (
        <>
        <li>{title}</li>
        <div style={{
            width: '90%',
            boxShadow: '2px 2px 5px gray',
        }}>
            <img src={imageSource} style={{
                width: '100%',
                height: 'auto'
            }}/>
        </div>
        </>
    )
} 

