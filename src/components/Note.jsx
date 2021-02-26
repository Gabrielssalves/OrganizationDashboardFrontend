import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrash, faPencilAlt, faEnvelope, faSquare, faCalendarAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

import './Note.css'

export default class Note extends React.Component {

    initialCommitmentDate = new Date(this.props.initialCommitmentDate);
    finalCommitmentDate = new Date(this.props.finalCommitmentDate);

    formatDate = (date) => {
        const months = [
            "janeiro", "fevereiro", "março", "abril", "maio", "junho", 
            "julho","agosto","setembro","outubro","novembro","dezembro"
        ];  
        const daysOfWeek = [
            "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"
        ]      
        return daysOfWeek[date.getDay()] + ", " + date.getDate() + " de " + months[date.getMonth()];
    }

    formatTime = (date) => {
        return date.getHours() + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
    }

    formatRangeDate = (initialDate, finalDate) => {
        if(initialDate.getDate() === finalDate.getDate() && initialDate.getMonth() === finalDate.getMonth())
            return this.formatDate(initialDate) + " • " + this.formatTime(initialDate) + " até " + this.formatTime(finalDate)
        else
            return this.formatDate(initialDate) + " • " + this.formatTime(initialDate) + " até " + this.formatDate(finalDate) + " • " + this.formatTime(finalDate)
    } 

    render () {
        return (
            <div className="Note">
                <div className="Tools">
                    <div className="Button"><button><FontAwesomeIcon icon={faPencilAlt} /></button></div>                    
                    <div className="Button"><button><FontAwesomeIcon icon={faTrash} /></button></div>                    
                    <div className="Button"><button><FontAwesomeIcon icon={faEnvelope} /></button></div>                    
                    <div className="Button"><button><FontAwesomeIcon icon={faTimes} /></button></div>    
                </div>
                <div className="Main">
                    <div className="Content">
                        <FontAwesomeIcon icon={faSquare} /> 
                        <span className="Name">{this.props.name}</span>
                    </div>
                    <div className="Content">
                        <FontAwesomeIcon icon={faCommentAlt} /> 
                        <span className="Description">{this.props.description}</span>
                    </div>
                    <div className="Content">
                        <FontAwesomeIcon icon={faCalendarAlt} /> 
                        <span className="RangeCommitmentDate">{this.formatRangeDate(this.initialCommitmentDate, this.finalCommitmentDate)}</span>
                    </div>
                </div>                
            </div>
        )
    }
}
